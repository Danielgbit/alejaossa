import { ProductProps } from "@/types/product";
import React from "react";
import Image from "next/image";

const ProductCard = ({ item }: { item: ProductProps }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col w-[250px] space-y-2 items-center shadow-lg justify-between bg-light-02 py-5 px-2 rounded-lg"
    >
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-4">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-purple-500/30 mix-blend-multiply"></div>
      </div>

      <span className="font-cormorant text-dark-03 text-xl text-center font-semibold mt-1 tracking-title">
        {item.title}
      </span>

      <p className="text-[12px] text-center font-normal font-lexend text-dark-01 tracking-sub">
        {item.description}
      </p>

      <a
        href={`https://api.whatsapp.com/send?phone=573014965788&text=✨Hola+Aleja,+quiero+más+información+sobre+${encodeURIComponent(
          item.title
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3"
      >
        <button className="px-2 text-xs font-lexend border border-purple-800 border-1 py-1 bg-purple-300 hover:bg-purple-200 cursor-pointer text-purple-800 tracking-[-0.8] rounded-full shadow-lg hover:bg-primary/90 transition-all">
          {item.buttonText}
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
