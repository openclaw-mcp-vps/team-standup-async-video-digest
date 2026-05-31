import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupDigest — Async Video Standups for Remote Teams",
  description: "Record short video standups and get AI-generated searchable summaries with action items. Built for remote engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2d0715da-68f3-440c-8a76-3dbea6b4c8b6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
