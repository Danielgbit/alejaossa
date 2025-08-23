'use client'

import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center text-dark-02">
                <div className="w-[30%] uppercase text-3xl tracking-brand font-light">Aleja Ossa</div>
                <ul className="flex justify-evenly w-[40%] font-lexend font-semilight"> 
                    <li><a href="/" className="text-hover-light-01">Inicio</a></li>
                    <li><a href="/about" className="text-hover-light-01">Blog</a></li>
                    <li><a href="/contact" className="text-hover-light-01">Contacto</a></li>
                </ul>
                <div className='w-[30%] flex justify-end'>
                    <Button className='button-01' children={'Contactar'}/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
