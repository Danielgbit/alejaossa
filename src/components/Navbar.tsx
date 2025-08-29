"use client";

import React from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";
import Logout from "./Logout";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const { data: session, status } = useSession();
  const { isScrolled, isVisible } = useScroll(30);

  if (status === "loading") {
    return (
      <nav className={`
        p-4 
        bg-white 
        fixed 
        top-0 
        left-0 
        w-full 
        z-50 
        transition-transform 
        duration-300
        ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'shadow-md border-b border-gray-200' : ''}
      `}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[30%] h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-[40%] h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-[30%] h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`
      p-4 
      bg-white 
      fixed 
      top-0 
      left-0 
      w-full 
      z-50 
      transition-transform 
      duration-300
      ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${isScrolled ? 'shadow-md border-b border-gray-200' : ''}
    `}>
      <div className="container mx-auto flex justify-between items-center text-dark-02">
        <div className="w-[30%] uppercase text-3xl tracking-brand font-light">
          Aleja Ossa
        </div>

        <ul className={`flex justify-evenly font-lexend font-semilight ${session?.user ? "w-[40%]" : "w-[23%]"}`}>
          <li className="flex justify-between w-full items-center">
            <a href="/" className="text-hover-light-01 hover:text-blue-600 transition-colors">
              Inicio
            </a>
            <a href="/blog" className="text-hover-light-01 hover:text-blue-600 transition-colors">
              Blogs
            </a>

            {session?.user ? (
              <>
                <a href="dashboard" className="text-hover-light-01 hover:text-blue-600 transition-colors">
                  Dashboard
                </a>
                <li className="list-none">
                  <Logout />
                </li>
              </>
            ) : (
              <a
                href="/login"
                className="text-hover-light-01 flex gap-2 bg-light-02 px-5 py-1 rounded-full hover:bg-light-01 transition-colors"
              >
                Ingresar
              </a>
            )}
          </li>
        </ul>

        <div className="w-[30%] flex justify-end">
          <Button className="button-01 hover:scale-105 transition-transform">
            Contactar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;