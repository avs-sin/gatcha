import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { BackgroundEffects } from "@/components/background-effects"

export default function PlayPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <Navigation className="bg-transparent absolute top-0 left-0 right-0" />
      <BackgroundEffects />

      <main className="relative pt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/play" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Drop History
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Epic Gachapon Machine</h1>

            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              <Image
                src="https://cdn.midjourney.com/8cd87b4a-ab45-454e-87fa-318744e58600/0_2.png"
                alt="Gatcha Machine"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <span>Your Tickets:</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Ticket Icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <span className="font-mono">0</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8"
              >
                Login to Play
              </Button>
            </div>

            <p className="text-center text-white/80 max-w-2xl mx-auto">
              Choose what items you want in the Gatcha system and set the probability of your choice! Be in control of
              your own game, play the house, and win every single time.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

