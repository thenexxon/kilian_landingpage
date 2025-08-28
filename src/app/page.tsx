import AboutMe from "@/blocks/AboutMe";
import Articles from "@/blocks/Articles";
import BentoGrid from "@/blocks/BentoGrid";
import CallToAction from "@/blocks/CallToAction";
import Faq from "@/blocks/Faq";
import Hero from "@/blocks/Hero";
import Logo from "@/components/Logo";
import Testimonials from "@/blocks/Testimonials";
import TheApp from "@/blocks/TheApp";
import AnimatedPage from "@/components/AnimatedPage";

export default function Home() {
  return (
    <AnimatedPage>
      <Logo />
      <Hero />
      <Testimonials />
      <BentoGrid />
      <AboutMe />
      <Articles />
      <Faq />
      <CallToAction />
      <TheApp />
    </AnimatedPage>
  );
}
