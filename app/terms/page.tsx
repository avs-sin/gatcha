import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-center italic">Effective January 21, 2025</p>

            <section>
              <p className="mb-6">
                Thank you for choosing Gatcha. Gatcha is a company focused on developing eCommerce gamification
                solutions for online stores and marketplaces such as Shopify (each a "platform" and together
                "platforms"). Gatcha's applications bring together gamification, eCommerce, and customer loyalty to help
                store owners grow their business. These Terms of Service ("Terms" or "Agreement") apply to the
                applications and services (the "Services") provided by Gatcha. The terms and conditions of this
                Agreement and any guidelines, rules and policies incorporated herein form a legal and binding contract
                between you and Gatcha.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="font-semibold">
                  BY ACCEPTING THESE TERMS OF SERVICE, YOU AGREE TO THE TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU
                  ARE ENTERING INTO THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU
                  HAVE THE AUTHORITY TO BIND SUCH ENTITY AND ITS AFFILIATES TO THIS AGREEMENT, IN WHICH CASE THE TERMS
                  "YOU" OR "YOUR" SHALL REFER TO SUCH ENTITY AND ITS AFFILIATES. IF YOU DO NOT HAVE SUCH AUTHORITY, OR
                  IF YOU DO NOT AGREE WITH THESE TERMS, YOU MAY NOT USE THE SERVICES.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Services</h2>
              <p className="mb-4">
                Gatcha provides a gamification platform that allows merchants to create engaging shopping experiences
                through prize-based incentives, loyalty programs, and inventory management solutions. The Services may
                include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Prize game creation and management</li>
                <li>Customer loyalty program integration</li>
                <li>Analytics and reporting tools</li>
                <li>Inventory management features</li>
                <li>Customer engagement tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Account Terms</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>You must be 18 years or older to use this Service.</li>
                <li>You must provide accurate and complete information when creating an account.</li>
                <li>You are responsible for maintaining the security of your account credentials.</li>
                <li>You are responsible for all activities that occur under your account.</li>
                <li>You must immediately notify Gatcha of any unauthorized use of your account.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Payment Terms</h2>
              <p className="mb-4">
                A valid payment method is required for paid Services. If you fail to pay for the Services, Gatcha may
                suspend or terminate your access to the Services. Fees are non-refundable except as required by law or
                as explicitly stated in this Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Modifications to the Service and Prices</h2>
              <p className="mb-4">
                Gatcha reserves the right to modify or discontinue, temporarily or permanently, the Services with or
                without notice. Prices for all Services are subject to change upon 30 days notice from Gatcha. Such
                notice may be provided at any time by posting the changes to the Gatcha website or the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Customer Data and Privacy</h2>
              <p className="mb-4">
                You own all data you provide to Gatcha. By using our Services, you grant Gatcha a license to use,
                modify, and distribute such data as necessary to provide the Services. Gatcha's use of customer data is
                governed by our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property Rights</h2>
              <p className="mb-4">
                The Services and all related software, algorithms, designs, and systems are and shall remain the
                exclusive property of Gatcha. Your use of the Services does not grant you any rights to intellectual
                property except as explicitly stated in this Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
              <p className="mb-4">
                Gatcha may terminate or suspend your access to the Services at any time, with or without cause, with or
                without notice. Upon termination, your right to use the Services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Gatcha be liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use or inability to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to{" "}
                <a href="mailto:legal@gatcha.io" className="text-[#ffbd59] hover:underline">
                  legal@gatcha.io
                </a>
                .
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              These terms are effective as of January 21, 2025, and supersede all previous versions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

