"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "yeah-cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = "accepted" | "declined";

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  const choose = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {GA_ID && consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {ready && consent === null && GA_ID && (
        <div className="animate-in fade-in slide-in-from-bottom-3 fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),_0.75rem)] duration-300">
          <div className="flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm leading-relaxed text-slate-300">
              We use essential cookies to run this site and, with your consent,
              Google Analytics to understand how it is used. See our{" "}
              <Link
                href="/privacy"
                className="font-medium text-white underline underline-offset-2 hover:text-slate-200"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
