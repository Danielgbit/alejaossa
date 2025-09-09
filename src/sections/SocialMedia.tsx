"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import socialLinks from "@/data/socialLinks";

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-25 px-4 font-lexend bg-gradient-to-r from-purple-200 to-purple-100">
      <div className="container mx-auto max-w-5xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-01 tracking-title mb-4">
            Conectemos en Redes Sociales
          </h2>
          <p className="text-sm text-dark-01 tracking-paragraph max-w-2xl mx-auto">
            Sígueme en mis redes sociales para mantenerte al día con contenido
            espiritual, reflexiones diarias y updates sobre próximos retiros y
            eventos.
          </p>
        </motion.div>

        {/* Grid de Redes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-t from-purple-900 to-purple-400 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div
                  className={`${social.color} h-20 flex items-center justify-center`}
                >
                  <Icon className="text-white w-8 h-8" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg tracking-title font-semibold text-light-02 mb-3">
                    {social.name}
                  </h3>

                  <p className="text-light-04 text-xs tracking-sub font-light mb-4 flex-grow">
                    {social.description}
                  </p>

                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center text-light-03 font-semibold mt-auto"
                  >
                    Conectar ahora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-dark-02 tracking-paragraph text-xs italic">
            Elige tu plataforma favorita y únete a nuestra comunidad de
            crecimiento espiritual
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
