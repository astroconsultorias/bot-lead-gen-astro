import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png"
                alt="Astro Consultoria Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Estruturação de negócios e geração de clientes para pequenas empresas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="text-primary-foreground/80">(51) 98152-0555</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span className="text-primary-foreground/80">astroconsultorias@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-accent" />
                <a href="https://instagram.com/consultoria_astro" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  @consultoria_astro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/50">
            &copy; {currentYear} Astro Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50 mt-2 md:mt-0">
            Crescimento não acontece no improviso. Acontece com estrutura.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
