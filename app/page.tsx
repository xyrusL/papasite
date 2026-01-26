import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Trust />
      <Footer />
    </main>
  );
}
