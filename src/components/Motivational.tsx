import React from "react";

interface MotivationalProps {
  children: string;
  className?: string;
}

const Motivational = ({ children, className }: MotivationalProps) => {
  return (
    <div
      className={`md:py-6 py-2 px-4 md:px-8 text-center font-cormorant text-dark-01 bg-light-02 rounded-xl shadow-md ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Motivational;
