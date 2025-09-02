"use client";

import React, { useState } from "react";
import services from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "motion/react";
import CategoryButtons from "@/components/CategoryButtons";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-12 my-20 md:py-16 bg-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-dark-01 font-cormorant font-semibold tracking-title text-center text-primary mb-8 md:mb-12">
          Servicios
        </h2>

        {/* Botones de categorías */}
        <CategoryButtons
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid de servicios */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10"
        >
          {filteredServices.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
