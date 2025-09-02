import Empathy from "@/sections/Empathy";
import Hero from "@/sections/Hero";
import Motivational from "@/components/Motivational";
import Services from "@/sections/Services";
import AboutMe from "@/sections/AboutMe";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";
import Reflection from "@/components/Reflection";
import Products from "@/sections/Products";

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
      <Services />
      <Reflection
        textButton="Consultar agenda"
        children="A veces el mayor acto de valentía es detenernos y escucharnos a nosotros mismos."
      />
      <AboutMe />
      <FAQ />
      <Products/>
      <Testimonials />
      <Reflection
        textButton="Contactame"
        children="Cada paso hacia adentro es un paso hacia tu libertad."
      />
    </>
  );
}
