// Dados centrais do negócio: usados em metadados, sitemap, Open Graph e dados estruturados (Google).
// TODO: substituir os valores marcados com "PREENCHER" pelos dados reais antes de publicar.
export const site = {
  name: "Doces Pietra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.docespietra.com.br", // PREENCHER: domínio final
  title: "Doces Pietra | Doces artesanais para festas e encomendas",
  description:
    "Doces artesanais feitos com ingredientes frescos: brigadeiros, bolos, cupcakes e docinhos para festas, aniversários e casamentos. Faça sua encomenda!",
  keywords: [
    "doces artesanais",
    "doces para festa",
    "encomenda de doces",
    "brigadeiro gourmet",
    "docinhos para aniversário",
    "doces para casamento",
    "bolos e cupcakes",
    "doceria",
  ],
  locale: "pt_BR",
  themeColor: "#2a0b3d",
  phone: "+55 00 00000-0000", // PREENCHER
  instagram: "https://www.instagram.com/docespietra", // PREENCHER
  address: {
    city: "Cidade", // PREENCHER
    state: "UF", // PREENCHER
    country: "BR",
  },
} as const;
