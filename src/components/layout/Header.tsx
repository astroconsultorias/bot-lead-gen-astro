
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png" 
            alt="Astro Consultoria Logo" 
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-astro-blue transition-colors">
            Home
          </Link>
          <Link to="/sobre" className="font-medium text-gray-700 hover:text-astro-blue transition-colors">
            Sobre
          </Link>
          <Link to="/servicos" className="font-medium text-gray-700 hover:text-astro-blue transition-colors">
            Serviços
          </Link>
          <Link to="/precos" className="font-medium text-gray-700 hover:text-astro-blue transition-colors">
            Preços
          </Link>
          <Link to="/contato" className="font-medium text-gray-700 hover:text-astro-blue transition-colors">
            Contato
          </Link>
          <Button asChild className="bg-astro-orange hover:bg-astro-orange/90 text-white">
            <Link to="/agendamento">Diagnóstico Grátis</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-astro-blue transition-colors py-2" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/sobre" className="font-medium text-gray-700 hover:text-astro-blue transition-colors py-2" onClick={toggleMobileMenu}>
              Sobre
            </Link>
            <Link to="/servicos" className="font-medium text-gray-700 hover:text-astro-blue transition-colors py-2" onClick={toggleMobileMenu}>
              Serviços
            </Link>
            <Link to="/precos" className="font-medium text-gray-700 hover:text-astro-blue transition-colors py-2" onClick={toggleMobileMenu}>
              Preços
            </Link>
            <Link to="/contato" className="font-medium text-gray-700 hover:text-astro-blue transition-colors py-2" onClick={toggleMobileMenu}>
              Contato
            </Link>
            <Button asChild className="bg-astro-orange hover:bg-astro-orange/90 text-white w-full">
              <Link to="/agendamento" onClick={toggleMobileMenu}>Diagnóstico Grátis</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
