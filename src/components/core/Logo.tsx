import Link from "next/link";
import { APP_NAME } from "@/config/config";
import Image from "next/image";

type LogoVariant = "icon" | "wordmark";

const VARIANTS: Record<
  LogoVariant,
  { src: string; width: number; height: number; defaultClass: string }
> = {
  icon: {
    src: "/logo-icon.png",
    width: 128,
    height: 128,
    defaultClass: "h-24 w-24 rounded-lg",
  },
  wordmark: {
    src: "/logo-wordmark.png",
    width: 750,
    height: 180,
    defaultClass: "h-8 w-auto",
  },
};

export function Logo({
  href = "/",
  imageClassName,
  variant = "icon",
}: {
  href?: string;
  imageClassName?: string;
  variant?: LogoVariant;
}) {
  const config = VARIANTS[variant];
  return (
    <Link href={href} className="inline-block shrink-0">
      <div className="flex items-center justify-center">
        <Image
          src={config.src}
          alt={`${APP_NAME} Logo`}
          width={config.width}
          height={config.height}
          className={imageClassName ?? config.defaultClass}
          priority
        />
      </div>
    </Link>
  );
}
