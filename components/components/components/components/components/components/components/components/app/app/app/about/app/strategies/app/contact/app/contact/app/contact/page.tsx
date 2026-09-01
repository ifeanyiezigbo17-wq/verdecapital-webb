import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Verde Capital's institutional relationship team.",
};

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: [
      `${SITE.address.street}`,
      `${SITE.address.city} — ${SITE.address.zip}`,
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [SITE.phone, "Mon–Fri, 9am–6pm (BRT)"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [SITE.email, "We reply within 1 business day"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday", "09:00 – 18:00 (BRT)"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="bg-forest-dark pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <MessageSquare className="h-3.5 w-3.5" />
              Contact
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s start a conversation.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/80">
              Whether you&apos;re an institutional allocator or an individual
              investor, our relationship team is ready to help you find the
              right strategy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FORM + DETAILS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form */}
          <Reveal from="left" className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-charcoal">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and our team will get back to you
                within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal from="right" className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-6">
              {CONTACT_DETAILS.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-mist text-forest">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="mt-0.5 text-sm text-slate-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
