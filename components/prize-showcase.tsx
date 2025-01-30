import Image from "next/image"

const prizes = [
  {
    name: "iPhone 15 Pro",
    image: "/placeholder.svg?height=400&width=400",
    tier: "GRAND",
    price: "$999",
  },
  {
    name: "PlayStation 5",
    image: "/placeholder.svg?height=400&width=400",
    tier: "EPIC",
    price: "$499",
  },
  {
    name: "Nike Air Max",
    image: "/placeholder.svg?height=400&width=400",
    tier: "EPIC",
    price: "$180",
  },
  {
    name: "AirPods Pro",
    image: "/placeholder.svg?height=400&width=400",
    tier: "RARE",
    price: "$249",
  },
  {
    name: "Amazon Gift Card",
    image: "/placeholder.svg?height=400&width=400",
    tier: "RARE",
    price: "$100",
  },
  {
    name: "Gaming Headset",
    image: "/placeholder.svg?height=400&width=400",
    tier: "RARE",
    price: "$80",
  },
  {
    name: "Store Credit",
    image: "/placeholder.svg?height=400&width=400",
    tier: "UNCOMMON",
    price: "$50",
  },
  {
    name: "Mystery Box",
    image: "/placeholder.svg?height=400&width=400",
    tier: "COMMON",
    price: "$25",
  },
  {
    name: "Discount Code",
    image: "/placeholder.svg?height=400&width=400",
    tier: "COMMON",
    price: "$10",
  },
]

const getTierStyles = (tier: string) => {
  switch (tier) {
    case "GRAND":
      return "from-purple-500 to-purple-700 bg-gradient-to-r"
    case "EPIC":
      return "from-cyan-400 to-blue-500 bg-gradient-to-r"
    case "RARE":
      return "from-green-400 to-emerald-600 bg-gradient-to-r"
    default:
      return "bg-black"
  }
}

export function PrizeShowcase() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Press Start 2P, cursive" }}>
            GATCHA PRIZES
          </h2>
          <p className="text-xl text-gray-600">Play and Win Something Exciting Today!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 rounded-2xl p-0.5 transition-all duration-300 group-hover:scale-[1.02]">
                <div className={`w-full h-full rounded-2xl ${getTierStyles(prize.tier)}`} />
              </div>
              <div className="relative bg-gray-100 rounded-2xl p-6">
                <div className="relative aspect-square mb-4">
                  <Image src={prize.image || "/placeholder.svg"} alt={prize.name} fill className="object-contain p-4" />
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-bold text-white rounded-full
                      ${
                        prize.tier === "GRAND"
                          ? "bg-gradient-to-r from-purple-500 to-purple-700"
                          : prize.tier === "EPIC"
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                            : prize.tier === "RARE"
                              ? "bg-gradient-to-r from-green-400 to-emerald-600"
                              : "bg-black"
                      }`}
                    style={{ fontFamily: "Press Start 2P, cursive", fontSize: "0.7rem" }}
                  >
                    {prize.tier}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1">{prize.name}</h3>
                  <p className="text-gray-600">{prize.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

