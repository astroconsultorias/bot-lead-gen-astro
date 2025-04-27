
import React, { ChangeEvent, useState } from 'react';
import { Upload, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  onImageSelect?: (file: File) => void;
  label?: string;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageSelect,
  label = "Selecionar Imagem",
  className = ""
}) => {
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Erro no upload",
          description: "A imagem deve ter no máximo 5MB",
          variant: "destructive"
        });
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Erro no upload",
          description: "Por favor, selecione apenas arquivos de imagem",
          variant: "destructive"
        });
        return;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      
      // Call callback if provided
      if (onImageSelect) {
        onImageSelect(file);
      }

      toast({
        title: "Sucesso!",
        description: "Imagem selecionada com sucesso",
      });
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-upload"
      />
      
      <label 
        htmlFor="image-upload"
        className="cursor-pointer flex flex-col items-center gap-2"
      >
        {preview ? (
          <div className="relative group">
            <img
              src={preview}
              alt="Preview"
              className="max-w-[200px] max-h-[200px] object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <Upload className="text-white" />
            </div>
          </div>
        ) : (
          <Button variant="outline" className="w-[200px] h-[200px] border-dashed">
            <div className="flex flex-col items-center gap-2">
              <Image size={40} />
              <span>{label}</span>
            </div>
          </Button>
        )}
      </label>
    </div>
  );
};

export default ImageUploader;
