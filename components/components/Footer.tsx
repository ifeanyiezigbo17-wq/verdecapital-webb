import Link from "next/link";
import { Leaf, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Investment Strategies", href: "/strategies" },
      { label: "Contact", href: "/contact" },
      { label: "Get in Touch", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Legal Disclaimer", href: "/contact" },
      { label: "Compliance (CVM/ANBIMA)", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-emerald-50/80">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + blurb */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Verde<span className="text-emerald-300">Capital</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              A premier Brazilian asset management firm focused on capital
              preservation and disciplined, long-term growth. Registered with
              the CVM and aligned with ANBIMA best practices.
            </p>

            {/* Contact details */}
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{SITE.address.street}, {SITE.address.city} — {SITE.address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{SITE.email}</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs sm:flex-row lg:px-8">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Regulated by CVM • ANBIMA
          </p>
        </div>
      </div>
    </footer>
  );
}
