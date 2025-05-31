"use client";

import clsx from "clsx";
import { Button } from "@/components/shared/Button";

type DialogProps = {
  title: string;
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
};

export function Dialog({
  title,
  content,
  isVisible = false,
  onClose,
}: DialogProps) {
  console.log(isVisible);
  if (!isVisible) return;

  function handleClose() {
    onClose();
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
        "transition-all duration-500 ease-out",
        `${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`
      )}
      role="dialog"
      aria-modal={true}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onClick={handleClose}
    >
      <div
        className={clsx(
          "bg-slate-100 p-6 rounded-lg w-2xl mx-6",
          "flex flex-col gap-6 shadow-lg shadow-black/30",
          "transition-all duration-500 ease-out",
          `${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className="text-lg font-bold text-center mb-10">
          {title}
        </h2>
        <div id="dialog-description">{content}</div>
        <div className="flex justify-end">
          <Button variant="primary" onClick={handleClose}>
            Entendi
          </Button>
        </div>
      </div>
    </div>
  );
}
