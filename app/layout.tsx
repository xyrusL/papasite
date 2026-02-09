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
    default: "TV Repair & Electronics Specialist | Papa's Repair Shop QC",
    template: "%s | Papa's Electronic Repair Shop",
  },
  description: "Naghahanap ng TV repair shop? Trusted sa Quezon City at Rizal. Expert sa LED, Smart TV, at Electric Fans. Tawag na sa 0977-607-4426!",
  keywords: [
    "TV Repair Shop near me",
    "TV Repair Quezon City",
    "Pagawaan ng TV",
    "Broken TV Screen Repair",
    "Home Service TV Repair",
    "Saan may gumagawa ng TV malapit sa akin",
    "Mura na pagawaan ng TV",
    "Authorized TV repair center QC",
    "Sira ang TV may power pero walang display",
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
    title: "TV Repair & Electronics Specialist | Papa's Repair Shop QC",
    description: "Naghahanap ng TV repair shop? Trusted sa Quezon City at Rizal. Expert sa LED, Smart TV, at Electric Fans.",
    siteName: "Papa's Electronic Repair Shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "TV Repair & Electronics Specialist | Papa's Repair Shop QC",
    description: "Trusted TV repair sa Quezon City at Rizal. Call 0977-607-4426.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
        suppressHydrationWarning
        className={`${inter.variable} ${rajdhani.variable} antialiased font-sans glass-shell`}
      >
        {children}
      </body>
    </html>
  );
}
