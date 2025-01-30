import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Benefits } from "@/components/benefits"
import { HouseWins } from "@/components/house-wins"
import { Placements } from "@/components/placements"
import { WhatsInside } from "@/components/whats-inside"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Benefits />
      <HouseWins />
      <Placements />
      <WhatsInside />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

