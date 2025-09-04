"use client";

import { ServiceCard } from "@/components/ServiceCard";
import services from "@/data/services";
import React from "react";
import { motion } from "motion/react";
import Button from "@/components/Button";

const Services = () => {
  const limitedServices = services.slice(0, 3);

  return (
    <section id="services" className="py-12 md:py-16 bg-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-dark-01 font-cormorant font-semibold tracking-title text-center text-primary mb-8 md:mb-12">
          Servicios
        </h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-20"
        >
          {limitedServices.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </motion.div>
        <a
          href="/services"
          className="w-full flex justify-center mt-10 md:mt-20"
        >
          <Button className="button-01">Ver más servicios</Button>
        </a>
      </div>
    </section>
  );
};

export default Services;
