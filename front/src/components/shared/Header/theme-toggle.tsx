"use client";

import { useTheme } from "next-themes";
import { IconBtn } from "@/components/shared/IconButton";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const commonClasses = clsx(
    "w-4.5 h-4.5",
    "hover:cursor-pointer hover:scale-110 transition-all duration-300"
  );

  return (
    <IconBtn
      color="primary"
      size="small"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className={`text-orange-300 ${commonClasses}`} />
      ) : (
        <MoonIcon className={`text-blue-200 ${commonClasses}`} />
      )}
    </IconBtn>
  );
};
