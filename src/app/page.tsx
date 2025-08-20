import Empathy from "@/sections/Empathy";
import Hero from "@/sections/Hero";
import Motivational from "@/components/Motivational";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Motivational
        className="text-xl"
        children="En la quietud de tu ser encuentras la sabiduría que siempre ha habitado en
      ti. Tu sanación es un viaje de regreso a casa, a tu esencia verdadera."
      />
      <Empathy />
      <Services/>
    </>
  );
}
