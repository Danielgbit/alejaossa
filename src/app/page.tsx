import Empathy from "@/sections/Empathy";
import Hero from "@/sections/Hero";
import Motivational from "@/components/Motivational";
import Services from "@/sections/Services";
import AboutMe from "@/sections/AboutMe";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";
import Reflection from "@/components/Reflection";

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
      <Reflection textButton="Consultar agenda" children="La reflexión es un proceso esencial en el camino hacia la sanación. Nos
        permite mirar hacia adentro."/>
      <AboutMe/>
      <FAQ/>
      <Testimonials/>
      <Reflection textButton="Contactame" children='La reflexión es un proceso esencial en el camino hacia la sanación. Nos
        permite mirar hacia adentro.'/>
    </>
  )
}
