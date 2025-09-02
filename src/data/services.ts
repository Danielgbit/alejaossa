import { Service } from "@/types/service";

const services: Service[] = [
  // 🌿 Terapias
  {
    id: 1,
    title: "Terapia Individual",
    description:
      "Un espacio íntimo y profundo para explorar tu historia, emociones y patrones. Te permite liberar bloqueos, encontrar claridad y abrirte a nuevas formas de vivir con más conciencia y ligereza.",
    imageUrl: "/images/terapia-individual-01.jpg",
    buttonText: "Quiero agendar",
    category: "terapias",
  },
  {
    id: 2,
    title: "Terapia de Pareja",
    description:
      "Un encuentro para transformar la relación en un espacio de mayor comunicación, respeto y conexión genuina. Reconocer el vínculo como un espejo para sanar y crecer juntos.",
    imageUrl: "/images/terapia-pareja-01.jpeg",
    buttonText: "Quiero agendar",
    category: "terapias",
  },
  {
    id: 3,
    title: "Terapia Familiar",
    description:
      "Un proceso para mirar al sistema familiar, sanar vínculos y generar nuevas formas de relacionarse desde el amor, el orden y la pertenencia.",
    imageUrl: "/images/terapia-familiar-01.jpg",
    buttonText: "Agendar sesión",
    category: "terapias",
  },
  {
    id: 4,
    title: "Constelaciones Familiares",
    description:
      "Un espacio para mirar lo oculto en tu sistema familiar, liberar lealtades y bloqueos, y abrirte a la reconciliación con tu historia y la fuerza de tu linaje.",
    imageUrl: "/images/constelacion-familiar-01.jpg",
    buttonText: "Explorar más",
    category: "terapias",
  },
  {
    id: 5,
    title: "Terapias Espirituales",
    description:
      "Sesiones que integran lo espiritual y lo psicoemocional: canalización angelical, equilibrio energético y herramientas profundas de sanación interior.",
    imageUrl: "/images/terapia-espiritual-01.jpeg",
    buttonText: "Saber más",
    category: "terapias",
  },

  // 🔮 Mentorías
  {
    id: 6,
    title: "Mentoría 303 – Conecta con el alma de tu empresa",
    description:
      "Ciclo de tres encuentros para emprendedores que buscan claridad y expansión. Exploramos el alma de tu proyecto, su propósito y tu coherencia personal.",
    imageUrl: "/images/mentoria-02.jpg",
    buttonText: "Más información",
    category: "mentorías",
  },

  // 🌙 Ceremonias
  {
    id: 7,
    title: "Ceremonias Holísticas",
    description:
      "Experiencias para ritualizar la vida con amor y conciencia. Se crean de forma personalizada según tu intención: bodas espirituales, cumpleaños, baby shower, nuevos inicios o duelos.",
    imageUrl: "/images/ceremonia-holistica-01.jpg",
    buttonText: "Ver ceremonias",
    category: "ceremonias",
  },

  {
    id: 9,
    title: "Talleres, Capacitaciones y Conferencias",
    description:
      "Experiencias personalizadas para emprendedores, empresas o grupos. Combinamos herramientas prácticas y espirituales para fortalecer equipos y despertar consciencia.",
    imageUrl: "/images/taller-01.jpg",
    buttonText: "Solicitar info",
    category: "otros",
  },

  // 🌺 Círculos y Retiros
  {
    id: 10,
    title: "Retiros Espirituales",
    description:
      "Espacios transformadores para desconectar del ruido externo y reconectar contigo mismo. A través de rituales, terapias y música medicina, renaces a una nueva versión de ti.",
    imageUrl: "/images/retiros-espirituales-01.jpg",
    buttonText: "Saber más",
    category: "círculos",
  },
  {
    id: 11,
    title: "Círculos de Mujeres",
    description:
      "Un espacio seguro y sagrado para compartir historias, sanar memorias y despertar la fuerza creativa y amorosa que nos habita. Un recordatorio de que no estamos solas.",
    imageUrl: "/images/circulo-mujeres-04.jpg",
    buttonText: "Descubrir más",
    category: "círculos",
  },
  {
    id: 12,
    title: "Círculos Mixtos",
    description:
      "Espacios de encuentro entre mujeres y hombres para escucharse desde el alma, sanar heridas colectivas y crecer en respeto mutuo.",
    imageUrl: "/images/circulo-mixto-02.jpg",
    buttonText: "Empezar ahora",
    category: "círculos",
  },

  // 🌺 Equipo
  {
    id: 13,
    title: "Terapia de Sonido",
    description:
      "Sanación a través de vibraciones con cuencos, tambores y frecuencias que armonizan cuerpo y mente.",
    imageUrl: "/images/terapia-sonido-01.jpg",
    buttonText: "Reservar",
    category: "otros",
  },
  {
    id: 14,
    title: "Masajes Relajantes",
    description:
      "Masajes enfocados en liberar tensiones, dolores o bloqueos específicos para recuperar bienestar y equilibrio.",
    imageUrl: "https://images.pexels.com/photos/9336024/pexels-photo-9336024.jpeg",
    buttonText: "Agendar masaje",
    category: "otros",
  },
];

export default services;
