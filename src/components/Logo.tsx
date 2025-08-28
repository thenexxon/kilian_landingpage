"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Logo fades out when scrolling down more than 50px
      setIsVisible(scrollTop < 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        className,
        "fixed top-0 w-full p-6 text-center left-0 right-0 z-50 transition-opacity duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={"/logo.png"}
        width={300}
        height={100}
        className="w-[250px] inline"
        alt="Krypto Masterclass logo"
      />
    </div>
  );
}

export { Logo };
export default Logo;
