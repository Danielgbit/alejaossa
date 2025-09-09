import Empathy from "@/sections/Empathy";
import Hero from "@/sections/Hero";
import Motivational from "@/components/Motivational";
import Services from "@/sections/Services";
import AboutMe from "@/sections/AboutMe";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";
import Reflection from "@/components/Reflection";
import Products from "@/sections/Products";
import Podcast from "@/sections/Podcast";
import Whatsapp from "@/sections/Whatsapp";
import Gallery from "@/sections/Gallery";
import SocialMedia from "@/sections/SocialMedia";

export default function Home() {
  return (
    <>
      {/* 1. Héroe principal con CTA */}
      <Hero />

      {/* 2. Mensaje motivacional (branding + conexión emocional) */}
      <Motivational className="text-xl wave">
        En la quietud de tu ser encuentras la sabiduría que siempre ha habitado
        en ti. Tu sanación es un viaje de regreso a casa, a tu esencia
        verdadera.
      </Motivational>

      {/* 3. Empathy (dolores/problemas de la audiencia) */}
      <Empathy />

      {/* 4. Services (qué ofreces → solución a esos problemas) */}
      <Services />

      {/* 5. Reflection CTA (agendar / reservar) */}
      <Reflection textButton="Consultar agenda">
        A veces el mayor acto de valentía es detenernos y escucharnos a nosotros
        mismos.
      </Reflection>

      {/* 6. AboutMe (autoridad + confianza personal) */}
      <AboutMe />

      {/* 7. Gallery (prueba visual → estilo de vida, eventos, retiros) */}
      <Gallery />

      {/* 8. Testimonials (prueba social → confianza) */}
      <Testimonials />

      {/* 9. Products (monetización directa) */}
      <Products />

      {/* 10. FAQ (SEO + objeciones resueltas) */}
      <FAQ />

      {/* 11. Podcast (contenido evergreen / SEO de marca personal) */}
      <Podcast />

      {/* 12. SocialMedia (comunidad → mantener contacto) */}
      <SocialMedia />

      {/* 13. Whatsapp (CTA directo → cierre de conversión) */}
      <Whatsapp />

      {/* 14. Reflection final (último empujón CTA) */}
      <Reflection textButton="Contáctame">
        Cada paso hacia adentro es un paso hacia tu libertad.
      </Reflection>
    </>
  );
}
