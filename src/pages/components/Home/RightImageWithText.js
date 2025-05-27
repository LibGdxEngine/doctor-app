import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RightImageWithText() {
    return (
        <div className="w-full py-16 md:pt-24  overflow-hidden">
            <div className=" mx-8 md:mx-36 ">

          
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                    {/* Left side - Illustration */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* <h2 className="text-orange-500 font-medium">
            Assistenzdienst Bochum - Ihr 24/7 Experte für qualifizierte Hilfe
          </h2> */}

                        <h1 className="text-2xl md:text-4xl font-semibold  text-gray-900 leading-tight">
                            Ganzheitliche Unterstützung für ein unabhängiges Leben
                        </h1>

                        <div className="text-gray-700 text-base">
                            <p>
                                Unsere umfassenden Assistenzdienste sind darauf ausgelegt, Menschen mit körperlichen Behinderungen ein selbstbestimmtes und unabhängiges Leben zu ermöglichen. Durch individuelle Unterstützung in verschiedenen Lebensbereichen fördern wir Ihre Autonomie und Lebensqualität. Wir bieten maßgeschneiderte Lösungen, die auf Ihre spezifischen Bedürfnisse abgestimmt sind, sei es im Alltag, bei der Mobilität, am Arbeitsplatz oder im Haushalt. Unser Ziel ist es, Ihnen die bestmögliche Unterstützung zu bieten, damit Sie Ihre täglichen Herausforderungen souverän meistern können und Ihre Lebensfreude nicht zu kurz kommt. Mit unserem engagierten Team stehen wir Ihnen in allen Lebenslagen zur Seite und sorgen dafür, dass Sie sich rundum wohlfühlen.
                            </p>
                        </div>


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

        </div>
    )
}
