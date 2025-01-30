import { ShoppingCart, Grid, Maximize2, TrendingUp } from "lucide-react"

export function Placements() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Placements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The flexibility to place Gatcha in multiple places where it will generate the most revenue for you!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-4 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
              <ShoppingCart className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold">
              Shopping
              <br />
              Cart
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-4 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
              <Grid className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold">
              Shopping
              <br />
              Catalog
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-4 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
              <Maximize2 className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold">
              Popup
              <br />
              Placement
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-4 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
              <TrendingUp className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold">
              Post-Purchase
              <br />
              Upsell
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

