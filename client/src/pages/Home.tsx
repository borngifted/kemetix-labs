/* KEMETIX LABS — homepage. Reference replication of noth.in structure in Kemetix brand. */
import { useState } from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Showcase from "@/components/sections/Showcase";
import Products from "@/components/sections/Products";
import Pillars from "@/components/sections/Pillars";
import Saturn from "@/components/sections/Saturn";
import Merch from "@/components/sections/Merch";
import Statement from "@/components/sections/Statement";
import Footer from "@/components/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-white">
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Showcase />
        <Products />
        <Pillars />
        <Saturn />
        <Merch />
        <Statement />
        <Footer />
      </main>
    </div>
  );
}

