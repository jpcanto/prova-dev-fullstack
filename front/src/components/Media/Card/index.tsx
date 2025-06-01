"use client";

import React from "react";
import clsx from "clsx";
import { Play } from "lucide-react";

interface MediaCardProps {
  imageUrl: string | null;
  onPlayClick?: () => void;
}

function MediaCard({ imageUrl, onPlayClick }: MediaCardProps) {
  return (
    <div
      className={clsx(
        "group relative w-48 h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer",
        "transform transition-transform duration-300 ease-in-out",
        "bg-gray-800"
      )}
    >
      {imageUrl ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt="Capa da Mídia"
          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-50"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-sm text-white text-center p-2">
          Imagem não disponível
        </div>
      )}

      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300 ease-in-out"
        )}
      >
        <button
          onClick={onPlayClick}
          className={clsx(
            "w-12 h-12 rounded-full bg-opacity-30 backdrop-blur-sm border-2 border-white cursor-pointer",
            "flex items-center justify-center",
            "hover:bg-opacity-50 hover:scale-110 transition-all duration-300"
          )}
          aria-label="Reproduzir"
        >
          <Play className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default MediaCard;
