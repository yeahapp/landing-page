import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/main/buttons";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-[calc(env(safe-area-inset-top,_0px)_+_7rem)] pb-20 sm:px-6 sm:pt-[calc(env(safe-area-inset-top,_0px)_+_9rem)] lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-[#6f8eff]" weight="fill" />
            Engineered in the EU
          </span>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-[5.5rem] lg:leading-[1.05]">
            The ultimate
            <br />
            <span className="text-[#6f8eff]">communityOS.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
            One workspace for the people, events, and operations behind your
            organisation — built for civil society organisations that need to
            run online and offline as one continuous experience.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 [animation-delay:150ms] mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`${APP_URL}/signup`}>
            <Button
              size="lg"
              className="h-14 bg-slate-900 px-8 text-base font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="h-14 border-slate-200 px-8 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Book a demo
            </Button>
          </Link>
        </div>

        <p className="animate-in fade-in duration-700 [animation-delay:250ms] mt-4 text-center text-sm text-slate-500">
          Free tier available. No credit card required to start.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:350ms] relative mx-auto mt-20 max-w-6xl">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto max-w-md rounded-md border border-slate-200 bg-white px-4 py-1.5 text-center text-sm text-slate-500">
                  app.yeahapp.co/dashboard
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium tracking-wide text-slate-400 uppercase">
                  Product preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
