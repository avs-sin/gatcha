import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gradient-to-br from-black via-black to-[#1a1a1a]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-16">
              We are eager to discuss your business needs and answer any questions you may have
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Phone Contact */}
              <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffbd59]/10 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-[#ffbd59]" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Call us at</h2>
                    <a href="tel:650-296-3582" className="text-[#ffbd59] hover:underline text-lg">
                      650-296-3582
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffbd59]/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-[#ffbd59]" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Email us at</h2>
                    <a href="mailto:hi@gatcha.io" className="text-[#ffbd59] hover:underline text-lg">
                      hi@gatcha.io
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

