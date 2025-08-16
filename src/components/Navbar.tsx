import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center text-nav">
                <div className="w-[30%] uppercase text-3xl tracking-brand font-light">Aleja Ossa</div>
                <ul className="flex justify-evenly w-[70%] font-lexend font-normal"> 
                    <li><a href="/" className="hover:text-white">Inicio</a></li>
                    <li><a href="/about" className="hover:text-white">Blog</a></li>
                    <li><a href="/contact" className="hover:text-white">Contacto</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
