import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
});

export const metadata: Metadata = {
  title: {
    default: "Papa's Electronic Repair Shop | Trusted in QC & Rizal",
    template: "%s | Papa's Electronic Repair Shop",
  },
  description: "Trusted electronic repair service in Quezon City and Rizal since 2021. Expert repair for TVs, Electric Fans, and other appliances. Call 0977-607-4426.",
  keywords: [
    "Electronic Repair",
    "TV Repair",
    "Appliance Repair",
    "Quezon City Repair Shop",
    "Rizal Repair Shop",
    "Electric Fan Repair",
    "Papa's Repair",
    "Legit Repair Service"
  ],
  authors: [{ name: "Papa's Electronic Repair Shop" }],
  creator: "Papa's Electronic Repair Shop",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://papas-repair.vercel.app/",
    title: "Papa's Electronic Repair Shop | Trusted Service",
    description: "Expert electronic repair ensuring quality service in Quezon City and Rizal. Proven track record since 2021.",
    siteName: "Papa's Electronic Repair Shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papa's Electronic Repair Shop",
    description: "Trusted electronic repair service in Quezon City and Rizal. Call 0977-607-4426.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${rajdhani.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
