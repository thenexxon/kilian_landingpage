"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Article {
  id?: number;
  url: string;
  title: string;
  imagePath: string;
  description?: string;
}

function Articles() {
  const [activeTab, setActiveTab] = useState(0);

  // Press articles data
  const articles: Article[] = [
    {
      id: 1,
      title: "Unternehmer Journal",
      url: "https://www.unternehmerjournal.de/kilian-kropiunik-finanzielle-freiheit-durch-trading/",
      imagePath: "/articles/UnternehmerJournal.webp",
      description: "Finanzielle Freiheit durch Trading",
    },
    {
      id: 2,
      title: "Forbes",
      url: "https://www.forbes.at/artikel/kilian-kropiunik-alles-nur-fassade",
      imagePath: "/articles/Forbes.webp",
      description: "Alles nur Fassade?",
    },
    {
      id: 3,
      title: "Gewinner Magazin",
      url: "https://gewinnermagazin.de/kilian-kropiunik-warum-viele-menschen-beim-trading-scheitern/",
      imagePath: "/articles/GewinnerMagazin.webp",
      description: "Warum viele Menschen beim Trading scheitern",
    },
    {
      id: 4,
      title: "Consulting Magazin",
      url: "https://consultingmagazin.de/kilian-kropiunik-wie-man-sich-sein-einkommen-durch-trading-erklickt",
      imagePath: "/articles/ConsultingMagazin.webp",
      description: "Wie man sich sein Einkommen durch Trading erklickt",
    },
    {
      id: 5,
      title: "Berliner Nachrichten",
      url: "https://www.berliner-nachrichten.de/krypto-masterclass-empfehlenswert-oder-mehr-schein-als-sein/",
      imagePath: "/articles/BerlinerNachrichten.webp",
      description:
        "Krypto Masterclass - Empfehlenswert oder mehr Schein als Sein?",
    },
    {
      id: 6,
      title: "Experten Testen",
      url: "https://www.expertentesten.de/news/krypto-masterclass-von-kilian-kropiunik-im-test-echte-erfahrungen/",
      imagePath: "/articles/ExpertenTesten.webp",
      description: "Krypto Masterclass im Test - Echte Erfahrungen",
    },
    {
      id: 7,
      title: "DFZ",
      url: "https://www.dfz21.at/dfz/erfahrungsbericht-kilian-kropiunik/",
      imagePath: "/articles/DFZ.webp",
      description: "Erfahrungsbericht Kilian Kropiunik",
    },
    {
      id: 8,
      title: "Münchner Allgemeine",
      url: "https://www.muenchner-allgemeine.de/kilian-kropiunik-im-faktencheck-was-taugt-seine-krypto-masterclass-wirklich/",
      imagePath: "/articles/MuenchnerAllgemeine.webp",
      description:
        "Im Faktencheck - Was taugt seine Krypto Masterclass wirklich?",
    },
  ];
  return (
    <section className="relative py-8 px-4 w-full md:py-24 container m-auto">
      <div className="flex justify-center w-full items-center z-10 relative">
        <Image
          src={"/articles-art.png"}
          width={270}
          height={260}
          alt="abstruct shape"
          className="w-[230px] block"
        />
      </div>
      <div
        className="hidden md:block absolute top-0 left-1/2 rounded-full z-0 blur-[150px] w-full max-w-7xl bottom-0 -translate-x-1/2 z-0"
        style={{ background: "rgba(42, 65, 184, 0.4)" }}
      />

      <h2 className="leading-normal text-center text-2xl font-bold text-gradient-silver mt-8 md:mt-10 md:text-4xl max-w-[800px] block m-auto relative">
        Unsere Unternehmensdarstellung
      </h2>
      <p className="text-center text-lg max-w-[400px] m-auto mt-6 relative">
        Wer im Trading konstant Gewinne erzielen möchte, benötigt professionelle
        Unterstützung. Es ist ratsam, sich einen Coach zu suchen. Am Besten den
        Kilian.
      </p>

      <div className="max-w-6xl m-auto relative">
        {/* Tab Navigation - Scrollable on mobile */}
        <div className="mt-8">
          <div
            className="overflow-x-auto scrollbar-hide relative"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
            }}
          >
            <div className="flex gap-4 min-w-max md:justify-center">
              {articles.map((article, index) => (
                <Tab
                  key={article.id}
                  text={article.title}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content with Animation */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {articles[activeTab] && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <TabContainer
                  url={articles[activeTab].url}
                  imagePath={articles[activeTab].imagePath}
                  title={articles[activeTab].title}
                  description={articles[activeTab].description}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1/3 w-full z-0">
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

function Tab({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 cursor-pointer transition-all duration-300 border-2 border-[#CFDCEF33] rounded-full",
        isActive && "bg-dark border-[#1CC5FF]",
      )}
    >
      {text}
    </button>
  );
}

function TabContainer({ url, imagePath, title }: Article) {
  return (
    <div className="relative z-10">
      <div className="relative aspect-3/2 rounded-2xl overflow-hidden">
        <Image
          src={imagePath}
          width={900}
          height={600}
          className="w-full h-full object-cover object-top"
          alt={title}
        />
      </div>
      <div className="p-6 text-center">
        <div className={cn("relative inline-flex")}>
          {/* Gradient border using pseudo-element */}
          <div
            className="absolute inset-0 rounded-full p-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, #2E4CEB 70%, #86FFFF 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
          {/* Content */}
          <div className="relative flex items-center py-4 px-8">
            <a
              href={url}
              className="flex items-center gap-2 font-bold"
              target="_blank"
            >
              <span className={cn("text-white")}>Artikel lesen</span>
              <ExternalLink color="#1CC5FF" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
