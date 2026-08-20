import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Day Job Wealth and any purchases made on the Site.",
};

const lastUpdated = "August 20, 2026";

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 font-body text-sm text-ink-soft/70">
        Last updated: {lastUpdated}
      </p>

      <div className="prose-blog mt-10 space-y-8 font-body text-base leading-relaxed text-ink-soft">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of dayjobwealth.com (the
          &ldquo;Site&rdquo;) and any digital products, resources, or content offered by Day Job Wealth
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site or purchasing a
          product, you agree to these Terms. If you don&apos;t agree, please don&apos;t use the Site.
        </p>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Not Financial Advice</h2>
          <p className="mt-3">
            Nothing on this Site &mdash; including blog posts, digital products, emails, the Money Moves
            Challenge, or any other content &mdash; is financial, investment, legal, or tax advice. It
            reflects one person&apos;s personal experience, opinions, and approach to real estate,
            investing, and building a business, shared for educational and informational purposes only.
          </p>
          <p className="mt-3">
            Think of it as a consultation, not a guarantee: we&apos;re sharing what has worked for us, not
            telling you what to do with your money. We are not licensed financial advisors, and nothing
            here should be treated as a substitute for advice from a qualified professional who knows your
            specific situation.
          </p>
          <p className="mt-3">
            Real estate, investing, and entrepreneurship all carry risk, including the risk of losing
            money. Any results mentioned on the Site &mdash; income, returns, or otherwise &mdash; are not
            typical and are not guaranteed. You are solely responsible for any decisions you make based on
            information from the Site, and we are not liable for any losses or damages that result from
            those decisions.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Digital Products &amp; Payment</h2>
          <p className="mt-3">
            Paid digital products (currently The Home Asset Blueprint and The Home Income Snapshot) are
            sold as instant-download PDF resources. Payments are processed securely through Stripe. By
            purchasing, you confirm you&apos;re authorized to use the payment method provided.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">No Refunds</h2>
          <p className="mt-3">
            All sales of digital products are final. Because these are downloadable digital goods delivered
            instantly upon purchase, we do not offer refunds, returns, or exchanges once a purchase is
            complete. Please review each product&apos;s description carefully before buying. If you run
            into a technical issue accessing a product you purchased, email us at{" "}
            <a href="mailto:contact@dayjobwealth.com" className="text-burgundy underline">
              contact@dayjobwealth.com
            </a>{" "}
            and we&apos;ll help sort it out.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">License to Use Products</h2>
          <p className="mt-3">
            When you purchase or download a digital product, we grant you a personal, non-transferable,
            non-exclusive license to use it for your own individual purposes. You may not resell,
            redistribute, share, republish, or claim authorship of any product, in whole or in part,
            without our prior written permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Intellectual Property</h2>
          <p className="mt-3">
            All content on the Site &mdash; including text, graphics, logos, images, and digital products
            &mdash; is owned by Day Job Wealth or its licensors and protected by copyright and other
            intellectual property laws. You may not copy, reproduce, or use it for commercial purposes
            without our permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">The Money Moves Challenge &amp; Waitlist</h2>
          <p className="mt-3">
            Joining the waitlist reserves you a spot to be notified when the challenge opens &mdash; it is
            not a purchase and does not guarantee a specific start date, outcome, or result. As with all
            content on the Site, participation is for educational purposes only and is not financial
            advice.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">No Guarantees</h2>
          <p className="mt-3">
            We do our best to keep the Site and its content accurate and useful, but we make no guarantees
            &mdash; express or implied &mdash; about the completeness, accuracy, or reliability of anything
            on the Site, or about any results you might achieve from using it.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Limitation of Liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, Day Job Wealth and Stephanie Huynh are not liable for
            any indirect, incidental, or consequential damages arising from your use of the Site, its
            content, or any digital product &mdash; including any financial losses.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Changes to These Terms</h2>
          <p className="mt-3">
            We may update these Terms from time to time. Any changes will be posted on this page with a
            revised &ldquo;Last updated&rdquo; date. Continued use of the Site after changes are posted
            means you accept the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p className="mt-3">
            Questions about these Terms? Email us at{" "}
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
