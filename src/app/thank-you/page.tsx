import { CTAButton } from "@/components/CTAButton";
import React from "react";

function ThankYou() {
  return (
    <main className="flex  justify-center items-center m-auto container px-2">
      <div className="text-center max-w-[500px]">
        <h1 className="text-gradient-silver text-4xl font-bold md:text-6xl">
          Letzter Schritt:
        </h1>
        <p className="my-8">
          Trage dich jetzt direkt für ein kostenloses Beratungsgespräch ein und
          lasse dir direkt alle Fragen beantworten, um Trader zu werden.
        </p>
        <CTAButton
          href="https://calendly.com/d/5b6-4kh-k5h/krypto-potentialanalyse-mit-experten"
          text={"Jetzt kostenlosen Termin vereinbaren"}
        />
      </div>
    </main>
  );
}

export default ThankYou;
