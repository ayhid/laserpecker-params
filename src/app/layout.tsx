import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LaserPecker Parameters - Easy Material Settings Finder",
  description: "Find the perfect LaserPecker settings for your materials. Quick access to laser cutting and engraving parameters for wood, acrylic, metal, and more.",
  keywords: "LaserPecker, laser engraving, laser cutting, parameters, materials, settings, LX1",
  authors: [{ name: "A laser enthusiast" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laserpecker-params.vercel.app/",
    title: "LaserPecker Parameters - Easy Material Settings Finder",
    description: "Find the perfect LaserPecker settings for your materials. Quick access to laser cutting and engraving parameters.",
    siteName: "LaserPecker Parameters",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserPecker Parameters - Easy Material Settings Finder",
    description: "Find the perfect LaserPecker settings for your materials. Quick access to laser cutting and engraving parameters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="border-b">
          <div className="container mx-auto py-4">
            <h1 className="text-xl font-bold">LaserPecker Parameters</h1>
          </div>
        </header>
        <main className="min-h-[calc(100vh-130px)]">
          {children}
        </main>
        <footer className="border-t">
          <div className="container mx-auto py-4 text-sm text-gray-600">
            <p>Not affiliated with LaserPecker. Created by a laser enthusiast.</p>
            <p>Find the source code on <a href="https://github.com/yourusername/laserpecker-params" className="text-blue-600 hover:underline">GitHub</a></p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
