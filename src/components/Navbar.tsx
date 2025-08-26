"use client";

import React from "react";
import Button from "./Button";

import { useSession } from "next-auth/react";
import Logout from "./Logout";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center text-dark-02">
          <div className="w-[30%] uppercase text-3xl tracking-brand font-light">
            Aleja Ossa
          </div>
          <ul
            className={`flex justify-evenly font-lexend font-semilight 
            ${session?.user ? "w-[40%]" : "w-[23%]"}`}
          >
            <li className="flex justify-between w-full items-center">
              <a href="/" className="text-hover-light-01 items-center">
                Inicio
              </a>
              <a href="/blog" className="text-hover-light-01 items-center">
                Blogs
              </a>
              {session?.user ? (
                <div className="flex gap-10 w-[30%]">
                  <a href="dashboard" className="text-hover-light-01">
                    Dashboard
                  </a>
                  <Logout />
                </div>
              ) : (
                <a
                  href="login"
                  className="text-hover-light-01 flex gap-2 bg-light-02 px-5 py-1 rounded-full"
                >
                  Ingresar
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
