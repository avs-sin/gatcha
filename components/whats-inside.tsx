import Image from 'next/image'
import { Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function WhatsInside() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-SmMA4o3f4MyKOdD4nWfoWJtNyZapDf.png",
      alt: "Gatcha Welcome Dashboard",
      tooltip: "Welcome Dashboard: Your gateway to Gatcha's powerful features"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-QawQiJGtPHOkuKeZqjP2rzk3pclmpf.png",
      alt: "Gatcha Analytics Dashboard",
      tooltip: "Analytics Dashboard: Gain insights into your Gatcha performance"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-XKdZDd3cU3LoxCndHDXcRRLCA4eT3M.png",
      alt: "Gatcha Settings Configuration",
      tooltip: "Settings Configuration: Customize Gatcha to fit your needs"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6tfx9zuHckrUUvIpojAob5iL7X5nuJ.png",
      alt: "Gatcha Prize Setup",
      tooltip: "Prize Setup: Configure exciting rewards for your customers"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Inside?</h2>
          <p className="text-xl text-gray-600">
            An exclusive sneak peek 👀
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg border border-gray-200 shadow-lg overflow-hidden relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="absolute top-2 right-2 rounded-full p-1 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" aria-label="More information">
                      <Info className="w-5 h-5 text-gray-600" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{image.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

