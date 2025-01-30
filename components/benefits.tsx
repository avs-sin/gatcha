import { TrendingUp, RepeatIcon, Sparkles } from 'lucide-react'

export function Benefits() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          <div className="flex flex-col items-center text-center px-2">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-6">
              <TrendingUp className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold max-w-[180px] mx-auto leading-tight">Supercharge AOV+ and customer spend</h3>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-6">
              <RepeatIcon className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold max-w-[180px] mx-auto leading-tight">Increase Repeat Purchases</h3>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="bg-[#ffbd59] rounded-full p-4 mb-6">
              <Sparkles className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-lg font-semibold max-w-[180px] mx-auto leading-tight">Create Excitement for your Customers</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

