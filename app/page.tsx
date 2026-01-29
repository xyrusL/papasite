import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsRepairShop",
    name: "Papa's Electronic Repair Shop",
    telephone: "+63 977 607 4426",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23 Chestnut Ext",
      addressLocality: "Quezon City",
      addressRegion: "Metro Manila",
      addressCountry: "PH"
    },
    priceRange: ""
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <Faq />
      <Gallery />
      <Trust />
      <Footer />
    </main>
  );
}
