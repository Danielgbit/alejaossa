"use client";

import { Service } from "@/types/service";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center">
      <Image
        src={service.imageUrl}
        alt={service.title}
        width={300}
        height={300}
        className="w-[150px] h-[150px] object-cover rounded-full mb-4"
      />
      <span className="font-cormorant text-3xl tracking-title">{service.title}</span>
      <p className="text-sm font-lexend tracking-sub">{service.description}</p>
      <Button children={service.buttonText} />
    </div>
  );
};
