import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";

function TheApp() {
  return (
    <section className="container m-auto px-4 relative md:mb-24">
      <div
        className="absolute top-0 left-1/2 rounded-full z-0 blur-[400px] w-full max-w-7xl bottom-0 -translate-x-1/2"
        style={{ background: "rgba(42, 65, 184, 0.4)" }}
      />
      <div className="text-center">
        <Image
          className="inline-block"
          src="/the-app/app-icon.png"
          width={200}
          height={200}
          alt="app icon"
        />
        <h2 className="leading-normal text-center text-2xl font-bold text-gradient-silver  md:text-4xl max-w-[800px] block m-auto relative mb-4">
          Trading Mobile App
        </h2>
        <p className="max-w-[400px] m-auto font-bold text-[#C4CAE8]">
          Sichere dir jetzt die Krypto-Masterclass und erfahre alles was du
          wissen musst,um mit Krypto Trading erfolgreich zu werden.
        </p>
        {/* TODO: Apple link and androind app link */}
        <div className="relative z-10 flex gap-4 justify-center mt-6">
          <a
            href="https://google.com"
            className="inline-block hover:scale-105 transition-all"
          >
            <Image
              src={"/the-app/google-btn.png"}
              width={200}
              height={50}
              alt="play store donwload app button"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/krypto-masterclass-by-kilian/id6504626925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-all"
          >
            <Image
              src={"/the-app/apple-btn.png"}
              width={200}
              height={50}
              alt="apple store donwload app button"
            />
          </a>
        </div>
        <div className="mt-8">
          <CTAButton text="Kostenlosen Videokurs sichern" href="/" />
        </div>
      </div>
      <div className=" w-full hidden md:flex md:absolute top-0 pointer-events-none">
        <Image
          src={"/the-app/left-side-app.png"}
          width={700}
          height={700}
          alt="play store donwload app button"
          className="w-1/2 -translate-x-20"
        />
        <Image
          src={"/the-app/right-side-app.png"}
          width={700}
          height={700}
          alt="play store donwload app button"
          className="w-1/2 translate-x-12"
        />
      </div>
    </section>
  );
}

export default TheApp;
