import type { Metadata } from "next";
import { Patrick_Hand, Geist_Mono, Dancing_Script, Pacifico } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Padmasahithi Kondeti - Portfolio",
  description: "Full Stack Developer Portfolio - Padmasahithi Kondeti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
} catch (e) { }
`,
          }}
        />
      </head>
      <body
        className={`${patrickHand.variable} ${geistMono.variable} ${dancingScript.variable} ${pacifico.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Script src="/oneko.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
