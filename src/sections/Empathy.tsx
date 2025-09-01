'use client'

import Image from "next/image";
import React from "react";
import imageUrl from "@/../public/images/IMG_20220725_190908_944 Alejandra ossa restrepo.jpg";
import Motivational from "@/components/Motivational";
import { motion } from "motion/react";


const Empathy = () => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col md:flex-row my-20 md:my-50">
      <div className="w-full md:w-[50%] flex justify-center md:justify-start relative mb-8 md:mb-0">
        <Image
          src={imageUrl}
          className="w-full rounded-xl object-cover max-w-[90%] relative"
          alt="Descripción de la imagen"
          width={500}
          height={300}
        />
        <Motivational
          className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2 md:bottom-[-20%] md:left-1/2 md:-translate-x-1/2 text-sm md:text-xl font-normal"
          children="Entendemos exactamente lo que estás viviendo, y no estás solo/a en este camino."
        />
      </div>

      <div className="w-full md:w-[50%] mt-15 max-w-4xl mx-auto text-center md:text-left px-4">
        <h2 className="font-cormorant text-dark-01 text-4xl md:pr-4 font-semibold text-primary mb-6">
          Ser padre o madre en la ciudad puede ser abrumador
        </h2>

        <p className="md:text-lg text-sm font-light italic text-dark-03 md:pr-4 font-normal tracking-brand mb-8">
          Es posible que estés sintiendo los desafíos que vienen con equilibrar
          tu familia, trabajo y vida personal.
        </p>

        <ul className="list-none md:list-disc text-dark-02 space-y-4 text-xs tracking-sub md:text-sm font-normal">
          <li>Sentirte agotado/a por tener que hacer varias cosas a la vez.</li>
          <li>Preocuparte por si estás haciendo lo suficiente por tu hijo/a.</li>
          <li>Sentirte aislado/a o desconectado/a en el ajetreo de la ciudad.</li>
          <li>Luchar por encontrar momentos de calma para ti mismo/a.</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Empathy;
