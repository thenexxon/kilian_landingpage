"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { fetchVimeoThumbnails } from "@/utils/vimeoThumbnails";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  videoUrl: string;
  videoType?: "vimeo" | "youtube" | "direct"; // Support different video types
}

interface VideoSliderProps {
  slides?: Slide[];
  className?: string;
}

// Real testimonial data
const sampleSlides: Slide[] = [
  {
    id: 1,
    image: "/foobar.jpg",
    title: "Steffen - 48 Jahre alt",
    description:
      "Ich kann mir den Start ins Trading ohne die Unterstützung von Experten kaum vorstellen. Hier gibt es kompetente Coaches, die stets bereit sind, bei Fragen zu helfen.",
    videoUrl: "https://vimeo.com/915612970",
    videoType: "vimeo",
  },
  {
    id: 2,
    image: "/foobar.jpg",
    title: "Thomas - 59 Jahre alt",
    description:
      "Wer im Trading konstant Gewinne erzielen möchte, benötigt professionelle Unterstützung. Es ist ratsam, sich einen Coach zu suchen. Am Besten den Kilian.",
    videoUrl: "https://vimeo.com/915607881",
    videoType: "vimeo",
  },
  {
    id: 3,
    image: "/foobar.jpg",
    title: "Luke - 40 Jahre alt",
    description:
      "Ich habe noch niemanden auf dem Markt getroffen, der so professionell ist. Alle Teilnehmer sind zufrieden und erzielen gute Gewinne. Ich glaube an das Projekt.",
    videoUrl: "https://vimeo.com/915603456",
    videoType: "vimeo",
  },
  {
    id: 4,
    image: "/foobar.jpg",
    title: "Kevin - 20 Jahre alt",
    description:
      "Der kostenlose Videokurs bewahrt dich vor Fehlern, die typisch für Anfänger sind. Zudem fördert der Austausch mit anderen Mitgliedern dein Wachstum als Trader.",
    videoUrl: "https://vimeo.com/915598600",
    videoType: "vimeo",
  },
  {
    id: 5,
    image: "/foobar.jpg",
    title: "Philipp – 22 Jahre alt",
    description:
      "Nach langer Suche fand ich endlich das Mentoring-Programm, das mir nicht nur Wissen vermittelte, sondern auch zeigte, wie ich es praktisch umsetze, um meinen Traum vom Wohlstand zu verwirklichen.",
    videoUrl: "https://vimeo.com/793489157",
    videoType: "vimeo",
  },
  {
    id: 6,
    image: "/foobar.jpg",
    title: "Nadir - 20 Jahre alt",
    description:
      "Ich war wirklich auf vielen Events und bei vielen Coachings - aber keines war so professionell und strukturiert wie dieses!",
    videoUrl: "https://vimeo.com/793488933",
    videoType: "vimeo",
  },
  {
    id: 7,
    image: "/foobar.jpg",
    title: "Dieter - 45 Jahre alt",
    description:
      "Es ist ein steiniger Weg, wenn du dir selbst alles beibringen möchtest. Deshalb wollte ich direkt mit jemanden arbeiten, der weiß, wovon er spricht",
    videoUrl: "https://vimeo.com/793488851",
    videoType: "vimeo",
  },
  {
    id: 8,
    image: "/foobar.jpg",
    title: "Marie - 44 Jahre alt",
    description:
      "Ich hätte anfangs nicht gedacht, dass ich als komplette Anfängerin es auch nach etwas Einarbeitungen zu meinen ersten Ziele schaffe!",
    videoUrl: "https://vimeo.com/793488901",
    videoType: "vimeo",
  },
  {
    id: 9,
    image: "/foobar.jpg",
    title: "Kamil - 20 Jahre alt",
    description:
      "Der kostenlose Videokurs schützt dich vor Anfängerfehlern.",
    videoUrl: "https://vimeo.com/793489184",
    videoType: "vimeo",
  },
];

function VideoSlider({ slides, className }: VideoSliderProps) {
  const slidesData = slides && slides.length > 0 ? slides : sampleSlides;
  const [activeSlide, setActiveSlide] = useState(slidesData[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  const [thumbnails, setThumbnails] = useState<{ [url: string]: string }>({});
  const [thumbnailsLoading, setThumbnailsLoading] = useState(true);

  // Fetch thumbnails on component mount
  useEffect(() => {
    const loadThumbnails = async () => {
      const videoUrls = slidesData.map(slide => slide.videoUrl);
      const fetchedThumbnails = await fetchVimeoThumbnails(videoUrls);
      setThumbnails(fetchedThumbnails);
      setThumbnailsLoading(false);
    };

    loadThumbnails();
  }, [slidesData]);

  // Update Swiper when thumbnails are loaded to recalculate layout
  useEffect(() => {
    if (!thumbnailsLoading) {
      // Small delay to ensure images are rendered
      const timer = setTimeout(() => {
        // Force Swiper to update its layout
        const swiperEl = document.querySelector('.testimonial-swiper-custom');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (swiperEl && (swiperEl as any).swiper) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (swiperEl as any).swiper.update();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [thumbnailsLoading]);

  const openModal = (slide: Slide) => {
    setCurrentSlide(slide);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentSlide(null);
  };

  // Extract Vimeo ID from URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  // Get thumbnail for a slide
  const getThumbnailUrl = (slide: Slide) => {
    return thumbnails[slide.videoUrl] || slide.image;
  };

  return (
    <div className={`${className || "overflow-hidden"}`}>
      <div className="container mx-auto mt-16 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setActiveSlide(slidesData[realIndex]);
          }}
          onSwiper={() => {
            // Initialize with first slide
            setActiveSlide(slidesData[0]);
          }}
          className="testimonial-swiper-custom"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="perspective-normal relative cursor-pointer group overflow-hidden rounded-2xl"
                onClick={() => openModal(slide)}
              >
{thumbnailsLoading ? (
                  <div className="block overflow-hidden rounded-2xl w-full aspect-video bg-gray-800 animate-pulse flex items-center justify-center">
                    <Play strokeWidth={1} size={50} className="text-gray-600" />
                  </div>
                ) : (
                  <Image
                    className="block overflow-hidden rounded-2xl w-full h-auto object-cover"
                    src={getThumbnailUrl(slide)}
                    width={600}
                    height={338}
                    alt={slide.title}
                    onLoad={() => {
                      // Update Swiper layout when image loads
                      const swiperEl = document.querySelector('.testimonial-swiper-custom');
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      if (swiperEl && (swiperEl as any).swiper) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (swiperEl as any).swiper.update();
                      }
                    }}
                    onError={(e) => {
                      // Fallback to default image if thumbnail fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "/foobar.jpg";
                    }}
                  />
                )}
                {/* Play Button Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-1/2 group-hover:scale-125 transition-all">
                  <Play strokeWidth={1} size={50} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative mt-8 md:mt-16">
        {/* Testimonial Text */}
        <div className="text-center transition-all duration-500 ease-in-out max-w-[500px] m-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-500 ease-in-out">
            {activeSlide.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed transition-all duration-500 ease-in-out">
            {activeSlide.description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-6 gap-8 z-10 relative md:absolute bottom-0 md:w-[800px] md:left-1/2 md:top-1/2 md:mt-0 md:justify-between md:-translate-1/2">
          <button 
            className="custom-prev w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <ArrowLeft
              strokeWidth={0.5}
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] text-white group-hover:text-blue-400 transition-colors duration-300"
              aria-hidden="true"
            />
          </button>
          <button 
            className="custom-next w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <ArrowRight
              strokeWidth={0.5}
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] text-white group-hover:text-blue-400 transition-colors duration-300"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Animated Video Modal */}
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="relative w-full max-w-[700px] bg-black rounded-2xl overflow-hidden border-2 border-white/25"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {currentSlide && (
                <div className="aspect-video w-full">
                  {currentSlide.videoType === "vimeo" &&
                  getVimeoId(currentSlide.videoUrl) ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${getVimeoId(
                        currentSlide.videoUrl
                      )}?autoplay=1&title=0&byline=0&portrait=0`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : currentSlide.videoType === "youtube" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${currentSlide.videoUrl}?autoplay=1`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <video
                      src={currentSlide.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VideoSlider;
