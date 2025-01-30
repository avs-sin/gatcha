"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Logo } from "./logo"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null) // Removed as solutions is removed

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  // Removed solutions constant

  return (
    <header className={`${className} z-50`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {isMobile ? (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/play" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Play
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Pricing
                </Link>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Resources
                </Link>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/bookdemo">
                  <Button className="bg-[#ffbd59] hover:bg-black text-black hover:text-white rounded-full px-6 transition-colors duration-200">
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
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <Logo />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                <Link
                  href="/play"
                  className="text-lg font-medium text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Play
                </Link>
                <Link
                  href="#pricing"
                  className="text-lg font-medium text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link href="#" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                  Resources
                </Link>
                <Button
                  className="bg-[#ffbd59] hover:bg-[#ffbd59]/90 text-black rounded-full w-full mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

