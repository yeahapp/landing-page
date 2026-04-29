import { cn } from "@/lib/utils";

type DeviceVariant = "desktop" | "mobile" | "dual";

type DevicePlaceholderProps = {
  variant?: DeviceVariant;
  label?: string;
  className?: string;
  tone?: "light" | "dark";
};

export function DevicePlaceholder({
  variant = "desktop",
  label = "Product preview",
  className,
  tone = "light",
}: DevicePlaceholderProps) {
  if (variant === "dual") {
    return (
      <div className={cn("relative", className)}>
        <DesktopFrame label={label} tone={tone} />
        <div className="absolute -bottom-8 right-4 w-32 sm:-right-4 sm:bottom-6 sm:w-44 lg:-right-10 lg:w-52">
          <MobileFrame label={label} tone={tone} compact />
        </div>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={cn("mx-auto w-full max-w-[280px]", className)}>
        <MobileFrame label={label} tone={tone} />
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <DesktopFrame label={label} tone={tone} />
    </div>
  );
}

function DesktopFrame({
  label,
  tone,
}: {
  label: string;
  tone: "light" | "dark";
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
      <div className={cn("flex items-center gap-2 border-b px-4 py-3", chrome)}>
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-3 flex-1">
          <div
            className={cn(
              "mx-auto max-w-xs rounded-md border px-3 py-1 text-center text-xs",
              urlBg,
            )}
          >
            app.yeahapp.co
          </div>
        </div>
      </div>
      <div className={cn("flex aspect-[16/10] items-center justify-center", screen)}>
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </div>
  );
}

function MobileFrame({
  label,
  tone,
  compact = false,
}: {
  label: string;
  tone: "light" | "dark";
  compact?: boolean;
}) {
  const surface =
    tone === "dark"
      ? "border-white/10 bg-slate-950 shadow-2xl shadow-black/40"
      : "border-slate-200 bg-slate-900 shadow-xl shadow-slate-900/15";
  const screen =
    tone === "dark" ? "bg-slate-900 text-slate-500" : "bg-slate-50 text-slate-400";

  return (
    <div className={cn("rounded-[28px] border p-2", surface)}>
      <div
        className={cn(
          "flex aspect-[9/19] flex-col items-center justify-center rounded-[20px]",
          screen,
        )}
      >
        <div className="mb-2 h-1 w-10 rounded-full bg-current opacity-30" />
        <span
          className={cn(
            "px-3 text-center font-medium tracking-wide uppercase",
            compact ? "text-[10px]" : "text-xs",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
