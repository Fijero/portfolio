import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://uzoma.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://uzoma.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://uzoma.dev/chukwuemezie-emmanuel-uzoma",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://uzoma.dev/emmanuel-uzoma",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
