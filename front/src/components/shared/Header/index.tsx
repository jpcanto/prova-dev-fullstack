"use client";

import { ThemeToggle } from "./theme-toggle";
import { HeaderAvatar } from "./Avatar";
import { HEADER_HEIGHT } from "@/lib/constants";
import { useFilter } from "@/contexts/filter-context";
import { Button } from "../Button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const { setFilter, filter } = useFilter();

  console.log(filter);

  const headerFilters: { name: string; value: "movies" | "series" }[] = [
    {
      name: "Movies",
      value: "movies",
    },
    {
      name: "Series",
      value: "series",
    },
  ];

  return (
    <header
      className={`bg-zinc-900 fixed top-0 left-0 right-0 z-50 flex justify-between w-screen px-4 items-center`}
      style={{
        height: `${HEADER_HEIGHT}px`,
      }}
    >
      <Link href="/" className="group">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={80}
          className="w-auto h-auto group-hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="flex items-center gap-4">
        {headerFilters.map((filter) => {
          return (
            <Button
              key={filter.name}
              variant="text"
              size="small"
              onClick={() => setFilter(filter.value)}
            >
              <span className="text-white group-hover:text-zinc-400 transition-all duration-300 capitalize">
                {filter.name}
              </span>
            </Button>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <HeaderAvatar name="John Doe" image="/images/avatar.png" />
      </div>
    </header>
  );
}
