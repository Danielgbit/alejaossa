"use client";

import testimonials from "@/data/testimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/styles/TestimonialsCarrousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import TestimonalCard from "@/components/TestimonalCard";

export default function TestimonialCarousel() {
  return (
    <div className="my-20 md:mt-40 px-4 w-full">
      {/* Título */}
      <span className="font-cormorant text-3xl md:text-5xl lg:text-7xl text-center block tracking-title text-dark-01">
        Testimonios
      </span>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10 md:mt-20 mb-16 md:mb-30"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonalCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
