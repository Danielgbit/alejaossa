import Image from "next/image";
import React from "react";
import avatar from "@/../public/images/aleja-03.jpg";
import Motivational from "@/components/Motivational";

const AboutMe = () => {
  return (
    <section id='about' className="flex flex-col rounded-4xl shadow-xl mx-1 md:flex-row items-center my-20 md:my-40 lg:my-60 px-5 bg-dark-04 pt-10 md:pt-20 lg:pt-50 pb-10 md:pb-20">
      <div className="flex flex-col relative mb-10 md:mb-0 md:w-1/2 flex-shrink-0 items-center">
        <Image
          src={avatar}
          width={500}
          height={500}
          alt="avatar"
          className="rounded-t-[50%] w-60 h-55 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 max-w-3xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-6xl tracking-title text-light-02 font-cormorant font-light mb-6">
          Sobre mí
        </h2>

        <Motivational className="text-base md:text-lg lg:text-xl rounded-xl mt-5 mb-10">
          Encontrando la esencia
        </Motivational>

        <p className="text-base tracking-paragraph md:text-lg italic leading-relaxed text-light-02 font-semilight">
          ¡Hola! Soy{" "}
          <span className="font-semibold font-lexend tracking-paragraph">
            Alejandra Ossa Restrepo{" "}
          </span>
          terapeuta holística que eligió caminar con un propósito: recordar
          quién soy para acompañar a otros en su proceso de sanación y
          expansión. Mi experiencia no solo proviene de formaciones en coaching,
          PNL, constelaciones familiares, biodescodificación y otras terapias,
          sino también de mi propio recorrido vital, mis heridas y
          transformaciones.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
