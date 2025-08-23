"use client";

import { Service } from "@/types/service";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col space-y-5 items-center shadow-lg justify-center bg-light-02 py-8 px-10 rounded-lg">
      <Image
        src={service.imageUrl}
        alt={service.title}
        width={300}
        height={300}
        className="w-[150px] h-[150px] object-cover rounded-full mb-4"
      />
      <span className="font-cormorant text-dark-03 text-3xl mt-5 tracking-title">{service.title}</span>
      <p className="text-sm text-center font-normal font-lexend text-dark-01 tracking-sub">{service.description}</p>
      <Button className="button-01" children={service.buttonText} />
    </div>
  );
};
