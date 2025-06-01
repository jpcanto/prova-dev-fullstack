"use client";

import React from "react";
import clsx from "clsx";
import { MediaGateway, Media } from "@/lib/api/media";
import MediaCard from "@/components/Media/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

let mediaData: Media[] | null = null;
let mediaPromise: Promise<Media[]> | null = null;

function fetchMediaResource(): Media[] {
  if (mediaData !== null) {
    return mediaData;
  }
  if (mediaPromise === null) {
    const mediaGateway = new MediaGateway();
    mediaPromise = mediaGateway.fetchAllMedia();
    mediaPromise.then((data) => {
      mediaData = data;
    });
  }
  throw mediaPromise;
}

const lines = [
  {
    label: "Popular Movies",
    content: "popular-movies",
  },
  {
    label: "Trending TV Shows",
    content: "tv-shows",
  },
];

export default function MediaListContent() {
  const media = fetchMediaResource();

  return (
    <main className="container mx-auto px-4 py-8">
      {media.length === 0 ? (
        <h1 className={clsx("text-center text-gray-500", "dark:text-gray-500")}>
          Nenhum vídeo encontrado.
        </h1>
      ) : (
        lines.length &&
        lines.map((line: { label: string; content: string }) => (
          <section key={line.content} className="flex flex-col mb-25">
            <div className="flex items-center mb-12">
              <p
                className={clsx(
                  "dark:text-white text-zinc-800 text-2xl font-bold min-w-[160px] mr-24",
                  "whitespace-nowrap"
                )}
              >
                {line.label}
              </p>
              <div className="h-[1px] w-full bg-zinc-800"></div>
            </div>
            <Carousel>
              <CarouselContent className="-ml-1">
                {media.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <MediaCard
                      imageUrl={item.poster_path}
                      onPlayClick={() =>
                        console.log("Play clicked for:", item.title)
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        ))
      )}
    </main>
  );
}
