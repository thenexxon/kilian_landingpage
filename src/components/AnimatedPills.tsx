"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GradientPill } from "./GradientPill";
import Magnet from "./Magnet";

interface GridItem {
  title: string;
}

interface AnimatedPillsProps {
  items: GridItem[];
}

export function AnimatedPills({ items }: AnimatedPillsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-shuffle on mobile
  useEffect(() => {
    if (!isMobile || !items.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [isMobile, items.length]);

  // Desktop: show all pills
  if (!isMobile) {
    return (
      <div className="grid grid-cols-3 grid-rows-2 gap-6 lg:w-full justify-center lg:-my-12 pointer-events-none">
        {items.map((item, index) => {
          let gridClass = "";
          if (index === 0) gridClass = "col-start-1 row-start-1";
          if (index === 1)
            gridClass = "col-start-1 row-start-2 translate-x-1/5";
          if (index === 2) gridClass = "col-start-3 row-start-1";
          if (index === 3)
            gridClass = "col-start-3 row-start-2 -translate-x-1/5";

          return (
            <Magnet
              key={index}
              padding={50}
              disabled={false}
              magnetStrength={30}
              className={gridClass}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientPill
                  text={item.title}
                  icon="/folder.svg"
                  iconAlt={`${item.title} icon`}
                />
              </motion.div>
            </Magnet>
          );
        })}
      </div>
    );
  }

  // Mobile: animated shuffle
  return (
    <div className="relative h-16 w-full max-w-sm mx-auto my-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <GradientPill
            text={items[currentIndex].title}
            icon="/folder.svg"
            iconAlt={`${items[currentIndex].title} icon`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
