import React from 'react'

const Button = ({ children} : { children: String }) => {
  return (
    <span className="bg-black cursor-pointer inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold">
      {children}
    </span>
  )
}

export default Button;
