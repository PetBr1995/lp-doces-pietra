import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero>
        <Header />
      </Hero>
    </main>
  );
}
