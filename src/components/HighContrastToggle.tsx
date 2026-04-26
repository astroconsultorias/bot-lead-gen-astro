import React from "react";
import { Contrast } from "lucide-react";
import { useHighContrast } from "@/hooks/use-high-contrast";
import { cn } from "@/lib/utils";

interface HighContrastToggleProps {
  className?: string;
}

const HighContrastToggle: React.FC<HighContrastToggleProps> = ({ className }) => {
  const { enabled, toggle } = useHighContrast();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={
        enabled
          ? "Desativar modo de alto contraste"
          : "Ativar modo de alto contraste"
      }
      title={
        enabled
          ? "Desativar alto contraste"
          : "Ativar alto contraste"
      }
      className={cn(
        "inline-flex items-center justify-center h-10 w-10 rounded-md border border-border bg-background/60 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        enabled && "bg-accent text-accent-foreground border-accent",
        className
      )}
    >
      <Contrast size={18} aria-hidden="true" />
    </button>
  );
};

export default HighContrastToggle;
