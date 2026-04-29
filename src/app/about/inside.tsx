"use client";

import {
  ArrowRight,
  CheckCircle,
  Handshake,
  Lightbulb,
  Users,
} from "@phosphor-icons/react";
import { createAvatar } from "@dicebear/core";
import { personas } from "@dicebear/collection";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const team = [
  { seed: "jane", bg: ["b6e3f4"], name: "Jane Doe", role: "Founder & CEO" },
  { seed: "john", bg: ["c0aede"], name: "John Smith", role: "CTO" },
  { seed: "sarah", bg: ["ffdfbf"], name: "Sarah Johnson", role: "Lead Designer" },
] as const;

const values = [
  {
    title: "Operational clarity",
    description:
      "Communities run on workflows, not aesthetics. Every decision favours legibility for the operator over novelty for its own sake.",
    icon: CheckCircle,
  },
  {
    title: "Transparent terms",
    description:
      "Pricing, data ownership, and platform fees are stated up front and unchanged in the small print. Trust compounds; ambiguity does not.",
    icon: Handshake,
  },
  {
    title: "Built from practice",
    description:
      "Features ship from real conversations with community managers and treasurers — not from feature parity charts.",
    icon: Lightbulb,
  },
  {
    title: "Member-first",
    description:
      "The directory belongs to the community. Our role is to remove friction, not to extract attention from members or organisers.",
    icon: Users,
  },
];

export default function AboutPageContent() {
  const avatars = team.map((m) =>
    createAvatar(personas, { seed: m.seed, backgroundColor: [...m.bg] }).toDataUri(),
  );

  return (
    <div className="container max-w-4xl pt-28 pb-16">
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 mb-16 text-center">
        <h1 className="font-heading mb-3 text-5xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
          Our story
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Building the operating system that community teams wish they had
          while running their own organisations.
        </p>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:100ms] mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatars[index]}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {member.name}
            </h3>
            <p className="text-slate-600">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:150ms] mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="font-heading mb-3 text-3xl font-semibold tracking-tight text-slate-900">
          Our mission
        </h2>
        <p className="mb-4 text-slate-600">
          We believe the tools that run mission-driven organisations should be
          held to a higher standard — clearer than enterprise software, more
          trustworthy than consumer apps, and priced for budgets that depend
          on volunteer hours.
        </p>
        <p className="text-slate-600">
          YeahApp is the workspace we wanted while running our own community
          chapters: a single source of truth for members, events, and money,
          designed so the operational work fades into the background and the
          mission moves forward.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="font-heading animate-in fade-in slide-in-from-bottom-2 duration-700 mb-6 text-3xl font-semibold tracking-tight text-slate-900">
          Our values
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-2 duration-700 rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <value.icon className="h-6 w-6 text-[#6f8eff]" weight="duotone" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-in fade-in duration-700 [animation-delay:200ms] rounded-2xl border border-slate-200 bg-slate-900 p-8 text-center">
        <h2 className="font-heading mb-3 text-3xl font-semibold tracking-tight text-white">
          Ready to get started?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-slate-300">
          Bring events, members, and payments onto a single platform purpose-built
          for community teams.
        </p>
        <a
          href={`${APP_URL}/signup`}
          className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-slate-100"
        >
          Start free
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
