import Image from "next/image";
import React from "react";
import heroMainImage from "@/../public/images/hero/hero-main.png";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="flex my-20">
      <div className="w-[50%] flex flex-col justify-center items-center p-6 ">
        <span className="font-semibold tracking-sub mb-6 uppercase font-lexend">
          Terapeuta Holistica
        </span>
        <h1 className="tracking-paragraph font-cormorant font-normal text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          harum, tenetur dignissimos sunt hic optio, itaque alias rerum sapiente
          sequi consequatur eum dolor dolorem ea sit iste repellendus dicta
          eaque.
        </h1>
        <span className="font-normal tracking-sub mb-6 font-lexend mt-5">
          Volviendo al origen
        </span>
        <div className="mt-10">
          <Button className="bg-button-01 shadow-lg" children="Agendar cita" />
        </div>
      </div>
      <div className="w-[50%] flex justify-end">
        <Image
          className="w-full max-w-[80%] rounded-lg object-cover"
          src={heroMainImage}
          alt="Terapeuta holística trabajando"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
