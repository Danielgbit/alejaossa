"use client";

import faqs from "@/data/faqs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-30 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-6 relative bg-light-02 p-6 md:p-10 rounded-lg shadow-lg">
          {/* Título FAQ */}
          <h2 className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl lg:text-6xl font-cormorant font-light text-primary tracking-title">
            FAQ
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl lg:text-2xl text-dark-01 font-cormorant">
                  {faq.question}
                </h3>
                <span className="text-primary font-light text-2xl md:text-3xl lg:text-4xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Animación */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-4 text-sm md:text-base text-dark-02 tracking-paragraph font-light leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
