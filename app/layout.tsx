import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const hkgothic = localFont({
  src: "./fonts/HKGrotesk-Regular.ttf",
  variable: "--font-gothic-sans",
  weight: "100 200 300 400 800 900",
});
const hkgothicBold = localFont({
  src: "./fonts/HKGrotesk-Bold.ttf",
  variable: "--font-gothic-sans-bold",
  weight: "300 400 800 900",
});

export const metadata: Metadata = {
  title: "Competishun",
  description: "Best website for preparing for JEE and NEET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hkgothic.variable} overflow-x-clip font-sans bg-background text-foreground antialiased`}
      >
        <div
          className={"z-[50]"}
          id="chat-widget"
          data-key="670f87c42f6b943716677af3"
        ></div>
        <Script src="https://cdn.jsdelivr.net/gh/helio-ai/widget@latest/main.js"></Script>

        {children}
      </body>
    </html>
  );
}
