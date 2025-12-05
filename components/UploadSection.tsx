import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface UploadSectionProps {
  onImageSelected: (base64: string) => void;
  isProcessing: boolean;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onImageSelected, isProcessing }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    // Simple validation
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      onImageSelected(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 ${
        isProcessing 
          ? 'border-zinc-700 bg-zinc-900/50 cursor-not-allowed opacity-50' 
          : 'border-zinc-600 hover:border-indigo-500 hover:bg-zinc-800/50 cursor-pointer bg-zinc-900'
      }`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => !isProcessing && fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
        disabled={isProcessing}
      />
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
          {isProcessing ? (
            <ImageIcon className="w-8 h-8 text-zinc-500 animate-pulse" />
          ) : (
            <Upload className="w-8 h-8 text-indigo-500" />
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            {isProcessing ? 'Processing Image...' : 'Upload Portrait Photo'}
          </h3>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto">
            Drop your photo here, or click to browse. For best results, use a clear portrait with good lighting.
          </p>
        </div>
      </div>
    </div>
  );
};