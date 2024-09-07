import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "WanaShip",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/public/images/logo/RoundedLogo?v=4"],
    shortcut: ["/public/images/logo/RoundedLogo"],
  },
  description:
    "WanaShip is the best parcel forwarding service that allows you to shop from any online store in different countries and have your purchases shipped to your doorstep, even if your country is not supported by that online store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={` ${poppins_init.variable} antialiased poppins`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
