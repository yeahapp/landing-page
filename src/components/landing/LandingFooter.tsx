import Link from "next/link";
import {
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/core/Logo";
import { APP_NAME } from "@/config/config";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      {
        label: "Communities",
        href: `${APP_URL}/discover/communities`,
        external: true,
      },
      {
        label: "Events",
        href: `${APP_URL}/discover/events`,
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Blog", href: "https://blog.yeahapp.co", external: true },
      { label: "Status", href: "/status" },
    ],
  },
];

const socialLinks = [
  {
    icon: <TwitterLogo className="h-5 w-5" weight="fill" />,
    href: "https://twitter.com/yeahapp",
    label: "Twitter",
  },
  {
    icon: <LinkedinLogo className="h-5 w-5" weight="fill" />,
    href: "https://linkedin.com/company/yeahapp",
    label: "LinkedIn",
  },
  {
    icon: <InstagramLogo className="h-5 w-5" weight="fill" />,
    href: "https://instagram.com/yeahapp",
    label: "Instagram",
  },
];

export default function LandingFooter() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Logo imageClassName="h-12 w-12 rounded-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              The community operating system for civil society organisations.
              One workspace for events, members, and operations — designed
              and engineered in the EU.
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/50 text-slate-600 transition-colors duration-200 hover:bg-slate-900 hover:text-white"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-slate-900 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
