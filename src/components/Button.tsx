import React from 'react'

interface ButtonProps {
  children: string;
  className?: string; // Prop opcional para recibir estilos extra
}


const Button = ({ children, className } : ButtonProps) => {
  return (
    <span className={`text-dark-01 text-sm uppercase border-dark-01 cursor-pointer inline-block px-7 py-2 rounded-full text-white font-semibold tracking-[1px] 
        ${className || ''}`}>
      {children}
    </span>
  )
}

export default Button;
