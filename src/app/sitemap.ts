import type { MetadataRoute } from "next";
import _metadata from "@/constants/metadata.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${_metadata.sitemapUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${_metadata.sitemapUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${_metadata.sitemapUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
