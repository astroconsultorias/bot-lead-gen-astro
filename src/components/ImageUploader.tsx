
import React, { ChangeEvent, useState } from 'react';
import { Upload, Image, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  onImageSelect?: (file: File) => void;
  label?: string;
  className?: string;
  initialImage?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageSelect,
  label = "Selecionar Imagem",
  className = "",
  initialImage
}) => {
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(initialImage || null);

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

  const clearImage = () => {
    setPreview(null);
    // Reset file input
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
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
      
      {preview ? (
        <div className="relative group">
          <img
            src={preview}
            alt="Preview"
            className="max-w-[200px] max-h-[200px] object-contain rounded-lg border border-gray-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={clearImage}
                className="bg-white/80 hover:bg-white text-red-500 rounded-full"
              >
                <X size={18} />
              </Button>
              <label 
                htmlFor="image-upload"
                className="bg-white/80 hover:bg-white text-blue-500 p-2 rounded-full cursor-pointer"
              >
                <Upload size={18} />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <label 
          htmlFor="image-upload"
          className="cursor-pointer"
        >
          <Button variant="outline" className="w-[200px] h-[200px] border-dashed">
            <div className="flex flex-col items-center gap-2">
              <Image size={40} />
              <span>{label}</span>
            </div>
          </Button>
        </label>
      )}
    </div>
  );
};

export default ImageUploader;
