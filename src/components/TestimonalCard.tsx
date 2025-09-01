import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import React from "react";

const TestimonalCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      {/* Imagen redonda */}
      <Image
        className="rounded-full object-cover mb-5"
        src={item.imageUrl}
        alt={item.name}
        width={200}
        height={200}
        priority
      />

      {/* Texto del testimonio */}
      <blockquote className="font-cormorant text-dark-01 text-lg md:text-xl leading-relaxed">
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
