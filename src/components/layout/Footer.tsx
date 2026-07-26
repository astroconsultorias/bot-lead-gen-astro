import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const WA_LINK = "https://wa.me/5551981520555";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear() >= 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png"
                alt="Astro Consultoria"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 font-semibold mb-2">
              Astro Consultoria
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Consultoria em atendimento, processos, organização comercial e tecnologia para pequenos negócios.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Abrir conversa no WhatsApp"
                >
                  WhatsApp: (51) 98152-0555
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-accent shrink-0" />
                <a
                  href="https://instagram.com/consultoria_astro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  @consultoria_astro
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:astroconsultorias@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  astroconsultorias@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Porto Alegre e Região Metropolitana
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Início</Link></li>
              <li><a href="/#diagnostico" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Diagnóstico</a></li>
              <li><a href="/#solucoes" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Soluções</a></li>
              <li><a href="/#metodo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Método</a></li>
              <li><a href="/#sobre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sobre</a></li>
              <li><a href="/#contato" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contato</a></li>
              <li><Link to="/politica-de-privacidade" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} Astro Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Pessoas → Processos → Tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
