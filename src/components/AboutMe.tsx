import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <section className="relative py-8 px-4 w-full md:py-24 container m-auto">
      <div className="relative">
        <div className="flex justify-center w-full items-center z-10 relative">
          <Image
            src={"/about-me-art.png"}
            width={270}
            height={260}
            alt="abstruct shape"
            className="w-[230px] block"
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gradient-silver mt-6 md:mt-10 md:text-4xl max-w-[400px] block m-auto">
          Über meine Person und Erfahrungen
        </h2>

        <div className="my-4 relative max-w-5xl m-auto">
          <Image
            className="absolute object-fit inset-0 w-full z-0 opacity-70"
            src={"/aboutme-bg.png"}
            width={900}
            height={600}
            alt="art effect"
          />
          <div className="grid gap-2 md:grid-cols-2 relative items-center">
            <div className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:bg-gradient-to-t after:from-black after:to-transparent flex items-center justify-center">
              <Image
                src={"/kilian.png"}
                width={500}
                height={500}
                alt="kilina"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gradient-silver mb-2 md:mb-6">
                Ich bin Kilian,
              </h3>
              <p className="text-[#C4CAE8]">
                ein professioneller Trader, welcher sich durch seine Arbeit im
                Krypto-Markt hocharbeiten konnte. Ich bin spezialisiert auf
                Kryptowährungen und ist bekannt für meine erfolgreiche, aber
                risikoarme Trading-Strategie. Dazu gebe ich Trading-Seminare und
                Coachings und zähle zu den führenden Experten in der
                Krypto-Community.
              </p>
              <Image
                className="my-4 md:my-6"
                src={"/signature.svg"}
                width={300}
                height={300}
                alt="Kilian"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
