import Empathy from "@/sections/Empathy";
import Hero from "@/sections/Hero";
import Motivational from "@/components/Motivational";
import Services from "@/sections/Services";
import AboutMe from "@/sections/AboutMe";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Motivational
        className="text-xl wave"
        children="En la quietud de tu ser encuentras la sabiduría que siempre ha habitado en
      ti. Tu sanación es un viaje de regreso a casa, a tu esencia verdadera."
      />
      <Empathy />
      <Services/>
      <AboutMe/>
      <FAQ/>
      <Testimonials/>
    </>
  );
}
