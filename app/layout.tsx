import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lev — Data Projects",
  description: "Selected data engineering, analytics and automation projects by Lev.",
  openGraph: { title: "Lev — Data Projects", description: "Turning messy data into useful systems.", type: "website", images: ["/og.jpg"] },
  twitter: { card: "summary_large_image", title: "Lev — Data Projects", description: "Turning messy data into useful systems.", images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
