"use client";

import Button from "./Button";
import { motion } from "motion/react";

const Reflection = ({ children = "", textButton = "" }) => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="my-20 md:my-40 lg:my-60 flex flex-col items-center justify-center 
                py-10 md:py-16 lg:py-20 px-4 rounded-lg shadow-lg bg-reflection-01"
    >
      {/* Texto principal */}
      <p
        className="text-lg md:text-2xl lg:text-4xl text-center tracking-paragraph 
                 text-dark-03 max-w-2xl mx-auto font-cormorant"
      >
        {children}
      </p>

      {/* Autor */}
      <span className="my-6 md:my-8 lg:my-10 font-lexend uppercase tracking-sub text-dark-04">
        -Albert
      </span>

      {/* Botón */}
      <Button className="button-01" children={textButton} />
    </motion.section>
  );
};

export default Reflection;
