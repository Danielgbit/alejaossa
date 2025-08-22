import React from "react";

interface MotivationalProps {
  children: string;
  className?: string;
}

const Motivational = ({ children, className }: MotivationalProps) => {
  return (
    <div
      className={`py-10 text-center font-cormorant text-light-01 bg-dark-01 ${ className || "" }`}
    >
      {children}
    </div>
  );
};

export default Motivational;
