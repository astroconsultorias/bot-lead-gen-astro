import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={"https://wa.me/5551981520555?text=" + encodeURIComponent("Olá, conheci a Astro pelo site e gostaria de saber qual solução faz mais sentido para minha empresa.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3.5 md:p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      aria-label="Falar com a Astro pelo WhatsApp"
      title="Falar pelo WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;
