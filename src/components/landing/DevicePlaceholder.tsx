import Image from "next/image";
import { cn } from "@/lib/utils";

type DeviceVariant = "desktop" | "mobile" | "dual";

type DevicePlaceholderProps = {
  variant?: DeviceVariant;
  label?: string;
  className?: string;
  tone?: "light" | "dark";
  /** Desktop screenshot. When omitted, the labelled placeholder renders. */
  src?: string;
  /** Phone screenshot. Falls back to `src` for the dual variant inset. */
  srcMobile?: string;
  /** Which side of the desktop frame the dual-variant phone overlaps. */
  phoneSide?: "left" | "right";
  /** Desktop anchor for the dual-variant phone overlap. */
  phoneAnchor?: "top" | "bottom";
};

const phonePosition = {
  "right-bottom":
    "-bottom-8 right-4 w-32 sm:-right-4 sm:bottom-6 sm:w-44 lg:-right-10 lg:w-40",
  "right-top":
    "-bottom-8 right-4 w-32 sm:-right-4 sm:bottom-6 sm:w-44 lg:top-6 lg:bottom-auto lg:-right-10 lg:w-44",
  "left-bottom":
    "-bottom-8 left-4 w-32 sm:-left-4 sm:bottom-6 sm:w-44 lg:-left-10 lg:w-40",
  "left-top":
    "-bottom-8 left-4 w-32 sm:-left-4 sm:bottom-6 sm:w-44 lg:top-6 lg:bottom-auto lg:-left-10 lg:w-44",
} as const;

export function DevicePlaceholder({
  variant = "desktop",
  label = "Product preview",
  className,
  tone = "light",
  src,
  srcMobile,
  phoneSide = "right",
  phoneAnchor = "bottom",
}: DevicePlaceholderProps) {
  if (variant === "dual") {
    return (
      <div className={cn("relative", className)}>
        <DesktopFrame label={label} tone={tone} src={src} />
        <div
          className={cn(
            "absolute",
            phonePosition[`${phoneSide}-${phoneAnchor}`],
          )}
        >
          <MobileFrame label={label} compact src={srcMobile ?? src} />
        </div>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={cn("mx-auto w-full max-w-[280px]", className)}>
        <MobileFrame label={label} src={srcMobile ?? src} />
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <DesktopFrame label={label} tone={tone} src={src} />
    </div>
  );
}

function DesktopFrame({
  label,
  tone,
  src,
}: {
  label: string;
  tone: "light" | "dark";
  src?: string;
}) {
  const surface =
    tone === "dark"
      ? "border-white/10 bg-slate-950 shadow-2xl shadow-black/40"
      : "border-slate-200 bg-white shadow-xl shadow-slate-900/10";
  const chrome =
    tone === "dark"
      ? "border-white/5 bg-white/[0.03] text-slate-500"
      : "border-slate-100 bg-slate-50 text-slate-500";
  const screen =
    tone === "dark" ? "bg-slate-900 text-slate-500" : "bg-slate-50 text-slate-400";
  const urlBg =
    tone === "dark"
      ? "border-white/10 bg-white/[0.05] text-slate-400"
      : "border-slate-200 bg-white text-slate-500";

  return (
    <div className={cn("overflow-hidden rounded-[20px] border", surface)}>
      <div className={cn("flex items-center gap-2 border-b px-3 py-1.5", chrome)}>
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-400/80" />
          <div className="h-2 w-2 rounded-full bg-amber-400/80" />
          <div className="h-2 w-2 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-2 flex-1">
          <div
            className={cn(
              "mx-auto max-w-xs rounded border px-2.5 py-0.5 text-center text-[11px]",
              urlBg,
            )}
          >
            app.yeahapp.co
          </div>
        </div>
      </div>
      <div className={cn("relative aspect-[16/10]", screen)}>
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 1024px) 90vw, 600px"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xs font-medium tracking-wide uppercase">
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileFrame({
  label,
  compact = false,
  src,
}: {
  label: string;
  compact?: boolean;
  src?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">
      <div className="relative aspect-[1170/2532] overflow-hidden rounded-[1.6rem] bg-slate-50">
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes={compact ? "208px" : "280px"}
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-slate-400">
            <span
              className={cn(
                "px-3 text-center font-medium tracking-wide uppercase",
                compact ? "text-[10px]" : "text-xs",
              )}
            >
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
