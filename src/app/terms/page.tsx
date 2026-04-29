import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | YeahApp",
  description: "Terms of Service for YeahApp.",
};

export default function TermsPage() {
  return (
    <div className="container max-w-4xl pt-28 pb-16 text-center">
      <h1 className="font-heading mb-3 text-5xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
        Terms of Service
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-slate-600">
        Coming soon.
      </p>
    </div>
  );
}
