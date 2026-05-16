import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/main/buttons";
import Link from "next/link";
import { Reveal } from "./Reveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const trustElements = [
  "Free tier for small communities",
  "No credit card to start",
  "Migration assistance available",
  "Built and hosted in the EU",
];

export default function FinalCTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-900 p-10 text-center text-white sm:p-16">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Bring your community onto a single platform.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-slate-300">
              Setup takes an afternoon, and migration is supported. Your team
              recovers the hours previously lost to spreadsheets and
              tab-switching.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`${APP_URL}/signup`}>
                <Button
                  size="lg"
                  className="h-14 bg-white px-8 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Start free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 border-white/15 bg-transparent px-8 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Talk to the team
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustElements.map((element) => (
                <div
                  key={element}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <Check
                    className="h-4 w-4 text-emerald-400"
                    weight="bold"
                  />
                  {element}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
