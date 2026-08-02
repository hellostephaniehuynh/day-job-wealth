import { sanityConfigured } from "@/lib/sanity/client";
import StudioClient from "./StudioClient";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div className="flex min-h-full items-center justify-center bg-ivory px-6 py-24 text-center text-ink">
        <div className="mx-auto max-w-lg">
          <h1 className="font-display text-2xl font-bold text-ink">
            Sanity isn&apos;t connected yet
          </h1>
          <p className="mt-4 font-body text-base text-ink-soft">
            Set <code className="rounded bg-paper px-1.5 py-0.5">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
            and <code className="rounded bg-paper px-1.5 py-0.5">NEXT_PUBLIC_SANITY_DATASET</code> in{" "}
            <code className="rounded bg-paper px-1.5 py-0.5">.env.local</code>, then reload this
            page to open the Studio.
          </p>
        </div>
      </div>
    );
  }

  return <StudioClient />;
}
