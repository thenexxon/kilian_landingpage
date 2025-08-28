import AboutMe from "@/blocks/AboutMe";
import Articles from "@/blocks/Articles";
import BentoGrid from "@/blocks/BentoGrid";
import CallToAction from "@/blocks/CallToAction";
import Faq from "@/blocks/Faq";
import Hero from "@/blocks/Hero";
import Logo from "@/components/Logo";
import Testimonials from "@/blocks/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Logo />
      <Hero />
      <Testimonials />
      <BentoGrid />
      <AboutMe />
      <Articles />
      <Faq />
      <CallToAction />
    </main>
  );
}
