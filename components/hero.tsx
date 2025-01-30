"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const sparkles: { x: number; y: number; size: number; speed: number }[] = []

    for (let i = 0; i < 50; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparkles.forEach((sparkle) => {
        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        sparkle.y += sparkle.speed

        if (sparkle.y > canvas.height) {
          sparkle.y = 0
          sparkle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#888" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: "screen" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffbd59]/20 to-white mix-blend-multiply" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Get Customers Excited
              <br />
              About Your Brand
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Turn your Business into a Fun + Rewarding Shopping Experience! Gatcha's Prize Game Gives Your Brand Value
              by Enhancing Loyalty, Encouraging Repeat Purchases, Increasing Spend and Helps Brands Liquidate Sitting
              Inventory.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input className="flex-grow" placeholder="Enter your email" type="email" required />
              <Button
                type="button"
                onClick={() => console.log("Book Demo clicked")}
                className="bg-[#ffbd59] text-black hover:bg-black hover:text-white w-full sm:w-auto transition-colors duration-200"
              >
                Book Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium">100% Risk-Free Trial</p>
          </div>
          <p className="text-xs text-gray-500 italic max-w-[600px] mt-2">
            For more information on how we process your personal information and what rights you have in this respect,
            please see our{" "}
            <Link href="/privacy" className="underline hover:text-gray-900">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/high-resolution-shopify-partners-horizontal-logo-7017516947912978nwhdbwayf%20(1)-Ybk3TMrNnXCg0fyMiwfmnYw3ZLhkOY.png"
              alt="Shopify Partners"
              width={150}
              height={40}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

