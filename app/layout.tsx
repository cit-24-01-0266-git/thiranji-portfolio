import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiranji Welgama | Cloud Computing Portfolio",
  description:
    "Explore the professional portfolio of Thiranji Welgama, featuring cloud computing, software development, AI, creative projects, education and experience.",
  keywords: [
    "Thiranji Welgama",
    "Cloud Computing",
    "Software Development",
    "Portfolio",
    "AWS",
    "AI",
    "Graphic Design",
  ],
  authors: [{ name: "Thiranji Welgama" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
