import { Button } from "@/components/shared/Button";
import clsx from "clsx";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div
      className={clsx(
        "min-h-screen min-w-screen bg-black",
        "flex flex-col items-center justify-center"
      )}
    >
      <Image src="/images/logo.png" alt="Logo" width={200} height={30} className="mb-2" />
      <Button variant="secondary" size="small" loading={false}>
        ENTRAR
      </Button>
    </div>
  );
}
