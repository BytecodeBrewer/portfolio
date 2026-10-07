import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lev · Data & Systems Portfolio",
  description: "Data Engineering, Analytics, Multi-Agent Systems & Quantitative Automation by Lev.",
  openGraph: {
    title: "Lev · Data & Systems Portfolio",
    description: "Data Engineering, Analytics, Multi-Agent Systems & Quantitative Automation by Lev.",
    type: "website",
    images: ["/og.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lev · Data & Systems Portfolio",
    description: "Data Engineering, Analytics, Multi-Agent Systems & Quantitative Automation by Lev.",
    images: ["/og.svg"]
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
