import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import {
  Bonus,
  Delivery,
  FinalCta,
  Footer,
  Products,
  Profit,
  SocialProof,
} from "@/components/landing/Sections";

const title = "Pack Elite — +230GB de conteúdo digital por R$19,90";
const description =
  "+230GB de conteúdo digital premium: CapCut, 3.000 vídeos Shopee, 60.000 vídeos virais e 600 projetos em metalon. Use ou revenda. Entrega imediata.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Products />
      <Profit />
      <Bonus />
      <Delivery />
      <FinalCta />
      <Footer />
    </main>
  );
}
