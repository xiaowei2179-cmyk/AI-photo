import React from 'react';
import { GeneratedImage } from '../types';
import { Download, AlertCircle, Loader2 } from 'lucide-react';

interface PhotoCardProps {
  item: GeneratedImage;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ item }) => {
  const handleDownload = () => {
    if (item.imageUrl) {
      const link = document.createElement('a');
      link.href = item.imageUrl;
      link.download = `photo-studio-${item.styleId}-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="relative group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-xl flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm z-10 absolute top-0 w-full">
        <h3 className="text-white font-medium text-sm tracking-wide">{item.styleName}</h3>
      </div>

      {/* Image Container */}
      <div className="flex-grow relative aspect-[3/4] bg-zinc-950 w-full">
        {item.loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-indigo-500" />
            <span className="text-xs animate-pulse">Generating...</span>
          </div>
        ) : item.error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 p-4 text-center">
            <AlertCircle className="w-8 h-8 mb-2" />
            <span className="text-xs">{item.error}</span>
          </div>
        ) : item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.styleName} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900" />
        )}
      </div>

      {/* Footer / Actions */}
      {!item.loading && !item.error && item.imageUrl && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
          <button 
            onClick={handleDownload}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
            title="Download"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};