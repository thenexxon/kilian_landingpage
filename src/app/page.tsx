import AboutMe from "@/components/AboutMe";
import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Logo />
      <Hero />
      <Testimonials />
      <BentoGrid />
      <AboutMe />
    </main>
  );
}
