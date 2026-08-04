import { createClient } from "next-sanity";
import { sanityDataset, sanityProjectId } from "./client";

/**
 * Server-only client with write access, used for publishing posts on
 * Stephanie's behalf. Never import this from client components or expose
 * SANITY_API_TOKEN to the browser.
 */
export const sanityWriteClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2026-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
