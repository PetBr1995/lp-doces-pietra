import { site } from "@/lib/site";

// Dados estruturados (schema.org) para o Google entender que é uma doceria local
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": `${site.url}/#doceria`,
        name: site.name,
        description: site.description,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        logo: `${site.url}/icon.svg`,
        telephone: site.phone,
        servesCuisine: "Doces artesanais",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          addressCountry: site.address.country,
        },
        sameAs: [site.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#site`,
        url: site.url,
        name: site.name,
        inLanguage: "pt-BR",
        publisher: { "@id": `${site.url}/#doceria` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
