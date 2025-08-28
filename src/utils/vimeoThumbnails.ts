// Utility functions for fetching Vimeo thumbnails

export interface VimeoThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VimeoOEmbedResponse {
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}

// Extract Vimeo video ID from URL
export function extractVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

// Get thumbnail using Vimeo's oEmbed API
export async function getVimeoThumbnail(videoUrl: string): Promise<string> {
  const videoId = extractVimeoId(videoUrl);
  
  if (!videoId) {
    return '/foobar.jpg'; // Fallback to default image
  }

  try {
    // Try oEmbed API first with width parameter for higher quality
    const oEmbedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}&width=1280`;
    const response = await fetch(oEmbedUrl);
    
    if (response.ok) {
      const data: VimeoOEmbedResponse = await response.json();
      // oEmbed sometimes returns low-res, so try to upgrade the URL
      let thumbnailUrl = data.thumbnail_url;
      
      // Try to upgrade to higher resolution if it's a standard Vimeo CDN URL
      if (thumbnailUrl.includes('i.vimeocdn.com')) {
        // Replace resolution in URL with higher quality
        thumbnailUrl = thumbnailUrl.replace(/_\d+x\d+/, '_1280x720');
      }
      
      return thumbnailUrl;
    }
  } catch (error) {
    console.warn('oEmbed API failed, trying direct URL:', error);
  }

  // Try Vimeo API v2 for potentially better thumbnails
  try {
    const apiV2Url = `https://vimeo.com/api/v2/video/${videoId}.json`;
    const response = await fetch(apiV2Url);
    
    if (response.ok) {
      const data = await response.json();
      if (data && data[0] && data[0].thumbnail_large) {
        return data[0].thumbnail_large;
      }
    }
  } catch (error) {
    console.warn('Vimeo API v2 failed:', error);
  }

  // Fallback to direct thumbnail URL patterns (ordered by quality - highest first)
  const directUrls = [
    `https://vumbnail.com/${videoId}.jpg`,
    `https://i.vimeocdn.com/video/${videoId}_1280x720.jpg`,
    `https://i.vimeocdn.com/video/${videoId}_960x540.jpg`,
    `https://i.vimeocdn.com/video/${videoId}_640x360.jpg`,
    `https://i.vimeocdn.com/video/${videoId}_295x166.jpg`
  ];

  // Test each direct URL
  for (const url of directUrls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        return url;
      }
    } catch (error) {
      console.warn(`Direct URL failed: ${url}`, error);
    }
  }

  // Final fallback
  return '/foobar.jpg';
}

// Batch fetch thumbnails for multiple videos
export async function fetchVimeoThumbnails(videoUrls: string[]): Promise<{ [url: string]: string }> {
  const thumbnails: { [url: string]: string } = {};
  
  const promises = videoUrls.map(async (url) => {
    const thumbnail = await getVimeoThumbnail(url);
    thumbnails[url] = thumbnail;
  });

  await Promise.all(promises);
  return thumbnails;
}