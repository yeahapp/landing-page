"use client";

import { Button } from "@/components/main/buttons";
import { Card } from "@/components/main/cards";
import { useState } from "react";
import { toast } from "sonner";
import { EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <EnvelopeSimple className="h-8 w-8 text-slate-700" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Contact sales
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Questions about the platform, enterprise terms, or migration
              support? Send a note and the team will reply within one business
              day.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:120ms] mt-12">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
                    placeholder="Tell us about your community and what you're looking to achieve..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  <PaperPlaneTilt className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-sm text-slate-500">
                  We typically respond within 24 hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
