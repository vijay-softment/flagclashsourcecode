import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductHighlight } from "@/components/product-highlight"
import { DescriptionSection } from "@/components/description-section"
import { WhatsIncluded } from "@/components/whats-included"
import { TrustSection } from "@/components/trust-section"
import { SupportSection } from "@/components/support-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductHighlight />
      <DescriptionSection />
      <WhatsIncluded />
      <TrustSection />
      <SupportSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
