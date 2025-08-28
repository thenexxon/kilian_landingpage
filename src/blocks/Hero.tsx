import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { getContentByComponent } from "@/lib/markdown";
import { HeroClient } from "../components/HeroClient";
import Counter from "../components/Counter";

interface GridItem {
  title: string;
}

interface HeroProps {
  className?: string;
}

async function Hero({ className }: HeroProps) {
  // Fetch the content from markdown
  const heroContent = await getContentByComponent("hero");
  const gridContent = await getContentByComponent("hero", "grid.md");

  return (
    <section
      className={cn(
        "relative w-full pt-28 pb-8 flex flex-col items-center justify-center md:pt-[20vh]",
        className,
      )}
    >
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full">
        <Image
          src={"/top-gird-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[600px]"
          priority
        />
      </div>
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src={"/line.svg"}
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
      <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1/3 w-full">
        <Image
          src={"/bottom-grid-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[500px]"
        />
      </div>

      {/* Client components */}
      <HeroClient
        title={(heroContent?.title as string) || "No title is givin"}
        gridItems={gridContent?.gridItems as GridItem[] | undefined}
      />

      <div className="relative my-8 hidden md:block">
        <div className="hidden md:block absolute inset-0 bg-[#3D55CD] rounded-full z-0 blur-[100px]"></div>
        <Image
          src={"/hero-art.png"}
          width={270}
          height={260}
          alt="abstruct shape"
          className="w-[270px] relative"
        />
      </div>

      <Counter targetDate="2025-08-28T23:59:59" />
    </section>
  );
}

export default Hero;
