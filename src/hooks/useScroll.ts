// hooks/useScroll.ts - VERSIÓN CON DIRECCIÓN
"use client";

import { useState, useEffect, useRef } from 'react';

const useScroll = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Determinar si se pasó el threshold
      setIsScrolled(scrollTop > threshold);
      
      // Determinar dirección para show/hide
      if (scrollTop > lastScrollY.current && scrollTop > 100) {
        // Scroll hacia abajo - ocultar
        setIsVisible(false);
      } else {
        // Scroll hacia arriba - mostrar
        setIsVisible(true);
      }
      
      lastScrollY.current = scrollTop;
    };

    // Ejecutar inmediatamente
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { 
    isScrolled,  // Para efectos visuales
    isVisible     // Para show/hide con translate
  };
};

export default useScroll;