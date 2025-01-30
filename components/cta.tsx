import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#b38327] via-[#ffbd59] to-[#ffd699]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="px-6 py-12 md:px-12 md:py-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to transform your store into a game-winning experience?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">It's time to boost your revenue with Gatcha.</p>
            <Link href="/bookdemo">
              <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1">
                Book Your Demo
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
                  className="ml-2 h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

