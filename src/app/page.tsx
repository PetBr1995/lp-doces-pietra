import Favorites from "@/components/Favorites";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <JsonLd />
      <Header />
      <Hero />
      <Favorites />
    </main>
  );
}
