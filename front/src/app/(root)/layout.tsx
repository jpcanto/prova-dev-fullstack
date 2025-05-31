"use client";

import { Header } from "@/components/shared/Header";
import { FilterProvider } from "@/contexts/filter-context";
import { HEADER_HEIGHT } from "@/lib/constants";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FilterProvider>
        <Header />
        <div
          style={{
            marginTop: HEADER_HEIGHT,
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          }}
          className={clsx("p-4 bg-transparent text-black overflow-hidden")}
        >
          {children}
        </div>
      </FilterProvider>
    </>
  );
}
