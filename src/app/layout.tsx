import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bio Link & Landing Page",
  description:
    "Personal bio link and service landing page template. Clone and configure with AI Agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
