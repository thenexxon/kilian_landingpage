import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { getContentByComponent } from "@/lib/markdown";
import { ContentRenderer } from "@/components/ContentRenderer";

interface HeroWithContentProps {
  className?: string;
}

export default async function HeroWithContent({ className }: HeroWithContentProps) {
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
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={"/hero-bg.svg"}
        width={700}
        height={700}
        alt="hero background"
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
        <Image
          src={"/bottom-grid-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[600px]"
        />
      </div>
      
      {/* Content from markdown */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          {heroContent && (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {heroContent.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {heroContent.subtitle}
              </p>
              <ContentRenderer 
                content={heroContent.content} 
                className="text-gray-200 mb-8"
              />
              {heroContent.ctaText && (
                <a 
                  href={heroContent.ctaLink || "#"}
                  className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  {heroContent.ctaText}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}