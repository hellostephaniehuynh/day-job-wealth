import type { IconType } from "react-icons";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Rss, Link2 } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

/**
 * TODO(Stephanie): swap these placeholder URLs for your real handles.
 * Add Skool here later — it's one more entry, nothing else to change.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/dayjobwealth",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@dayjobwealth",
    icon: FaYoutube,
  },
  {
    label: "Substack",
    href: "https://dayjobwealth.substack.com",
    icon: Rss,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@dayjobwealth",
    icon: FaTiktok,
  },
  {
    label: "Beacons",
    href: "https://beacons.ai/dayjobwealth",
    icon: Link2,
  },
];
