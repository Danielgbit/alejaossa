"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Whatsapp = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 py-30 bg-gradient-to-r from-purple-200 to-purple-100"
    >
      <div className="container mx-auto max-w-1xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold tracking-title text-dark-01 mb-6"
            >
              Únete a nuestra comunidad
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm tracking-paragraph text-dark-03 font-normal mb-6"
            >
              Forma parte de nuestro grupo de WhatsApp donde compartimos
              reflexiones, meditaciones guiadas y apoyamos nuestro crecimiento
              espiritual en comunidad. Conecta con personas afines y participa
              en actividades exclusivas para miembros.
            </motion.p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <motion.a
              href="https://chat.whatsapp.com/FnwYqe1LqI4J8bxuVgFFKt?mode=ems_wa_t" // Reemplaza con tu enlace real
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center tracking-brand bg-purple-800 hover:bg-purple-500 text-light-04 font-bold py-3 px-6 rounded-4xl transition-colors shadow-lg"
            >
              <MessageCircle className="mr-2 text-2xl" />
              Unirse al grupo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Whatsapp;
