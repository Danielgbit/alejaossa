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
      className="my-20 md:my-10 lg:my-60 flex flex-col items-center justify-center 
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
        -Aleja de la Ossa
      </span>

      {/* Botón */}
      <a href="https://api.whatsapp.com/send?phone=573014965788&text=%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8FHola+Aleja%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre...%E2%98%98%EF%B8%8F&fbclid=PAAaZ5NGAuzGkBSWB4IH3znjFbmn49elvRgjdwRm3rSDHY0RRFX_wpovVvfrw">
        <Button className="button-01">{textButton}</Button>
      </a>
    </motion.section>
  );
};

export default Reflection;
