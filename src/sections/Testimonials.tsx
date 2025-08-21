"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import testimonials from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-cormorant font-bold text-primary mb-12">
          Testimonios
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src={t.imageUrl}
                    alt={t.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-600 italic mb-4">“{t.text}”</p>
                <h3 className="text-lg font-semibold text-dark-01">
                  {t.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
