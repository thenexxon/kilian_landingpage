import {
  BanknoteArrowUp,
  DoorOpen,
  ShieldCheck,
  Trophy,
  Zap,
} from "lucide-react";
import React from "react";
import Image from "next/image";

function BentoGrid() {
  const items: Array<{
    title: string;
    text: string;
    imageUrl?: string;
    icon?: React.ReactNode;
  }> = [
    {
      title: "Hohe Gewinnchancen",
      text: "Kryptowährungen bieten die Möglichkeit, in kurzer Zeit hohe Gewinne zu erzielen, da sich ihre Preise schnell ändern können.",
    },
    {
      title: "Schnelle Resultate",
      text: "Kryptowährungen sind nicht nur eine innovative Technologie, sondern auch eine sichere Anlageoption für die Zukunft, da sie das Potenzial haben, traditionelle Finanzsysteme zu revolutionieren.",
      icon: <Zap color="#1CC5FF" />,
    },
    {
      title: "Passives Einkommen von zu Hause aus",
      text: "Der Handel mit Kryptowährungen bietet die Möglichkeit, passives Einkommen zu generieren, ohne dass man physische Produkte verkaufen oder Dienstleistungen erbringen muss.",
      imageUrl: "/wallet.png",
      icon: <BanknoteArrowUp color="#1CC5FF" />,
    },
    {
      title: "Einfacher Einstieg",
      text: "Der Handeln mit Kryptowährungen erfordert nur einen Internetzugang und eine Handelsplattform.",
      icon: <DoorOpen color="#1CC5FF" />,
    },
    {
      title: "Sicherheit",
      text: "Die Blockchain-Technologie sorgt für transparente Transaktionen. Öffentliche Hauptbücher und kryptografische Sicherheit machen den Handel sicher und überprüfbar.",
      icon: <ShieldCheck color="#1CC5FF" />,
    },
  ];

  return (
    <section className="container m-auto p-4 pb-16">
      <h2 className="text-center text-2xl font-bold text-gradient-silver mt-6 md:mt-10 md:text-4xl max-w-[600px] block m-auto mb-6 leading-normal">
        Wieso Krypto Trading?
      </h2>

      <div className="grid gap-4 md:grid-cols-3 grid-rows-2 max-w-6xl m-auto">
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            {...item}
            className={
              index === 2 ? "md:col-start-3 md:row-start-1 md:row-span-2" : ""
            }
          />
        ))}
      </div>
    </section>
  );
}

function BentoGridItem({
  imageUrl,
  title,
  text,
  icon,
  className,
}: {
  imageUrl?: string;
  title: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-8 rounded-xl ${className || ""}`}
      style={{
        background: "rgba(27, 31, 55, 0.8)",
      }}
    >
      {icon ?? <Trophy color="#1CC5FF" />}
      <h3 className="pt-4 pb-2 leading-normal font-bold text-xl">{title}</h3>
      <p className="text-[#62698E]">{text}</p>

      {imageUrl && (
        <Image
          className="pt-4 m-auto"
          src={imageUrl}
          width={300}
          height={300}
          alt={title}
        />
      )}
    </div>
  );
}

export default BentoGrid;
