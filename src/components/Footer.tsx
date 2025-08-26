"use client";

import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-02 pt-20 pb-6">
      <div className="max-w-6xl pb-20 text-light-04 mx-auto px-6 grid grid-cols-1 md:grid-cols-[60%_20%_20%] gap-8 text-center md:text-left">
        
        {/* Marca */}
        <div>
          <h3 className="font-cormorant text-light-04 text-4xl tracking-brand font-semibold mb-4">
            Alejandra Ossa
          </h3>
          <p className="text-sm font-light text-light-04 font-lexend">
            Acompañamiento holístico para reconectar con tu esencia, sanar y vivir en armonía.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
        <div>
          <h4 className="font-semibold mb-5 text-lg font-lexend tracking-brand">Explora</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="text-hover-light-02 transition font-cormorant text-xl font-normal">Servicios</a></li>
            <li><a href="#about" className="text-hover-light-02 transition font-cormorant text-xl font-normal">Sobre mí</a></li>
            <li><a href="#contact" className="text-hover-light-02 transition font-cormorant text-xl font-normal">Contacto</a></li>
          </ul>
        </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4 text-lg font-lexend tracking-brand">Conecta</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <Instagram size={20} />
            </a>
            <a href="mailto:correo@ejemplo.com" className="hover:text-accent transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Frase espiritual final */}
      <div className="text-center mt-10 border-t border-light-02/30 border-white pt-6">
        <p className="text-lg italic font-cormorant text-light-02">
          “La sanación comienza cuando regresas a ti mismo.”
        </p>
      </div>
    </footer>
  );
};

export default Footer;
