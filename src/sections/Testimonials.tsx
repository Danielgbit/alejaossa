"use client";

import testimonials from "@/data/testimonials";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/styles/TestimonialsCarrousel.css";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



import TestimonalCard from "@/components/TestimonalCard";

export default function TestimonialCarousel({}) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Importa Swiper de manera dinámica solo en el cliente
    import("swiper").then(({ Swiper }) => {
      swiperRef.current = new Swiper(".swiper", {
        // Configura tus opciones aquí
        modules: [Navigation, Pagination, Autoplay],
        direction: "horizontal",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 1, // Perfecto para testimonios
        spaceBetween: 30,
      });
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper my-50">
      <span className="font-cormorant text-7xl text-center block tracking-title">Testimonios</span>
      <div className="swiper-wrapper mt-20 mb-30">
        {testimonials.map((item) => (
          <div key={item.id} className="swiper-slide">
            <TestimonalCard item={item} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
