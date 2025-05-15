import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Fourth() {
  return (
    <div className="container mx-auto px-12 py-36 md:py-24  bg-[#FDF8F3]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side - Illustration */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-orange-500 font-medium">
            Assistenzdienst Köln - Ihr 24/7 Experte für qualifizierte Hilfe
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Gemeinsam für ein selbstbestimmtes Leben
          </h1>

          <div className="text-gray-700 text-lg">
            <p>
              Bei Seiler Assistenz in Köln steht der Mensch im Mittelpunkt. Wir sind mehr als nur ein Assistenzdienst -
              wir sind Ihr zuverlässiger Partner für ein selbstbestimmtes Leben. Unsere Mission ist es, Menschen mit
              Behinderungen im Alltag zu unterstützen und ihre Unabhängigkeit zu fördern.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group"
          >
            Starten Sie jetzt Ihr selbstbestimmtes Leben mit Seiler Assistenz.
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
       

        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Seiler-Assistenzdienst2.png"
            alt="Illustration of a person assisting someone in a wheelchair"
            width={600}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
