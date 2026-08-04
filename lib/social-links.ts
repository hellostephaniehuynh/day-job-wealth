import type { IconType } from "react-icons";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Rss, Link2 } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

/**
 * Add Skool here later — it's one more entry, nothing else to change.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/_stephaniehuynh_",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DayJobWealth",
    icon: FaYoutube,
  },
  {
    label: "Substack",
    href: "https://substack.com/@dayjobwealth",
    icon: Rss,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@_stephaniehuynh",
    icon: FaTiktok,
  },
  {
    label: "Beacons",
    href: "https://beacons.ai/stephaniehuynh",
    icon: Link2,
  },
];
