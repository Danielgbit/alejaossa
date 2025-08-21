'use client'

import { ServiceCard } from '@/components/ServiceCard';
import services from '@/data/services';
import React from 'react'

const Services = () => {
  return (
        <section className="py-16 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-cormorant font-normal tracking-title text-center text-primary mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {services.map((item) => (
                <ServiceCard key={item.id} service={item} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Services;