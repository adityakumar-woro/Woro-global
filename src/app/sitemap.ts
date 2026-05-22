import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://woroglobal.com";

const staticPaths = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/website-development",
  "/services/software-development",
  "/services/mobile-app-development",
  "/services/cloud-management",
  "/services/cybersecurity",
  "/services/it-infrastructure",
  "/services/ai-ml-solutions",
  "/services/devops-cicd",
  "/services/qa-testing",
  "/products",
  "/products/woro-chat",
  "/products/woro-voice",
  "/products/woro-ugc",
  "/industries",
  "/woro-ai",
  "/portfolio",
  "/knowledge",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") || path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
