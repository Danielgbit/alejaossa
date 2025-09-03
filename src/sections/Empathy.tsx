"use client";

import Image from "next/image";
import React from "react";
import imageUrl from "@/../public/images/circulo-mixto-03.jpg";
import Motivational from "@/components/Motivational";
import { motion } from "motion/react";

const Empathy = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col md:flex-row my-20 md:my-50"
    >
      <div className="w-full md:w-[50%] flex justify-center md:justify-start relative mb-8 md:mb-0">
        <div className="relative w-full max-w-[90%] rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            className="w-full h-full object-cover rounded-xl"
            alt="Alejandra Ossa acompañando procesos"
            width={500}
            height={300}
          />
          {/* Overlay púrpura */}
          <div className="absolute inset-0 bg-purple-500/30 mix-blend-multiply"></div>
        </div>
        <Motivational className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2 md:bottom-[-20%] md:left-1/2 md:-translate-x-1/2 text-sm md:text-xl font-normal">
          La sanación y la expansión ocurren cuando recordamos quiénes somos en
          esencia.
        </Motivational>
      </div>

      <div className="w-full md:w-[50%] max-w-4xl mx-auto text-center md:text-left px-4">
        <h2 className="font-cormorant text-dark-01 text-3xl mt-1 md:mt-30 md:text-4xl font-semibold text-primary mb-6">
          Acompañandote
        </h2>

        <p className="md:text-lg text-sm font-light italic text-dark-03 md:pr-4 font-normal tracking-brand mb-8">
          Terapeuta holística que acompaña procesos de transformación uniendo
          cuerpo, mente, alma y espíritu. Mi misión es crear un espacio seguro
          donde puedas reconocer tu dolor, liberarlo y abrir tus alas hacia tu
          bienestar.
        </p>

        <ul className="list-none md:list-disc text-dark-02 space-y-4 text-xs tracking-sub md:text-sm font-normal">
          <li>
            Acompañamiento integral desde la autenticidad y la experiencia
            vivida.
          </li>
          <li>
            Herramientas de coaching, PNL, constelaciones, biodescodificación y
            más.
          </li>
          <li>
            Un lugar seguro para abrazar tu vulnerabilidad y transformar tu
            historia.
          </li>
          <li>Un camino hacia la expansión y la reconexión con tu esencia.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Empathy;
