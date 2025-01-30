"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  const calculatePrice = (monthlyPrice: number) => {
    return isYearly ? (monthlyPrice * 0.8).toFixed(0) : monthlyPrice
  }

  return (
    <section id="pricing" className="py-16 bg-black text-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-300 mb-8">
            Try us Risk-Free with our Money-Back Guarantee.
            <br />
            Pay nothing for the first 14 days.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? "text-[#ffbd59]" : "text-gray-400"}`}>Month-to-Month</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-[#ffbd59]" />
            <span className={`text-sm ${isYearly ? "text-[#ffbd59]" : "text-gray-400"}`}>Yearly (20% off)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-[#ffbd59]">Starter</CardTitle>
              <div className="text-3xl font-bold text-white">
                ${calculatePrice(49)} <span className="text-lg text-gray-300">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Includes all basic features/functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Limited to store-bought item placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Analytics / Realtime Profit Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Customer LTV (lifetime value) Report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Limited to 100 Gatcha Orders Monthly, Additional will cost $2 per Gatcha Ticket Purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Only available for Shopify Basic + Shopify plans</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-[#ffbd59]">Growth</CardTitle>
              <div className="text-3xl font-bold text-white">
                ${calculatePrice(99)} <span className="text-lg text-gray-300">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Everything included in Starter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Brand Customization Options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>
                    Additional placements include free Gatcha every order, e-mail placements, upsell / cart add-on
                    placements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Additional Analytics, P&L Report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>
                    Limited to 250 Gatcha Orders Monthly, Additional will cost $1.5 per Gatcha Ticket Purchase
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Available for all plans up to Advanced</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white">
            <CardHeader>
              <CardTitle className="text-[#ffbd59]">Advanced</CardTitle>
              <div className="text-3xl font-bold text-white">
                ${calculatePrice(249)} <span className="text-lg text-gray-300">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Everything included in Starter + Growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Done for you set up service + onboarding manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Includes 1,000 Gatcha Ticket Purchases (Additional $1 per Extra Gatcha Ticket Purchase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Priority VIP Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Estimated ROI to be $5,000+ / month based on $5 Gatcha Tickets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">•</span>
                  <span>Available for all plans up to Advanced</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <Card className="bg-transparent border-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[#ffbd59] mb-4">Enterprise</h3>
              <p className="text-gray-300">
                <a href="mailto:hi@gatcha.io" className="text-[#ffbd59] hover:underline">
                  Contact us
                </a>{" "}
                for additional information and pricing tailored to your business needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

