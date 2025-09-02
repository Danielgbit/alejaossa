import { Testimonial } from "@/types/testimonial";
import { User } from "lucide-react";
import React from "react";

const TestimonalCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="flex flex-col justify-between h-[250px] items-center text-center px-4">
      <User size={50} className="mb-4 text-dark-03" />

      {/* Texto del testimonio */}
      <blockquote className="font-cormorant tracking-paragraph text-dark-01 text-lg md:text-xl leading-relaxed">
        “{item.text}”
      </blockquote>

      {/* Nombre del cliente */}
      <cite className="mt-3 font-lexend uppercase tracking-wide text-dark-04 text-sm md:text-base not-italic">
        {item.name}
      </cite>
    </div>
  );
};

export default TestimonalCard;
