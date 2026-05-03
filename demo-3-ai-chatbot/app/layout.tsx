import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmileCare Clinic AI Chatbot Demo",
  description:
    "A responsive React and Tailwind CSS chatbot demo for answering dental clinic questions and collecting appointment requests."
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
