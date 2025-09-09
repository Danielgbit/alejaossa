import {
  Instagram,
  Facebook,
  MessageCircle,
  Music2,
  FacebookIcon,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/alejadelaossa7?igsh=MWQ3eHN3Z2hmbWx5aw==",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600",
    description:
      "Sigue nuestro contenido diario con reflexiones, tips y momentos de nuestros retiros.",
  },
  {
    name: "TikTok",
    icon: Music2,
    url: "https://www.tiktok.com/@alejadelaossa7?is_from_webapp=1&sender_device=pc",
    color: "bg-black",
    hoverColor: "hover:bg-gray-800",
    description:
      "Disfruta de videos cortos con mensajes inspiradores y momentos de meditación.",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/alejandra.ossarestrepo.5?rdid=XDggx14c90mhU97B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CMPcS2TaY%2F#",
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-700",
    description:
      "Disfruta de videos cortos con mensajes inspiradores y momentos de meditación.",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://api.whatsapp.com/send?phone=573014965788&text=%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8FHola+Aleja%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre...%E2%98%98%EF%B8%8F&fbclid=PAAaZ5NGAuzGkBSWB4IH3znjFbmn49elvRgjdwRm3rSDHY0RRFX_wpovVvfrw", // cambia por tu número real
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    description:
      "Únete a nuestra comunidad para recibir mensajes diarios y noticias exclusivas.",
  },
];

export default socialLinks;
