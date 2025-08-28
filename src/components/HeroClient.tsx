"use client";

import React from "react";
import LightRays from "./LightRays";
import { AnimatedPills } from "./AnimatedPills";
import { CTAButton } from "./CTAButton";

interface GridItem {
  title: string;
}

interface HeroClientProps {
  title: string;
  gridItems?: GridItem[];
}

export function HeroClient({ title, gridItems }: HeroClientProps) {
  return (
    <>
      <LightRays
        raysOrigin="top-center"
        raysColor="#3D55CD"
        raysSpeed={1}
        lightSpread={0.9}
        rayLength={1}
        followMouse={true}
        mouseInfluence={0.4}
        noiseAmount={0.1}
        distortion={0.01}
        className="absolute top-0 z-10"
      />

      {/* Display the title from markdown */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient-silver text-center max-w-[600px] md:leading-tight mb-16">
          {title || "No title is givin"}
        </h1>

        {/* CTA Button */}
        <div className="text-center lg:w-[1200px]">
          <div className="z-10 relative">
            <CTAButton text="Kostenlosen Videokurs sichern" href="/" />
          </div>
          {gridItems && <AnimatedPills items={gridItems} />}
        </div>
      </div>
    </>
  );
}
