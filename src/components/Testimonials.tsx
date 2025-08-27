import React from "react";
import Image from "next/image";
import VideoSlider from "./VideoSlider";

function Testimonials() {
  return (
    <section className="relative py-8 px-4 w-full md:py-24">
      <div
        className="absolute top-0 left-1/2 rounded-full z-0 blur-[400px] w-7xl bottom-0 -translate-x-1/2"
        style={{ background: "rgba(42, 65, 184, 0.4)" }}
      />
      <div className="relative">
        <div className="flex justify-center w-full items-center z-10 relative">
          <Image
            src={"/testimonials-art.png"}
            width={270}
            height={260}
            alt="abstruct shape"
            className="w-[230px] block"
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gradient-silver mt-6 md:mt-10 md:text-4xl max-w-[400px] block m-auto">
          Was bisherige Teilnehmer berichten
        </h2>
        <VideoSlider />
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1/3 w-full">
        <Image
          src={"/bottom-grid-hero.png"}
          width={500}
          height={100}
          alt="hero grid effect"
          className="w-full h-[500px]"
        />
      </div>
    </section>
  );
}

export default Testimonials;
