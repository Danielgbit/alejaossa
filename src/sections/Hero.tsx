import Image from "next/image";
import React from "react";
import heroMainImage from "@/../public/images/hero/hero-main.png";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:items-start my-20 md:my-35 gap-10">
      {/* Texto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6">
        <span className="font-semibold text-dark-01 tracking-sub mb-4 uppercase font-lexend text-sm md:text-base">
          Terapeuta Holistica
        </span>
        <h1 className="tracking-paragraph text-dark-03 font-cormorant font-normal text-lg md:text-2xl leading-relaxed text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          harum, tenetur dignissimos sunt hic optio, itaque alias rerum sapiente
          sequi consequatur eum dolor dolorem ea sit iste repellendus dicta
          eaque.
        </h1>
        <span className="font-normal text-xs md:text-sm tracking-[1px] mb-6 font-cormorant mt-6">
          Volviendo al origen
        </span>
        <div className="mt-6 md:mt-10">
          <Button className="button-02" children="Agendar cita" />
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          className="w-full max-w-[90%] md:max-w-[80%] rounded-lg object-cover"
          src={heroMainImage}
          alt="Terapeuta holística trabajando"
          width={600}
          height={600}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
