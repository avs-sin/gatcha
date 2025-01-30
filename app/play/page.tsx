"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { PrizeShowcase } from "@/components/prize-showcase"

export default function PlayPage() {
  const [selectedCredits, setSelectedCredits] = useState(1)
  const prices = {
    1: 5,
    5: 20,
    20: 80,
  }

  const afterpayAmounts = {
    1: "1",
    5: "5",
    20: "20",
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation className="bg-transparent pb-2" />
      <div className="h-[1px] bg-gray-200" />

      <main className="relative pt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="inline-flex items-center text-black/90 hover:text-black transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <Button variant="outline" className="text-black border-black/20 hover:bg-black/10">
              Drop History
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-black">Gatcha Demo</h1>

            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202025-01-23%20at%205.14.22%20PM-8jAm1EgnP1U8CL1FiB37sLDRKCAAHK.png"
                alt="Gatcha Machine"
                fill
                className="object-contain animate-shake"
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-lg text-black">
                <span className="font-bold">Your Tokens:</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-01-23T170658.103-vhdUsdU836nP4hyTS6w9ddOI1VrRJW.png"
                    alt="Token Icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                  <span className="font-mono">0</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full max-w-[240px]">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#b38327] via-[#ffbd59] to-[#ffd699] hover:from-[#a37216] hover:via-[#eead48] hover:to-[#eec588] text-black rounded-full py-6 text-lg font-medium"
                >
                  Play Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 bg-transparent text-black hover:bg-black/5 rounded-full py-6 text-lg font-medium"
                >
                  My History
                </Button>
              </div>
            </div>

            <p className="text-center text-black/80 max-w-2xl mx-auto mb-16">
              Use tokens to play and win exciting prizes from your favorite brands. Every play gives you a chance to win
              premium products, exclusive items, or special discounts.
            </p>

            <div className="w-full max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#b38327] via-[#ffbd59] to-[#ffd699] text-transparent bg-clip-text">
                How Gatcha Works
              </h2>
              <div className="bg-black rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-6 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-01-23T170658.103-vhdUsdU836nP4hyTS6w9ddOI1VrRJW.png"
                        alt="Token"
                        fill
                        className="object-contain animate-spin-slow"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">1. Buy Tokens</h3>
                    <p className="text-gray-400">Get your tokens ready for a chance to win amazing prizes</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-6 relative">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-01-23T174218.131-5EOKvzbuUVsyyLTbhXKiwOryppiQJi.png"
                        alt="Gatcha Machine"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">2. Play Gatcha</h3>
                    <p className="text-gray-400">Use your tokens to play and test your luck</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                      <span className="text-8xl animate-bounce-gentle relative sparkle-effect">🎁</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">3. Win Prizes</h3>
                    <p className="text-gray-400">Instantly receive your winning prize or discount</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-6xl mx-auto mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#b38327] via-[#ffbd59] to-[#ffd699] text-transparent bg-clip-text">
                Need Tokens?
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202025-01-23T170658.103-vhdUsdU836nP4hyTS6w9ddOI1VrRJW.png"
                        alt="Gatcha Token"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-8 text-center h-full flex flex-col justify-between py-4">
                  <div>
                    <h3 className="text-5xl font-bold mb-4">Gatcha Token</h3>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className="relative w-3 h-3">
                          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse scale-75" />
                          <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping scale-75" />
                        </div>
                        <span className="text-sm">Instant Delivery</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xl font-bold">${prices[selectedCredits]}</span>
                        <div className="flex items-center justify-center gap-1 text-sm">
                          <span>or 4 interest-free payments of ${afterpayAmounts[selectedCredits]} with</span>
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202025-01-23%20at%206.01.20%20PM-3QeHjZhZzqVCrFX7JNL6KYD0slSxoQ.png"
                            alt="Afterpay"
                            width={85}
                            height={23}
                            className="inline-block"
                          />
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="More information about Afterpay"
                          >
                            ⓘ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600">
                    Unlock the excitement of Gatcha with these tokens! Tokens grant you access to our thrilling Gatcha
                    minigame, where you can win various exciting prizes at random.
                  </p>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Select Your Package</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        variant="outline"
                        className={`h-auto py-3 px-4 transition-colors ${
                          selectedCredits === 1
                            ? "bg-[#ffbd59]/10 border-[#ffbd59]"
                            : "hover:bg-[#ffbd59]/10 hover:border-[#ffbd59]"
                        }`}
                        onClick={() => setSelectedCredits(1)}
                      >
                        1 Credit
                      </Button>
                      <Button
                        variant="outline"
                        className={`h-auto py-3 px-4 transition-colors ${
                          selectedCredits === 5
                            ? "bg-[#ffbd59]/10 border-[#ffbd59]"
                            : "hover:bg-[#ffbd59]/10 hover:border-[#ffbd59]"
                        }`}
                        onClick={() => setSelectedCredits(5)}
                      >
                        5 Credits
                      </Button>
                      <Button
                        variant="outline"
                        className={`h-auto py-3 px-4 transition-colors ${
                          selectedCredits === 20
                            ? "bg-[#ffbd59]/10 border-[#ffbd59]"
                            : "hover:bg-[#ffbd59]/10 hover:border-[#ffbd59]"
                        }`}
                        onClick={() => setSelectedCredits(20)}
                      >
                        20 Credits
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 py-6 text-lg font-semibold rounded-full hover:bg-black/5"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#b38327] via-[#ffbd59] to-[#ffd699] hover:from-[#a37216] hover:via-[#eead48] hover:to-[#eec588] text-black rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      Buy it Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <PrizeShowcase />
          </div>
        </div>
      </main>
    </div>
  )
}

