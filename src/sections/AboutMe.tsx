import Image from "next/image";
import React from "react";
import avatar from "@/../public/images/hero/hero-main.png";
import Motivational from "@/components/Motivational";

const AboutMe = () => {
  return (
    <section className="flex my-60 px-5">
      <div className="flex flex-col relative">
        <span className="text-right font-ballet text-dark-03 text-7xl tracking-title absolute right-[-15%] top-[-20%]">Bienvenido</span>
        <Image
          src={avatar}
          width={500}
          height={500}
          alt="avatar"
          className="rounded-t-[50%]"
        />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center pl-20">
        <h2 className="text-4xl text-dark-01 font-cormorant font-light mb-6">Sobre mí</h2>
        <Motivational children="Encontrando la esencia" className="text-xl rounded-xl mt-5 mb-10"/>
        <p className="text-lg leading-relaxed text-dark-02 font-semilight">
          ¡Hola! Soy <span className="font-semibold font-lexend tracking-paragraph">Alejandra Ossa</span>, un
          apasionado por la tecnología, el diseño web y la creación de
          experiencias digitales que conectan con las personas. Me gusta
          transformar ideas en proyectos funcionales y atractivos, siempre
          cuidando los detalles y la calidad.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
