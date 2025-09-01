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
    import("swiper").then(({ Swiper }) => {
      swiperRef.current = new Swiper(".swiper", {
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
        spaceBetween: 30,

        // 👇 Aquí lo responsive
        breakpoints: {
          0: {
            slidesPerView: 1, // móviles
          },
          768: {
            slidesPerView: 2, // tablets
          },
          1024: {
            slidesPerView: 3, // desktops
          },
        },
      });
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper my-20 md:my-50 px-4 w-full">
      {/* Título */}
      <span className="font-cormorant text-3xl md:text-5xl lg:text-7xl text-center block tracking-title text-dark-01">
        Testimonios
      </span>

      {/* Slides */}
      <div className="swiper-wrapper mt-10 md:mt-20 mb-16 md:mb-30">
        {testimonials.map((item) => (
          <div key={item.id} className="swiper-slide">
            <TestimonalCard item={item} />
          </div>
        ))}
      </div>

      {/* Controles */}
      {/* Controles */}
      <div className="swiper-pagination"></div>
      <div className="hidden md:block swiper-button-next"></div>
      <div className="hidden md:block swiper-button-prev"></div>
    </div>
  );
}
