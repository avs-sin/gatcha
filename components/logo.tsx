import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyperduty%20(14)-oavZwzS2zE558mHuxYi03LC3yFhRDv.png"
        alt="GATCHA Logo"
        width={180}
        height={40}
        priority
      />
    </div>
  )
}

