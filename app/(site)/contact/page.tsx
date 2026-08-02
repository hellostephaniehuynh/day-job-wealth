import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { socialLinks } from "@/lib/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Stephanie Huynh — collabs, questions, or just to say hi.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
        Work With Me
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
        Questions about a post, a collab idea, or just want to say hi &mdash; the
        form below comes straight to me. You can also find me on any of the
        platforms below.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <ContactForm />

        <div className="space-y-6">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Find Me Elsewhere
            </p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 font-body text-base text-ink-soft transition-colors hover:text-burgundy"
                  >
                    <link.icon size={18} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
