'use client'

import React from 'react'
import Button from './Button'
import NAV_ITEMS from '@/lib/constants/navigations'

const Navbar = () => {
  return (
    <div>
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center text-dark-02">
                <div className="w-[30%] uppercase text-3xl tracking-brand font-light">Aleja Ossa</div>
                <ul className="flex justify-evenly w-[40%] font-lexend font-semilight">
                    {NAV_ITEMS.map((nav) => (
                        <li key={nav.label}><a href={nav.href} className="text-hover-light-01">{nav.label}</a></li>
                    ))}
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
