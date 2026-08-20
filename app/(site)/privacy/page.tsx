import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Day Job Wealth collects, uses, and protects your information.",
};

const lastUpdated = "August 19, 2026";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 font-body text-sm text-ink-soft/70">
        Last updated: {lastUpdated}
      </p>

      <div className="prose-blog mt-10 space-y-8 font-body text-base leading-relaxed text-ink-soft">
        <p>
          Day Job Wealth (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
          This policy explains what information we collect through dayjobwealth.com (the
          &ldquo;Site&rdquo;), how we use it, and the choices you have. By using the Site, you agree to
          the practices described here.
        </p>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Information We Collect</h2>
          <p className="mt-3">We collect information you choose to give us directly, including:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-ink">Email address</span> &mdash; when you sign up for a
              free resource, join the Money Moves Challenge waitlist, or subscribe to our list.
            </li>
            <li>
              <span className="font-semibold text-ink">Name and email address</span> &mdash; when you use
              the contact form to send us a message.
            </li>
            <li>
              <span className="font-semibold text-ink">Payment and billing information</span> &mdash; when
              you purchase a digital product. Payment details are collected and processed entirely by
              Stripe; we never see or store your card number.
            </li>
          </ul>
          <p className="mt-3">
            We also automatically collect limited technical information (like IP address, browser type,
            and pages visited) through our hosting provider&apos;s standard server logs, used only to keep
            the Site running securely and reliably.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>To deliver the free resource, guide, or download you requested.</li>
            <li>To send you emails about new posts, products, or the Money Moves Challenge &mdash; you can unsubscribe at any time.</li>
            <li>To process and fulfill purchases, and provide access to what you bought.</li>
            <li>To respond to messages sent through the contact form.</li>
            <li>To maintain the security and performance of the Site.</li>
          </ul>
          <p className="mt-3">We do not sell your personal information, ever.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Third-Party Services</h2>
          <p className="mt-3">
            We use a small number of trusted service providers to run the Site. Each processes data on
            our behalf, under their own privacy policies:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-ink">Stripe</span> &mdash; payment processing for
              digital product purchases.
            </li>
            <li>
              <span className="font-semibold text-ink">Kit (formerly ConvertKit)</span> &mdash; email
              delivery and list management for subscribers and waitlist signups.
            </li>
            <li>
              <span className="font-semibold text-ink">Resend</span> &mdash; delivery of messages sent
              through the contact form.
            </li>
            <li>
              <span className="font-semibold text-ink">Vercel</span> &mdash; website hosting.
            </li>
            <li>
              <span className="font-semibold text-ink">Sanity</span> &mdash; content management for blog
              posts.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Cookies</h2>
          <p className="mt-3">
            The Site uses only the essential cookies needed for core functionality, such as completing a
            checkout with Stripe. We do not use third-party advertising or tracking cookies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Your Choices</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>You can unsubscribe from any email using the link at the bottom of every email we send.</li>
            <li>You can request a copy of the personal information we hold about you, or ask us to delete it, by emailing us (see below).</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Data Retention &amp; Security</h2>
          <p className="mt-3">
            We keep your information only as long as needed for the purposes described in this policy, or
            as required by law. We use industry-standard measures to protect your data, but no method of
            transmission or storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Children&apos;s Privacy</h2>
          <p className="mt-3">
            The Site is not directed at children under 13, and we do not knowingly collect information
            from children under 13.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Changes to This Policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. Any changes will be posted on this page with a
            revised &ldquo;Last updated&rdquo; date.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p className="mt-3">
            Questions about this policy or your information? Email us at{" "}
            <a href="mailto:contact@dayjobwealth.com" className="text-burgundy underline">
              contact@dayjobwealth.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
