"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type FilterType = "home" | "movies" | "series";

interface FilterContextType {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({
  children,
}: {
  children: ReactNode;
}): React.ReactNode {
  const [filter, setFilter] = useState<FilterType>("home");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter(): FilterContextType {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter deve ser usado dentro de um FilterProvider");
  }
  return context;
}
