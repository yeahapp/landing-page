"use client";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/core/Logo";
import { useKitzeUI } from "@/components/KitzeUIContext";
import { Button } from "@/components/main/buttons";
import Link from "next/link";
import { SignIn, X, CaretDown } from "@phosphor-icons/react";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { cn } from "@/lib/utils";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

type NavItem =
  | {
      kind: "link";
      label: string;
      href: string;
      external?: boolean;
      newTab?: boolean;
    }
  | { kind: "group"; label: string; items: NavLink[] };

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  newTab?: boolean;
};

const PLATFORM_ITEMS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Blog",
    href: "https://blog.yeahapp.co",
    external: true,
    newTab: true,
  },
];

const NAV: NavItem[] = [
  { kind: "group", label: "Platform", items: PLATFORM_ITEMS },
  {
    kind: "link",
    label: "Communities",
    href: `${APP_URL}/discover/communities`,
    external: true,
  },
  {
    kind: "link",
    label: "Events",
    href: `${APP_URL}/discover/events`,
    external: true,
  },
];

export default function LandingPageHeader() {
  const { isMobile } = useKitzeUI();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrolledPast(40);

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-[max(env(safe-area-inset-top),_0.75rem)]">
      <div className="relative w-full max-w-5xl">
        {/* Island bar */}
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-2xl border px-4 transition-all duration-300",
            isScrolled
              ? "border-black/8 bg-white/90 shadow-xl shadow-black/8 backdrop-blur-xl"
              : "border-black/5 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-lg",
          )}
        >
          {/* Left */}
          <div className="flex flex-1 items-center">
            {isMobile ? (
              <a href={`${APP_URL}/signin`} aria-label="Sign in">
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <SignIn className="h-5 w-5 text-slate-600" />
                </Button>
              </a>
            ) : (
              <Logo href="/" variant="wordmark" imageClassName="h-7 w-auto" />
            )}
          </div>

          {/* Center */}
          <div className="flex flex-1 items-center justify-center">
            {isMobile ? (
              <Logo href="/" variant="wordmark" imageClassName="h-7 w-auto" />
            ) : (
              <nav className="flex items-center gap-7">
                {NAV.map((item) =>
                  item.kind === "link" ? (
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        {...(item.newTab
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    )
                  ) : (
                    <DesktopGroup key={item.label} item={item} />
                  ),
                )}
              </nav>
            )}
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end">
            {isMobile ? (
              <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 transition-transform duration-150" />
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="transition-transform duration-150"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="9" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <a href={`${APP_URL}/signin`}>
                  <Button
                    variant="ghost"
                    leftIcon={<SignIn className="h-4 w-4" />}
                  >
                    Login
                  </Button>
                </a>
                <a href={`${APP_URL}/signup`}>
                  <Button>Start for free</Button>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile dropdown card */}
        {mobileMenuOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-200 absolute top-full right-0 left-0 mt-2 rounded-2xl border border-black/5 bg-white/90 p-2 shadow-xl shadow-black/8 backdrop-blur-xl">
            {NAV.map((item) =>
              item.kind === "link" ? (
                <NavRow
                  key={item.href}
                  href={item.href}
                  external={item.external}
                  newTab={item.newTab}
                  onNavigate={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavRow>
              ) : (
                <MobileGroup
                  key={item.label}
                  item={item}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              ),
            )}

            <div className="mt-2 border-t border-slate-100 pt-2">
              <NavRow
                href={`${APP_URL}/signin`}
                external
                onNavigate={() => setMobileMenuOpen(false)}
              >
                Sign in
              </NavRow>
              <a
                href={`${APP_URL}/signup`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 block rounded-xl bg-[#6f8eff] px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#5a79e8]"
              >
                Start free
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopGroup({
  item,
}: {
  item: { label: string; items: NavLink[] };
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-slate-900"
      >
        {item.label}
        <CaretDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-150",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="animate-in fade-in slide-in-from-top-1 duration-200 absolute top-full left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-black/5 bg-white/90 p-2 shadow-xl shadow-black/8 backdrop-blur-xl"
        >
          {item.items.map((sub) => (
            <NavRow
              key={sub.href}
              href={sub.href}
              external={sub.external}
              newTab={sub.newTab}
              onNavigate={() => setOpen(false)}
            >
              {sub.label}
            </NavRow>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  item,
  onNavigate,
}: {
  item: { label: string; items: NavLink[] };
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-100 active:bg-slate-200"
      >
        {item.label}
        <CaretDown
          className={cn(
            "h-3.5 w-3.5 text-slate-400 transition-transform duration-150",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="ml-3 border-l border-slate-100 pl-2">
          {item.items.map((sub) => (
            <NavRow
              key={sub.href}
              href={sub.href}
              external={sub.external}
              newTab={sub.newTab}
              onNavigate={onNavigate}
            >
              {sub.label}
            </NavRow>
          ))}
        </div>
      )}
    </div>
  );
}

function NavRow({
  href,
  external,
  newTab,
  onNavigate,
  children,
}: {
  href: string;
  external?: boolean;
  newTab?: boolean;
  onNavigate?: () => void;
  children: React.ReactNode;
}) {
  const className =
    "block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-100 active:bg-slate-200";
  if (external) {
    return (
      <a
        href={href}
        {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
        onClick={onNavigate}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {children}
    </Link>
  );
}
