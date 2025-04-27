
import React from 'react';
import Layout from '@/components/layout/Layout';
import ImageUploader from '@/components/ImageUploader';
import { Badge } from '@/components/ui/badge';

const ImageUpload: React.FC = () => {
  const handleImageSelect = (file: File) => {
    // Here you would typically handle the file upload to your server
    console.log('Selected file:', file);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-astro-purple/10 text-astro-purple hover:bg-astro-purple/20 mb-4">
              Upload de Imagens
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Gerenciar Imagens
            </h1>
            <p className="text-lg text-gray-600">
              Use este espaço para fazer upload das imagens do seu site.
              Recomendamos imagens em alta resolução e em formato JPG ou PNG.
            </p>
          </div>

          <div className="grid gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Logo da Empresa</h2>
              <ImageUploader
                label="Upload do Logo"
                onImageSelect={handleImageSelect}
              />
              <p className="text-sm text-gray-500 mt-2">
                Tamanho recomendado: 200x60px, formato PNG com fundo transparente
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Imagem Hero Section</h2>
              <ImageUploader
                label="Upload Imagem Hero"
                onImageSelect={handleImageSelect}
              />
              <p className="text-sm text-gray-500 mt-2">
                Tamanho recomendado: 1920x1080px, formato JPG ou PNG
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageUpload;
