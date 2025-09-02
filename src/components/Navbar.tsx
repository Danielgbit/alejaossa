"use client";

import React, { useState } from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";
import Logout from "./Logout";
import useScroll from "@/hooks/useScroll";
import { Menu, X } from "lucide-react";
import LoadingNavBar from "./LoadingNavBar";

const Navbar = () => {
  const { data: session, status } = useSession();
  const { isScrolled, isVisible } = useScroll(30);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (status === "loading") {
    return (
      <nav
        className={`
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
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "shadow-md border-b border-gray-200" : ""}
      `}
      >
        <LoadingNavBar />
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`
        p-4 
        bg-transparent 
        fixed 
        top-0 
        left-0 
        w-full 
        z-50 
        transition-transform 
        duration-300
        flex
        justify-evenly
        ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "shadow-md border-b border-gray-200 bg-light-02" : ""}
      `}
      >
        <div className="container flex justify-between w-full items-center text-dark-02">
          <a
            href="/"
            className="uppercase md:w-[20%] w-[50%] text-xl md:text-3xl tracking-brand font-light"
          >
            Aleja Ossa
          </a>

          {/* Menu para desktop */}
          <ul
            className={`md:flex justify-between font-lexend font-semilight hidden w-[40%]
            }`}
          >
            <li className="flex justify-between w-full items-center">
              <a
                href="/"
                className="text-hover-light-01 text-sm hover:text-blue-600 transition-colors"
              >
                Inicio
              </a>
              <a
                href="/blog"
                className="text-hover-light-01 text-sm hover:text-blue-600 transition-colors"
              >
                Blogs
              </a>
              <a
                href="/services"
                className="text-hover-light-01 text-sm hover:text-blue-600 transition-colors"
              >
                Servicios
              </a>

              {session?.user ? (
                <>
                  <a
                    href="dashboard"
                    className="text-hover-light-01 text-sm hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </a>
                  <li className="list-none">
                    <Logout />
                  </li>
                </>
              ) : (
                <a
                  href="/login"
                  className="text-purple-800 hover:text-purple-800 text-sm flex gap-2 bg-purple-200 hover:bg-purple-300 px-5 py-1 rounded-full hover:bg-light-01 transition-colors"
                >
                  Ingresar
                </a>
              )}
            </li>
          </ul>

          <a
            href="https://api.whatsapp.com/send?phone=573014965788&text=%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8FHola+Aleja%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre...%E2%98%98%EF%B8%8F&fbclid=PAAaZ5NGAuzGkBSWB4IH3znjFbmn49elvRgjdwRm3rSDHY0RRFX_wpovVvfrw"
            className="w-[20%] justify-end md:flex hidden"
          >
            <Button className="button-01 hover:scale-105 transition-transform">
              Hablemos
            </Button>
          </a>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div
          className={`${
            isVisible
              ? "translate-y-0"
              : "-translate-y-[-100%] ease-in-out duration-300 trasition-transform"
          } md:hidden fixed py-5 top-16 left-0 w-full h-full bg-light-01 z-40 pt-4 px-4`}
        >
          <div className="flex flex-col space-y-6">
            <a
              href="/"
              className="text-hover-light-01 text-sm font-lexend tracking-brand text-center text-dark-03 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="/blog"
              className="text-hover-light-01 text-sm font-lexend tracking-brand text-center text-dark-03 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blogs
            </a>
            <a
              href="/services"
              className="text-hover-light-01 text-sm font-lexend tracking-brand text-center text-dark-03 transition-colors py-2"
            >
              Servicios
            </a>

            {session?.user ? (
              <div className="flex flex-col justify-center items-center gap-3">
                <a
                  href="dashboard"
                  className="text-hover-light-01 font-lexend text-dark-03 tracking-brand text-sm text-center w-[50%] mx-auto bg-light-02 py-1 rounded-full hover:bg-light-01 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </a>
                <div className="py-2">
                  <Logout />
                </div>
              </div>
            ) : (
              <a
                href="/login"
                className="text-hover-light-01 w-[50%] flex gap-2 font-lexend bg-light-02 px-3 py-2 text-xs rounded-full hover:bg-light-01 transition-colors mx-auto justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ingresar
              </a>
            )}

            <button className="button-01 bg-dark-03 tracking-[-0.5px] text-light-02 rounded-full w-[50%] px-3 py-2 text-xs mx-auto  font-lexend">
              Hablemos
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
