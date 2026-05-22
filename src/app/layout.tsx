import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentWidget from "@/components/AgentWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://woroglobal.com";
const SITE_NAME = "WORO Global";
const TITLE = "WORO Global — Enterprise AI, WhatsApp CRM, Voice agents & Creator studio";
const DESCRIPTION =
  "WORO Global builds WhatsApp CRM, AI voice calling agents and UGC creator tools — plus end-to-end AI services, MLOps and responsible AI for enterprises that want compounding advantage.";
const KEYWORDS = [
  "WORO Global",
  "Enterprise AI",
  "WhatsApp CRM",
  "AI voice agents",
  "WORO Voice",
  "WORO Chat",
  "WORO UGC",
  "AI transformation",
  "MLOps",
  "Generative AI",
  "RAG systems",
  "Responsible AI",
  "Custom software development",
  "Mobile app development",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — WORO Global",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "WORO Global", url: SITE_URL }],
  creator: "WORO Global",
  publisher: "WORO Global",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "WORO Global — Enterprise AI partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
    creator: "@woroglobal",
    site: "@woroglobal",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "contact:email": "tech@woro.co.in",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${instrument.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased selection:bg-brand selection:text-white">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AgentWidget />
      </body>
    </html>
  );
}
