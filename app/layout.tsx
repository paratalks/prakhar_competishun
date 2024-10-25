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
      <head>
        <title>Competishun Champ</title>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10838004875"
        ></Script>
        <Script id={"gtagImplementation"}>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10838004875');`}
        </Script>
        <Script id={"userEmailVariableContainer"}>
          {`var user_email = decodeURIComponent(window.location.href).split("email=")[1].split("&")[0];`}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10838004875"
        ></Script>
        <Script id={"userEmailCapture"}>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'user_data', {"email": user_email});
          gtag('config','AW-10838004875', {'allow_enhanced_conversions':true});`}
        </Script>
      </head>
      <body
        className={`${hkgothic.variable} overflow-x-clip font-sans bg-background text-foreground antialiased`}
      >
        <Script src="https://cdn.jsdelivr.net/gh/helio-ai/widget@latest/main.js"></Script>
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        <Script id={"gtagImplementation2"}>
          {`window.addEventListener("load", function () {
          if (window.location.href.indexOf('/thankyou') != -1 && window.location.href.indexOf('?name=') != -1) {
            var totalVal = decodeURIComponent(window.location.href).split("transactionId=")[1].split("&")[0]
            var orderId = decodeURIComponent(window.location.href).split("amount=")[1].split("&")[0]
            gtag("event", "conversion", {
              send_to: "AW-10838004875/GwYGCL6oxeEZEIup-68o",
              value: parseFloat(totalVal),
              currency: "INR",
              transaction_id: orderId,
            })
          }
          if (window.location.pathname.includes("/thankyou") != -1) {
            gtag("event", "conversion", {
              send_to: "AW-10838004875/gddNCMGoxeEZEIup-68o",
            })
          }
        })`}
        </Script>

        {children}
      </body>
    </html>
  );
}
