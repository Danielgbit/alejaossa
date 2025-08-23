import React from "react";

interface MotivationalProps {
  children: string;
  className?: string;
}

const Motivational = ({ children, className }: MotivationalProps) => {
  return (
    <div
      className={`py-10 text-center font-cormorant text-dark-01 bg-light-02 ${ className || "" }`}
    >
      {children}
    </div>
  );
};

export default Motivational;
