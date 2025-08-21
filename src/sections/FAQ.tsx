"use client";

import faqs from "@/data/faqs";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6 relative bg-dark-01 p-10 rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-dark-01 font-cormorant">
                  {faq.question}
                </h3>
                <span className="text-primary font-light text-4xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-4 text-sm text-dark-02 font-light">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <h2 className="absolute top-[-40px] left-88 text-6xl font-cormorant font-light text-center text-primary tracking-title mb-12">
            FAQ
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
