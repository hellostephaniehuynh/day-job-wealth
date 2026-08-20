import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { socialLinks } from "@/lib/social-links";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/logo-transparent.png"
              alt="Day Job Wealth — by Stephanie Huynh"
              width={1256}
              height={385}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/70">
              Building wealth on the side of a 9-to-5 &mdash; real estate, investing,
              and the real-time story of starting Hopscotch. Documented in public,
              by Stephanie Huynh.
            </p>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-rose">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-rose">
              Find Me Elsewhere
            </p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 font-body text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-ivory/50">
            &copy; {new Date().getFullYear()} Day Job Wealth by Stephanie Huynh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-body text-xs text-ivory/50 transition-colors hover:text-ivory"
            >
              Privacy Policy
            </Link>
            <p className="font-body text-xs text-ivory/50">Est. 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
