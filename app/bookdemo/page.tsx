import { Logo } from "@/components/logo"
import { BookDemoForm } from "@/components/book-demo-form"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffbd59]/20 to-white flex flex-col">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <Navigation className="relative bg-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Experience the Power of Gatcha</h1>
            <p className="text-xl mb-8 font-bold">
              Transform your eCommerce store into an exciting, gamified shopping experience. Boost customer engagement,
              increase sales, and turn your inventory into irresistible prizes.
            </p>
          </div>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <BookDemoForm />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Gatcha?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#ffbd59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Increase customer engagement and loyalty
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#ffbd59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Boost average order value and repeat purchases
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#ffbd59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Efficiently manage and liquidate inventory
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-[#ffbd59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Create a unique and memorable shopping experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

