// components/PodcastSection/index.tsx
"use client";

import { motion } from "framer-motion";
import { FaSpotify, FaHeadphones, FaMicrophone } from "react-icons/fa";

const Podcast = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 font-lexend bg-gradient-to-r from-purple-200 to-purple-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl tracking-title font-bold text-dark-03 mb-6"
            >
              Podcast de Espiritualidad
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <FaHeadphones className="text-dark-01 mr-3 text-xl" />
              <span className="text-sm tracking-sub font-semibold text-dark-04">Disponible en Spotify</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm tracking-paragraph text-dark-01 mb-6"
            >
              Explora temas de crecimiento espiritual, meditación guiada y conversaciones 
              transformadoras. Cada episodio es una oportunidad para conectar con tu ser 
              interior y descubrir nuevas perspectivas sobre tu camino espiritual.
            </motion.p>
            
            <motion.a
              href="https://open.spotify.com/show/5Xh5mixklCGNmLh8dmbk5x?si=tfGA6eGsTmSlhpsLdKZzjw" // Reemplaza con tu enlace de Spotify
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center tracking-brand bg-purple-800 hover:bg-purple-500 text-light-04 font-bold py-3 px-6 rounded-4xl transition-colors shadow-lg"
            >
              <FaSpotify className="mr-2 text-xl" />
              Escuchar en Spotify
            </motion.a>
          </div>
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-purple-300 p-8 rounded-xl shadow-xl"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <FaSpotify className="text-light-02 text-6xl md:text-8xl" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 text-center"
              >
                <h3 className="text-lg font-semibold tracking-title text-dark-02 mb-2">Nuevos episodios</h3>
                <p className="text-dark-02 tracking-sub text-xs">No te pierdas nuestros contenidos exclusivos</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Podcast;