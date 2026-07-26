import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import HighContrastToggle from "@/components/HighContrastToggle";

const WA_DIAG =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de entender como vocês podem ajudar minha empresa."
  );

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "/#top" },
  { label: "Diagnóstico", href: "/#diagnostico" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Método ASTRO", href: "/#metodo" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileMenuOpen(false);

  const renderLink = (item: NavItem, onClick?: () => void) => {
    // Use hash links only when on the homepage; otherwise route to /#anchor
    const href =
      location.pathname === "/" && item.href.startsWith("/#")
        ? item.href.replace("/", "")
        : item.href;
    return (
      <a
        key={item.href}
        href={href}
        onClick={onClick}
        className="font-medium text-foreground/80 hover:text-accent transition-colors"
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Astro Consultoria — início">
          <img
            src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png"
            alt="Astro Consultoria"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => renderLink(item))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a
              href={WA_DIAG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar diagnóstico pelo WhatsApp"
            >
              Solicitar diagnóstico
            </a>
          </Button>
          <HighContrastToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <HighContrastToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto py-4 px-6 flex flex-col space-y-3">
            {navItems.map((item) => (
              <React.Fragment key={item.href}>
                {renderLink(item, closeMenu)}
              </React.Fragment>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
            >
              <a
                href={WA_DIAG}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                aria-label="Solicitar diagnóstico pelo WhatsApp"
              >
                Solicitar diagnóstico
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
