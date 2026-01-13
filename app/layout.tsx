import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSectionProvider } from "./utils/ActiveSectionContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}
