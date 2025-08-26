import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { getContentByComponent } from "@/lib/markdown";

interface HeroProps {
  className?: string;
}

async function Hero({ className }: HeroProps) {
  // Fetch the content from markdown
  const heroContent = await getContentByComponent("hero");

  return (
    <section className={cn("relative w-full h-dvh overflow-hidden", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full">
        <Image
          src={"/top-gird-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[600px]"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src={"/Line.svg"}
            width={700}
            height={700}
            className="w-full h-full absolute blur-xs"
            alt="trading line"
          />
        </div>
        <Image
          src={"/hero-bg.svg"}
          width={700}
          height={700}
          className="w-full h-full absolute top-0 left-0 "
          alt="trading line shadow"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
        <Image
          src={"/bottom-grid-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[600px]"
        />
      </div>

      {/* Display the title from markdown */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient text-center px-4 max-w-[600px] text-balance md:leading-snug">
          {heroContent?.title || "No title is givin"}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
