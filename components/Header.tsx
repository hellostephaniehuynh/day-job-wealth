"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav-links";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Day Job Wealth — by Stephanie Huynh"
            width={168}
            height={84}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resources"
            className="rounded-full bg-clay px-5 py-2 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-clay-dark"
          >
            Free Guide
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-ivory px-6 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-base font-semibold uppercase tracking-wide text-ink-soft"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resources"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-clay px-5 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ivory"
          >
            Free Guide
          </Link>
        </nav>
      )}
    </header>
  );
}
