import Image from "next/image";
import React from "react";
import imageUrl from "@/../public/images/IMG_20220725_190908_944 Alejandra ossa restrepo.jpg";
import Motivational from "@/components/Motivational";

const Empathy = () => {
  return (
    <section className="flex my-50">
      <div className="w-[50%] flex justify-start relative">
        <Image
          src={imageUrl}
          className="w-full rounded-xl object-cover max-w-[90%] relative"
          alt="Descripción de la imagen"
          width={500}
          height={300}
        />
          <Motivational 
            className="rounded-xl text-2xl absolute bottom-[-35%] font-normal left-20 right-10"
            children="Entendemos exactamente lo que estás viviendo, y no estás solo/a en este camino."
          />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h2 className="font-cormorant text-dark-01 text-4xl pr-4 font-semibold text-left text-primary mb-6">
          Ser padre o madre en la ciudad puede ser abrumador
        </h2>

        {/* Subtítulo empático */}
        <p className="text-lg text-left text-dark-03 pr-4 font-normal tracking-brand mb-8">
          Es posible que estés sintiendo los desafíos que vienen con equilibrar
          tu familia, trabajo y vida personal.
        </p>

        {/* Lista de empatía específica */}
        <ul className="list-disc text-dark-02 text-left space-y-4 text-sm font-normal">
          <li>Sentirte agotado/a por tener que hacer varias cosas a la vez.</li>
          <li>
            Preocuparte por si estás haciendo lo suficiente por tu hijo/a.
          </li>
          <li>
            Sentirte aislado/a o desconectado/a en el ajetreo de la ciudad.
          </li>
          <li>Luchar por encontrar momentos de calma para ti mismo/a.</li>
        </ul>


      </div>
    </section>
  );
};

export default Empathy;
