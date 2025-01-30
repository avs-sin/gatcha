"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-xs">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left py-4">How does Gatcha work?</AccordionTrigger>
            <AccordionContent>
              Gatcha is a gamification system that integrates with your e-commerce platform. It allows customers to
              purchase virtual "tickets" for a chance to win prizes or discounts. You control the prize pool and
              probabilities, ensuring that every play benefits your business while exciting your customers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left py-4">
              What customization options does Gatcha offer?
            </AccordionTrigger>
            <AccordionContent>
              Gatcha offers various customization options to match your brand. You can customize the appearance of the
              game interface, set your own prizes and probabilities, and choose where to place Gatcha in your customer
              journey (e.g., shopping cart, catalog, post-purchase). Higher-tier plans offer more advanced branding and
              placement options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left py-4">How is Gatcha priced?</AccordionTrigger>
            <AccordionContent>
              Gatcha offers tiered pricing plans starting from $39/month for our Starter plan. Each plan includes a set
              number of Gatcha orders per month, with additional orders charged at a per-ticket rate. We also offer
              yearly pricing with a 20% discount. For high-volume or custom needs, please contact us for Enterprise
              pricing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left py-4">
              How does Gatcha impact customer engagement and sales?
            </AccordionTrigger>
            <AccordionContent>
              Gatcha is designed to boost customer engagement and increase sales by adding an element of excitement to
              the shopping experience. It can help increase average order value, encourage repeat purchases, and create
              a fun, memorable brand interaction. Our analytics dashboard allows you to track the impact on key metrics
              like customer lifetime value and repeat purchase rates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left py-4">What kind of support does Gatcha offer?</AccordionTrigger>
            <AccordionContent>
              All Gatcha plans come with standard support. Our Growth and Advanced plans offer enhanced support options,
              including priority support for Advanced users. For Enterprise clients, we provide dedicated support and
              account management. We also offer a knowledge base, video tutorials, and regular webinars to help you get
              the most out of Gatcha.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

