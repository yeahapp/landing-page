import { type Metadata } from "next";
import { APP_NAME } from "@/config/config";
import PricingPlans from "@/components/pricing/PricingPlans";
import { Button } from "@/components/main/buttons";
import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export const metadata: Metadata = {
  title: `Pricing - ${APP_NAME}`,
  description:
    "Pay for results, not per seat. Choose the tier that fits your community.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="text-lg leading-8 text-gray-600">
          Pay for results, not per seat. Fixed annual fee plus a small
          transaction fee on revenue flowing through the platform.
        </p>
      </div>

      {/* Pricing Cards */}
      <div>
        <PricingPlans />
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-12">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Can I upgrade later?</h3>
            <p className="pt-2 text-gray-600">
              Yes, you can upgrade to a higher plan at any time. Your remaining
              balance will be prorated towards the new plan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Do you offer refunds?</h3>
            <p className="pt-2 text-gray-600">
              We offer a 14-day money-back guarantee for all plans. If you're
              not satisfied, just let us know.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              What are transaction fees?
            </h3>
            <p className="pt-2 text-gray-600">
              Transaction fees are a small percentage applied to ticket sales and
              membership payments processed through the platform. Higher-tier
              plans have lower transaction fees.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              What happens if I exceed my member limit?
            </h3>
            <p className="pt-2 text-gray-600">
              Existing members will not be removed, but new members won't be
              able to join until you upgrade or free up space. You can upgrade at
              any time to increase your limit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Can I use the platform for free?
            </h3>
            <p className="pt-2 text-gray-600">
              Yes! You can create one community with up to 20 members and basic
              event management for free. Upgrade when you need more features or
              capacity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Do you offer enterprise pricing?
            </h3>
            <p className="pt-2 text-gray-600">
              Yes, for large organizations with multiple chapters or
              sub-organizations, we offer custom enterprise plans with dedicated
              infrastructure, white-labeling, and reduced transaction fees.
              Contact us for details.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-12 rounded-2xl bg-gray-50 p-12">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Trusted by community leaders
          </h2>
          <p className="text-gray-600">
            See how organizations are streamlining their community management.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <blockquote className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-600">
              "We replaced five different tools with YeahApp. Our admin time
              dropped by 70% and member engagement is way up."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm text-gray-500">Community Manager, NGO</p>
              </div>
            </div>
          </blockquote>
          <blockquote className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-600">
              "The integrated ticketing and membership billing saved us hours
              every week. Everything is in one place now."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-medium">Sarah Miller</p>
                <p className="text-sm text-gray-500">
                  Event Organizer, Accelerator
                </p>
              </div>
            </div>
          </blockquote>
          <blockquote className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-600">
              "Being able to see attendance, payments, and member data in one
              dashboard changed how we operate."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-gray-500">
                  Director, Professional Association
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="text-gray-600">
            Start free with one community — upgrade when you grow.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`${APP_URL}/signup`}>
            <Button color="violet-600" size="lg">
              Start for free
            </Button>
          </a>
          <Link href="/contact">
            <Button size="lg">Contact sales</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
