import React from "react";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="container m-auto py-8 px-4 md:py-16 md:pb-24 relative">
      <div
        className="max-w-4xl m-auto rounded-lg md:rounded-xl p-6 md:p-16 shadow-[0px_0px_70px_0px_#1CC5FF66] relative z-10"
        style={{
          background: `
    radial-gradient(19.82% 62.93% at 9.18% 103.29%, #D5EFFF 0%, rgba(137, 210, 255, 0) 100%),
    radial-gradient(25.61% 81.29% at 95.04% 5.22%, #89D2FF 0%, rgba(137, 210, 255, 0) 100%),
    linear-gradient(85.18deg, #1CC5FF -14.23%, #007CA7 49.67%, #1CC5FF 113.56%)
  `,
        }}
      >
        <div className="max-w-[500px] text-center m-auto">
          <h2 className="text-center text-2xl font-bold text-gradient-silver md:text-4xl max-w-[800px] block m-auto relative mb-4 leading-normal">
            Häufige Fragen
          </h2>
          <p className="text-[#AFEBFF]">
            Wer im Trading konstant Gewinne erzielen möchte, benötigt
            professionelle Unterstützung. Es ist ratsam, sich einen Coach zu
            suchen. Am Besten den Kilian.
          </p>
        </div>
        <div className="mt-12 text-center">
          <a
            className="py-4 px-6 rounded-full text-black font-bold hover:scale-105 inline-block transition-all"
            href=""
            style={{
              background:
                "linear-gradient(267.16deg, #FFFFFF 12.32%, #FFFFFF 109.38%)",
              boxShadow:
                "5px 10px 15px 0.45px #1CC5FF66 inset, 0px 0px 26px 0px #FFFFFFA8",
            }}
          >
            Kostenlosen Videokurs sichern
          </a>
        </div>
      </div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 translate-y-1/3 w-full">
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

export default CallToAction;
