import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lev - Data Projects",
  description: "Selected data engineering, analytics and automation projects by Lev.",
  openGraph: {
    title: "Lev - Data Projects",
    description: "Data projects explained through product thinking, system design and practical workflows.",
    type: "website",
    images: ["/og.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lev - Data Projects",
    description: "Data projects explained through product thinking, system design and practical workflows.",
    images: ["/og.svg"]
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </head>
    <body>{children}</body>
  </html>;
}
