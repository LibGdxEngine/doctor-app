import Link from "next/link"
import { Phone } from "lucide-react"

export default function Tenth() {
  return (
    <div className="w-full bg-gray-900 py-42 flex flex-col items-between justify-center text-white">
      <div className="h-full container mx-auto px-4">
        <div className="absolute w-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-3xl py-32 px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto mb-10 leading-tight">
            You deserve a life full of freedom and self-determination – and we are here to support you
          </h2>

          <Link
            href="tel:02273-9515274"
            className="inline-flex items-center bg-white text-orange-500 hover:bg-gray-100 transition-colors px-8 py-4 rounded-md font-medium"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call now
          </Link>
        </div>
      </div>
    </div>
  )
}
