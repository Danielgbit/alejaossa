"use client";

import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-02 pt-20 pb-6">
      <div
        className="max-w-6xl pb-20 text-light-04 mx-auto px-6 
                  grid grid-cols-1 md:grid-cols-[60%_10%_10%] gap-12 text-center md:text-left"
      >
        {/* Marca */}
        <div>
          <h3 className="font-lexend text-xl text-light-04 md:text-3xl md:text-4xl tracking-brand font-semibold mb-4">
            Aleja de la Ossa
          </h3>
          <p className="text-xs md:text-sm md:pr-4 font-light text-light-04 font-lexend leading-relaxed">
            Acompañamiento holístico para reconectar con tu esencia, sanar y
            vivir en armonía.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="font-semibold mb-5 text-base md:text-lg font-lexend tracking-brand">
            Explora
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="text-hover-light-02 transition font-cormorant text-lg md:text-xl font-normal"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-hover-light-02 transition font-cormorant text-lg md:text-xl font-normal"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=573014965788&text=%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8FHola+Aleja%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre...%E2%98%98%EF%B8%8F&fbclid=PAAaZ5NGAuzGkBSWB4IH3znjFbmn49elvRgjdwRm3rSDHY0RRFX_wpovVvfrw"
                className="text-hover-light-02 transition font-cormorant text-lg md:text-xl font-normal"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-5 text-base md:text-lg font-lexend tracking-brand">
            Conecta
          </h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.facebook.com/share/1CMPcS2TaY/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/alejadelaossa7?igsh=MWQ3eHN3Z2hmbWx5aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="mailto:alejadelaossaterapeuta@gmail.com?subject=Consulta%20de%20servicio&body=Hola%20Aleja,%20quisiera%20saber%20m%C3%A1s%20sobre..."
              className="hover:text-accent transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Frase espiritual final */}
      <div className="text-center mt-10 border-t border-light-02/30 pt-6">
        <p className="text-base px-2 md:text-lg italic font-cormorant text-light-02">
          “La sanación comienza cuando regresas a ti mismo.”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
