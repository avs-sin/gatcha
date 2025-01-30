import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            <Link href="/contact" className="text-sm hover:text-[#ffbd59] transition-colors">
              Contact Us
            </Link>
            <Link href="/terms" className="text-sm hover:text-[#ffbd59] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:text-[#ffbd59] transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GATCHA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

