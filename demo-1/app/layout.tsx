import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowthPilot Coaching Landing Page",
  description:
    "A practical coaching program for small business owners who want better offers, clearer messaging, and more qualified leads."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
