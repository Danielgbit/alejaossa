'use client'

import { ServiceCard } from '@/components/ServiceCard';
import services from '@/data/services';
import React from 'react'

const Services = () => {
  return (
<section className="py-12 md:py-16 bg-light">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    <h2 className="text-3xl md:text-5xl lg:text-7xl text-dark-01 font-cormorant font-semibold tracking-title text-center text-primary mb-8 md:mb-12">
      Servicios
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-20">
      {services.map((item) => (
        <ServiceCard key={item.id} service={item} />
      ))}
    </div>
  </div>
</section>

  )
}

export default Services;