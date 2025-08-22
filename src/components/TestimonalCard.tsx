import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import React from "react";

const TestimonalCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="rounded-full object-cover w-[200px] h-[200px] mb-5"
        src={item.imageUrl}
        alt={item.name}
        width={100}
        height={100}
      />
      <cite className="font-cormorant text-xl mt-6">- {item.text}</cite>
      <p className="mt-2 font-lexend uppercase tracking-title">"{item.name}"</p>
    </div>
  );
};

export default TestimonalCard;
