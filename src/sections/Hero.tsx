import Image from "next/image";
import React from "react";
import heroMainImage from "@/../public/images/hero/hero-main.png";

const Hero = () => {
  return (
    <div className="flex">
      <div>
        <span className="font-semibold tracking-sub mb-6">Terapeuta Holistica</span>
        <h1 className="tracking-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          harum, tenetur dignissimos sunt hic optio, itaque alias rerum sapiente
          sequi consequatur eum dolor dolorem ea sit iste repellendus dicta
          eaque.
        </h1>
      </div>
      <Image
        className=""
        src={heroMainImage}
        alt="Descripción de la imagen"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Hero;
