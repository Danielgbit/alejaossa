import React from 'react'

interface ButtonProps {
  children: string;
  className?: string; // Prop opcional para recibir estilos extra
}


const Button = ({ children, className } : ButtonProps) => {
  return (
    <span className={`btn-base ${className || ''}`}>
      {children}
    </span>
  )
}

export default Button;
