"use client";

import React from "react";
import clsx from "clsx";

interface FeaturedMediaProps {
  imageUrl: string | null;
  title: string;
  description: string;
  watchButtonLabel: string;
  onWatchClick: () => void;
  addListButtonLabel: string;
  onAddListClick: () => void;
}

export function FeaturedMedia({
  imageUrl,
  title,
  description,
  watchButtonLabel,
  onWatchClick,
  addListButtonLabel,
  onAddListClick,
}: FeaturedMediaProps): React.ReactNode {
  const originalImageUrl = imageUrl
    ? `https://image.tmdb.org/t/p/original${imageUrl}`
    : null;

  return (
    <div className={clsx("relative w-screen h-screen overflow-hidden")}>
      {originalImageUrl ? (
        <img
          src={originalImageUrl}
          alt={title || "Featured Media"}
          className={clsx("absolute inset-0 w-full h-full object-cover")}
        />
      ) : (
        <div
          className={clsx(
            "absolute inset-0 w-full h-full bg-gray-900",
            "flex items-center justify-center text-white text-center p-4"
          )}
        >
          Imagem não disponível
        </div>
      )}

      {/* Overlay */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent",
          "flex flex-col justify-end p-8 text-white"
        )}
      >
        {/* Content Area */}
        <div className={clsx("max-w-xl mb-8")}>
          <h1 className={clsx("text-4xl font-bold mb-4")}>{title}</h1>
          <p className={clsx("text-lg")}>{description}</p>
        </div>

        {/* Buttons */}
        <div className={clsx("flex space-x-4")}>
          <button
            onClick={onWatchClick}
            className={clsx(
              "px-6 py-3 rounded-lg bg-white text-black font-semibold",
              "hover:bg-gray-200 transition-colors"
            )}
          >
            {watchButtonLabel}
          </button>
          <button
            onClick={onAddListClick}
            className={clsx(
              "px-6 py-3 rounded-lg bg-gray-700 bg-opacity-75 text-white font-semibold",
              "hover:bg-gray-600 transition-colors"
            )}
          >
            {addListButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
