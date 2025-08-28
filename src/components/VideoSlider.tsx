"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

// Sample slides for testing
const sampleSlides: Slide[] = [
  {
    id: 1,
    image: "/foobar.jpg",
    title: "Thomas, 31 Jahre",
    description:
      "Wer im Trading konstant Gewinne erzielen möchte, benötigt professionelle Unterstützung. Es ist ratsam, sich einen Coach zu suchen. Am besten den Kilian.",
    videoUrl: "https://vimeo.com/76979871",
    videoType: "vimeo",
  },
  {
    id: 2,
    image: "/foobar.jpg",
    title: "Sarah, 28 Jahre",
    description:
      "Die Strategien haben mein Trading revolutioniert. Endlich verstehe ich die Märkte und kann erfolgreiche Entscheidungen treffen.",
    videoUrl: "https://vimeo.com/76979871",
    videoType: "vimeo",
  },
  {
    id: 3,
    image: "/foobar.jpg",
    title: "Michael, 35 Jahre",
    description:
      "Durch das professionelle Coaching konnte ich meine Verluste reduzieren und konstante Gewinne erzielen. Absolut empfehlenswert!",
    videoUrl: "/testimonial-videos/michael.mp4",
    videoType: "direct",
  },
  {
    id: 4,
    image: "/foobar.jpg",
    title: "Anna, 29 Jahre",
    description:
      "Die Lernmaterialien sind strukturiert und verständlich. Ich kann das Coaching jedem empfehlen, der erfolgreich traden möchte.",
    videoUrl: "https://vimeo.com/76979871",
    videoType: "vimeo",
  },
  {
    id: 5,
    image: "/foobar.jpg",
    title: "David, 42 Jahre",
    description:
      "Nach Jahren des Verlierens habe ich endlich eine profitable Strategie gefunden. Vielen Dank für die professionelle Unterstützung!",
    videoUrl: "/testimonial-videos/david.mp4",
    videoType: "direct",
  },
];

function VideoSlider({ slides, className }: VideoSliderProps) {
  const slidesData = slides && slides.length > 0 ? slides : sampleSlides;
  const [activeSlide, setActiveSlide] = useState(slidesData[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);

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

  return (
    <div className={`${className || "overflow-hidden"}`}>
      <div className="container mx-auto mt-16 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
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
          onSwiper={(swiper) => {
            // Initialize with first slide
            setActiveSlide(slidesData[0]);
          }}
          className="testimonial-swiper-custom"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="perspective-normal relative cursor-pointer group overflow-hidden rounded-2xl"
                onClick={() => openModal(slide)}
              >
                <Image
                  className="block overflow-hidden rounded-2xl w-full h-auto"
                  src={slide.image}
                  width={600}
                  height={600}
                  alt={slide.title}
                />
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
