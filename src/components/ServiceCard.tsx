"use client";

import { Service } from "@/types/service";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col space-y-5 items-center shadow-lg justify-between bg-light-02 py-8 px-10 rounded-lg">
      <div className="relative w-[150px] h-[140px] md:h-[150px] rounded-full overflow-hidden mb-4">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-purple-500/30 mix-blend-multiply"></div>
      </div>
      <span className="font-cormorant text-dark-03 text-3xl text-center md:text-3xl font-semibold mt-5 tracking-title">
        {service.title}
      </span>
      <p className="text-xs md:text-sm text-center font-normal font-lexend text-dark-01 tracking-sub">
        {service.description}
      </p>
      <a href="https://api.whatsapp.com/send?phone=573014965788&text=%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8FHola+Aleja%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre...%E2%98%98%EF%B8%8F&fbclid=PAAaZ5NGAuzGkBSWB4IH3znjFbmn49elvRgjdwRm3rSDHY0RRFX_wpovVvfrw">
        <Button className="button-01">{service.buttonText}</Button>
      </a>
    </div>
  );
};
