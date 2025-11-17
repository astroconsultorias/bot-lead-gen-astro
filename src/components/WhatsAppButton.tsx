
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5551999041181?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Astro%20Consultoria."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;
