import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";
import Footer from "./components/Footer";
import ScrollRevealSection from "./components/ScrollRevealSection";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsRepairShop",
    name: "Papa's Electronic Repair Shop",
    telephone: "+63 977 607 4426",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Montinola Compound, Accountant Street, Sauyo",
      addressLocality: "Quezon City",
      addressRegion: "Metro Manila",
      addressCountry: "PH"
    },
    priceRange: ""
  };

  return (
    <main className="min-h-screen font-sans text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <ScrollRevealSection>
        <Hero />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Services />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Faq />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Gallery />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Trust />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Footer />
      </ScrollRevealSection>
    </main>
  );
}
