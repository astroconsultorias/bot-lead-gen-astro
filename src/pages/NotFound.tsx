
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
        <h1 className="text-6xl md:text-8xl font-bold text-astro-blue mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">Página não encontrada</p>
        <p className="text-gray-500 max-w-md text-center mb-8">
          A página que você está tentando acessar não existe ou foi movida.
        </p>
        <Button asChild className="bg-astro-blue hover:bg-astro-blue/90 text-white">
          <a href="/">Voltar à Página Inicial</a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
