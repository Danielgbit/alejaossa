"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotivationalProps {
  children: string;
  className?: string;
}

const Motivational = ({ children, className }: MotivationalProps) => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className={`md:py-6 py-2 px-4 md:px-8 text-center font-cormorant text-dark-01 bg-light-02 rounded-xl shadow-md ${
        className || ""
      }`}
    >
      {children}
    </motion.section>
  );
};

export default Motivational;
