import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ContentData {
  slug: string;
  content: string;
  [key: string]: unknown;
}

export async function getContentByComponent(component: string, fileName: string = 'content.md'): Promise<ContentData | null> {
  try {
    const fullPath = path.join(contentDirectory, component, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      slug: fileName.replace(/\.md$/, ''),
      content: contentHtml,
      ...data
    };
  } catch (error) {
    console.error(`Error reading content for ${component}/${fileName}:`, error);
    return null;
  }
}

export function getAllContentForComponent(component: string): ContentData[] {
  try {
    const componentPath = path.join(contentDirectory, component);
    
    if (!fs.existsSync(componentPath)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(componentPath).filter(file => file.endsWith('.md'));
    
    return fileNames.map(fileName => {
      const fullPath = path.join(componentPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.md$/, ''),
        content,
        ...data
      };
    });
  } catch (error) {
    console.error(`Error reading all content for ${component}:`, error);
    return [];
  }
}

export function getContentSync(component: string, fileName: string = 'content.md'): ContentData | null {
  try {
    const fullPath = path.join(contentDirectory, component, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      slug: fileName.replace(/\.md$/, ''),
      content,
      ...data
    };
  } catch (error) {
    console.error(`Error reading content for ${component}/${fileName}:`, error);
    return null;
  }
}