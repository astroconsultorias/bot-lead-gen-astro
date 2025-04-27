
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-astro-blue text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Astro</span>
              <span className="text-lg font-medium text-astro-light/80">Consultoria</span>
            </div>
            <p className="text-sm text-astro-light/80 mb-4">
              Automação de atendimento via WhatsApp com bots inteligentes e treinamento científico para equipes.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-astro-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-astro-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-astro-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-astro-light/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-astro-light/80 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-astro-light/80 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/precos" className="text-astro-light/80 hover:text-white transition-colors">
                  Preços e Pacotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/bots" className="text-astro-light/80 hover:text-white transition-colors">
                  Bots de WhatsApp
                </Link>
              </li>
              <li>
                <Link to="/servicos/treinamento" className="text-astro-light/80 hover:text-white transition-colors">
                  Treinamento Científico
                </Link>
              </li>
              <li>
                <Link to="/servicos/consultoria" className="text-astro-light/80 hover:text-white transition-colors">
                  Consultoria de Implementação
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-astro-orange" />
                <span className="text-astro-light/80">(51) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-astro-orange" />
                <span className="text-astro-light/80">contato@astroconsultoria.com.br</span>
              </li>
              <li className="mt-4">
                <Link to="/agendamento" className="text-astro-orange hover:text-astro-orange/90 font-medium">
                  Agende seu diagnóstico gratuito →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-astro-blue-700">
        <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-astro-light/60">
            &copy; {currentYear} Astro Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/politica-de-privacidade" className="text-sm text-astro-light/60 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-sm text-astro-light/60 hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
