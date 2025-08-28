"use client";

import React from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";
import Logout from "./Logout";

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center text-dark-02">
          <div className="w-[30%] uppercase text-3xl tracking-brand font-light">
            Aleja Ossa
          </div>
          
          {/* Placeholder para los items del nav */}
          <div className={`flex justify-evenly font-lexend font-semilight w-[40%]`}>
            <div className="flex justify-between w-full items-center">
              <div className="invisible">
                {/* Espacio reservado */}
                <a href="/" className="text-hover-light-01">Inicio</a>
                <a href="/blog" className="text-hover-light-01">Blogs</a>
              </div>
            </div>
          </div>
          
          <div className="w-[30%] flex justify-end">
            <Button className="button-01">Contactar</Button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center text-dark-02">
          <div className="w-[30%] uppercase text-3xl tracking-brand font-light">
            Aleja Ossa
          </div>
          
          <ul className={`flex justify-evenly font-lexend font-semilight ${session?.user ? "w-[40%]" : "w-[23%]"}`}>
            <li className="flex justify-between w-full items-center">
              <a href="/" className="text-hover-light-01">
                Inicio
              </a>
              <a href="/blog" className="text-hover-light-01">
                Blogs
              </a>
              
              {session?.user ? (
                <>
                  <a href="dashboard" className="text-hover-light-01">
                    Dashboard
                  </a>
                  <li className="list-none">
                    <Logout />
                  </li>
                </>
              ) : (
                <a href="login" className="text-hover-light-01 flex gap-2 bg-light-02 px-5 py-1 rounded-full">
                  Ingresar
                </a>
              )}
            </li>
          </ul>
          
          <div className="w-[30%] flex justify-end">
            <Button className="button-01">Contactar</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;