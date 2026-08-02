import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { sanityConfigured, sanityDataset, sanityProjectId } from "./client";

const builder = sanityConfigured
  ? createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset })
  : null;

export function urlForImage(source: SanityImageSource) {
  return builder?.image(source);
}
