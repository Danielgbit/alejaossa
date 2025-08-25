"use client";

import React from "react";
import Button from "./Button";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center text-dark-02">
          <div className="w-[30%] uppercase text-3xl tracking-brand font-light">
            Aleja Ossa
          </div>
          <ul className="flex justify-evenly w-[40%] font-lexend font-semilight">
            <li className="flex justify-between w-full">
              <a href="/" className="text-hover-light-01">
                Inicio
              </a>
              {session?.user ? (
                <a href="dashboard" className="text-hover-light-01">
                  Dashboard
                </a>
              ) : (
                <a href="login" className="text-hover-light-01">
                  Login
                </a>
              )}
            </li>
          </ul>
          <div className="w-[30%] flex justify-end">
            <Button className="button-01" children={"Contactar"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
