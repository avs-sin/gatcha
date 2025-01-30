import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to Gatcha's Privacy Policy. At Gatcha, we are committed to protecting your personal information
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you use our SaaS platform for eCommerce gamification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Account information (name, email address, password)</li>
                <li>Business information (company name, website URL)</li>
                <li>Payment information</li>
                <li>Usage data and analytics related to your Gatcha campaigns</li>
                <li>Customer data provided through our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Analyze usage patterns and improve our platform</li>
                <li>Protect against, identify, and prevent fraud and other illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Sharing and Disclosure</h2>
              <p>
                We may share your information with third-party service providers who perform services on our behalf,
                such as payment processing, data analysis, email delivery, and hosting services. We do not sell your
                personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal
                information. However, please note that no method of transmission over the Internet or electronic storage
                is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights and Choices</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You can also object to or
                restrict certain processing of your data. To exercise these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@gatcha.io" className="text-[#ffbd59] hover:underline">
                  privacy@gatcha.io
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last Updated: January 21, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

