"use client";

import Image from "next/image";
import { ChevronDown, Bell } from "lucide-react";
import clsx from "clsx";

type HeaderAvatarProps = {
  name: string;
  image: string;
};

export function HeaderAvatar({ name, image }: HeaderAvatarProps) {
  return (
    <div className="flex items-center gap-4">
      <Bell
        className={clsx(
          "w-4.5 h-4.5 text-white mr-2",
          "hover:cursor-pointer hover:scale-110 transition-all duration-300"
        )}
      />
      <div className="inline-block h-[25px] w-0.25 bg-white mr-2"></div>
      <div
        className={clsx(
          "flex items-center hover:cursor-pointer gap-4 rounded-sm",
          "hover:bg-primary-dark transition-all duration-300"
        )}
      >
        <Image
          className="w-auto h-auto rounded-sm"
          src={image}
          width={32}
          height={32}
          alt="Imagem de perfil"
        />
        <div className="flex items-center gap-2 justify-between font-medium w-[180px] text-white">
          <div>{name}</div>
          <ChevronDown className="w-4 h-4 mr-2" />
        </div>
      </div>
    </div>
  );
}
