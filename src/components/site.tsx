import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { Linkedin } from "lucide-react";
import { Newsletter } from "@/components/newsletter";

const LINKEDIN_URL = "https://www.linkedin.com/in/akua-gyekye/";

const links = [
  { to: "/", label: "About Akua" },
  { to: "/leadership-nuggets", label: "Leadership Nuggets" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 px-6 py-7 md:flex-row md:px-12">
      <Link to="/" className="shrink-0 font-display text-lg tracking-wider text-cream">AKUA GYEKYE</Link>
      <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm lg:gap-x-7 lg:text-base">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-cream/85 transition-colors hover:text-lime"
              activeProps={{ className: "text-lime" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-cocoa-grad border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_1.4fr] md:px-12">
        <div>
          <p className="font-script text-4xl text-lime">Akua Gyekye</p>
          <p className="mt-2 font-serif italic text-cream/80">Lead talk with Akua</p>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-cream/60">Explore</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/85 hover:text-lime">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-cream/60">Follow</p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akua Gyekye on LinkedIn"
            className="inline-flex items-center gap-2 text-cream/85 transition-colors hover:text-lime"
          >
            <Linkedin className="size-5" />
            <span>LinkedIn</span>
          </a>
          <p className="mt-2 text-lime">#LeadwithAkua</p>
        </div>
        <Newsletter id="footer-newsletter" compact />
      </div>
      <p className="border-t border-border py-5 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} Akua Gyekye. All rights reserved.
      </p>
    </footer>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export const nuggets = [
  {
    tag: "Leadership Unfiltered · By Akua",
    title: "Leading across a continent",
    body: "Shaping technology policy across Africa means listening first. Every country, government and community has its own context — and good leadership starts by understanding it before trying to change it.",
  },
  {
    tag: "Leading Out Loud · Guest leader",
    title: "Building teams from zero",
    body: "Helping to establish Meta's first Africa Policy Team taught me that the first hires shape the culture. Choose people who are curious, generous with knowledge and brave enough to disagree.",
  },
  {
    tag: "Leadership Unfiltered · By Akua",
    title: "Careers are not straight lines",
    body: "From project finance law at Clifford Chance to legal advisory work in Liberia and Nigeria to government affairs in tech — each turn felt uncertain, yet every one added a skill I still use today.",
  },
  {
    tag: "Leadership Unfiltered · By Akua",
    title: "Integrity under pressure",
    body: "Leading election integrity efforts showed me that trust is built in quiet, consistent decisions — especially when the stakes are high and everyone is watching.",
  },
];
