import type { MetadataRoute } from "next";
import { METADATA } from "@/constants/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: METADATA.title,
    short_name: METADATA.shortName,
    description: METADATA.description,
    start_url: "/",
    display: "standalone",
    background_color: METADATA.backgroundColor,
    theme_color: METADATA.themeColor,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
