"use client";

import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import { motion } from "motion/react";
import React from "react";

const Products = () => {
  return (
    <section className="py-8 bg-light-02 rounded-4xl md:py-12 bg-light shadow-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-2xl lg:text-5xl text-dark-01 font-cormorant font-semibold tracking-title text-center text-primary mb-8 md:mb-12">
          {" "}
          Nuestros Productos
        </h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-10 md:gap-8 mt-10 md:mt-20 py-10"
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
