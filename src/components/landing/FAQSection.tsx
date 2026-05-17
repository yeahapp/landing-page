"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const faqItems = [
  {
    question: "How does YeahApp differ from Eventbrite, Luma, or Circle?",
    answer:
      "Eventbrite and Luma optimise a single transaction — selling a ticket. Circle and Mighty Networks optimise a single behaviour — content consumption. We take the SAP approach: model and optimise the entire business process, end to end. Members, events, payments, communications, and reporting connect as one system, because that is how community operations actually run.",
  },
  {
    question: "Can we migrate existing member data and event history?",
    answer:
      "Yes — and the depth of migration support depends on the plan. Standard plans receive a self-serve CSV importer with field mapping. Pro plans include guided migration with our team. Enterprise plans include full data engineering support, including legacy system extraction and historical reconciliation.",
  },
  {
    question: "Where does our community's data live?",
    answer:
      "By default, on YeahApp's managed infrastructure inside the EU, encrypted in transit and at rest, with GDPR-aligned handling. Pro plans add configurable retention. Enterprise plans include the option to host the database on your own infrastructure for full data sovereignty.",
  },
  {
    question: "How is payment processing handled?",
    answer:
      "Stripe powers ticketing and membership transactions. Each community connects its own Stripe account, retains direct ownership of funds, and pays a configurable platform fee per transaction. We never touch the funds in flight.",
  },
  {
    question: "Is the platform suitable for federated organisations and chapters?",
    answer:
      "Yes. The community model supports multiple chapters, sub-organisations, and shared parent governance. Roles and permissions cascade appropriately, and reporting rolls up cleanly across federated structures.",
  },
  {
    question: "Do you offer onboarding support?",
    answer:
      "Yes. Every new community receives onboarding assistance, including a setup walkthrough and direct access to the team during the first thirty days. Higher plans include dedicated onboarding managers.",
  },
  {
    question: "Why not use an ERP system like SAP or Odoo?",
    answer:
      "Platforms like SAP and Odoo are built around business and finance processes, and they demand significant configuration and technical resource to deploy. YeahApp models the workflows civil society organisations actually run — membership, events, volunteer roles, chapters, and dues — out of the box, with the same process discipline and none of the implementation overhead.",
  },
  {
    question: "Why one platform instead of separate best-of-breed tools?",
    answer:
      "Most community teams run an event tool, a CRM, a forms product, a billing system, and a chat platform in parallel. None of them connect, and a spreadsheet becomes the de facto source of truth. YeahApp consolidates the stack into a single record.",
  },
  {
    question: "Is YeahApp only an events application?",
    answer:
      "No. YeahApp is the first product in a planned ecosystem of management software for civil society organisations. Finance, governance, and reporting modules are on the roadmap, designed to interoperate rather than be sold as upsells.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  toggleOpen,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white transition-all duration-200",
        isOpen
          ? "border-slate-300 shadow-md"
          : "border-slate-200 hover:border-slate-300",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-6"
        >
          <span className="text-sm font-semibold text-slate-900 sm:text-base">
            {question}
          </span>
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 sm:h-8 sm:w-8",
              isOpen && "rotate-180",
            )}
          >
            <CaretDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
        </button>
      </h3>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-4 pr-6 pb-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pr-8 sm:pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white px-4 py-6 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                FAQ
              </span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Questions, answered directly.
              </h2>
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-1 sm:mt-10 sm:gap-3">
              {faqItems.map((item, index) => (
                <Reveal key={index} delay={index * 40}>
                  <FAQItem
                    question={item.question}
                    answer={item.answer}
                    isOpen={index === openIndex}
                    toggleOpen={() =>
                      setOpenIndex(index === openIndex ? -1 : index)
                    }
                  />
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-500 sm:mt-10">
              Still have questions?{" "}
              <a
                href="mailto:hello@yeahapp.co"
                className="font-semibold text-[#6f8eff] hover:underline"
              >
                hello@yeahapp.co
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
