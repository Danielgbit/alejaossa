import React from "react";

interface MotivationalProps {
  children: string;
  className?: string; // Prop opcional para recibir estilos extra
}

const Motivational = ({ children, className }: MotivationalProps) => {
  return (
    <p
      className={`py-10 text-center font-cormorant text-light-01 bg-dark-01 ${className || ""}`}
    >
      {children}
    </p>
  );
};

export default Motivational;
