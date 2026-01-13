import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const gomariceRocks = localFont({
  src: "../fonts/gomarice_rocks.ttf",
  variable: "--font-gomarice-rocks",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawnforge Games",
  description: "The forge is hot. Something is coming.",
  metadataBase: new URL("https://dawnforge.games"),
  openGraph: {
    title: "Dawnforge Games",
    description: "The forge is hot. Something is coming.",
    url: "https://dawnforge.games",
    siteName: "Dawnforge Games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawnforge Games",
    description: "The forge is hot. Something is coming.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${gomariceRocks.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
