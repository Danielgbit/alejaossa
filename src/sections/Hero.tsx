"use client";

import Image from "next/image";
import React from "react";
import heroMainImage from "@/../public/images/hero/hero-main.png";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="my-20 md:my-35">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }} 
        className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 px-6 md:px-12"
      >
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="font-semibold text-dark-01 tracking-sub mb-4 uppercase font-lexend text-sm md:text-base">
            Terapeuta Holística
          </span>
          <h1 className="tracking-paragraph text-dark-03 font-cormorant font-normal text-lg md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            harum, tenetur dignissimos sunt hic optio, itaque alias rerum sapiente
            sequi.
          </h1>
          <span className="font-normal text-xs md:text-sm tracking-[1px] mb-6 font-cormorant mt-6">
            Volviendo al origen
          </span>
          <div className="mt-6 md:mt-10">
            <Button className="button-02" children="Agendar cita" />
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            className="w-full max-w-[90%] md:max-w-[80%] rounded-lg object-cover"
            src={heroMainImage}
            alt="Terapeuta holística trabajando"
            width={600}
            height={600}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
