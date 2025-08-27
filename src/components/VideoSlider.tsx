import React from "react";
import Image from "next/image";

function VideoSlider() {
  return (
    <div className="container m-auto flex items-center justify-center gap-4 mt-16">
      <div className="blur-xs perspective-normal">
        <Image
          className="block overflow-hidden rounded-2xl rotate-y-12 scale-95"
          src={"/foobar.jpg"}
          width={600}
          height={600}
          alt="fopobar"
        />
      </div>
      <div className="perspective-normal">
        <Image
          className="block overflow-hidden rounded-2xl scale-105"
          src={"/foobar.jpg"}
          width={600}
          height={600}
          alt="fopobar"
        />
      </div>
      <div className="blur-xs perspective-normal">
        <Image
          className="block overflow-hidden rounded-2xl -rotate-y-12 scale-95"
          src={"/foobar.jpg"}
          width={600}
          height={600}
          alt="fopobar"
        />
      </div>
    </div>
  );
}

export default VideoSlider;
