"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

interface FaqItem {
  question: string;
  answer: string;
}

function Faq() {
  const faqItems: FaqItem[] = [
    {
      question: "Kommen irgendwelche versteckten Kosten auf mich zu?",
      answer:
        "Nein - Der Kurs ist 100% kostenlos! Alles, was du tun musst, ist dich jetzt anmelden! Du musst also jetzt nichts bezahlen und auch nicht in beispielsweise 4 Wochen oder in 4 Jahren.",
    },
    {
      question:
        "Welche Erfahrungen hat Kilian gemacht, um sein Wissen weiterzugeben?",
      answer:
        'Er ist seit sechs Jahren Krypto-Investor und -Trader und hat in dieser Zeit vielen Menschen durch Kryptowährungen zur finanziellen Freiheit verholfen. Zusammen mit zwei Geschäftspartnern leitet er die Wiener Vermögensberatung "Coinzultance" und arbeitet dort als "Chief Market Analyst".',
    },
    {
      question: "Wieso muss ich meine Handynummer angeben?",
      answer:
        "Wir benötigen deine Handynummer, um dir einen Zugang zur Krypto - Masterclass zur Verfügung zu stellen.",
    },
    {
      question:
        "Ist es möglich, auch bei sinkenden Kursen am Kryptomarkt Geld zu verdienen?",
      answer:
        "Auf dem Kryptomarkt kann man immer Geld verdienen, unabhängig davon ob die Kurse steigen oder fallen.",
    },
  ];

  return (
    <section className="container m-auto py-8 px-4 md:py-16">
      <h2 className="leading-normal text-center text-2xl font-bold text-gradient-silver mt-8 md:mt-10 md:text-4xl max-w-[800px] block m-auto relative mb-12">
        Häufige Fragen
      </h2>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base px-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
