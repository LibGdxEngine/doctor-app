import Image from "next/image"
// import { Button } from "@/components/ui/button" // Assuming this Button component is itself JS or already converted
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function JobRecruitment() {
  return (
    <div className="bg-[#FDF8F3] py-16 md:py-24 lg:py-32">
      <div className="mx-8 md:mx-36 ">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content */}
          <div className="w-full  lg:w-1/2">
            <div className="w-full h-full grid grid-cols-2 gap-4">
              <div className="mt-12 mb-12">
                <Image
                  src="/Seila-Assistenz25.jpg"
                  alt="Assistant helping person in wheelchair outdoors"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full "
                />
              </div>
              <div className="w-full h-full  flex flex-col justify-between items-center">
                <div className="w-full mt-8">
                <Image
                  src="/backend.png"
                  alt="Assistant shaking hands with person in wheelchair"
                  width={280}
                  height={200}
                  className="rounded-2xl object-cover w-full h-36 object-top"
                />
              </div>
              <div className="w-full mb-8">
                <Image
                  src="/mono.jpg"
                  alt="Assistant helping person in wheelchair cross the street"
                  width={280}
                  height={200}
                  className="rounded-2xl object-cover w-full h-60"
                />
              </div>
              </div>
            </div>
          </div>



          {/* Right images */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Unterstützung, die Dein Leben bereichert
            </h2>

            <p className="text-gray-700 mb-8 text-sm">
              Werde Teil unseres Teams und unterstütze Menschen dabei, ein selbstbestimmtes Leben zu führen. infinity-plus erwartet dich ein Job mit großer Wirkung, in dem Deine Arbeit wertgeschätzt wird. Bewirb Dich
              jetzt und profitiere von fairen Arbeitsbedingungen, attraktiver Bezahlung und einem Team, das immer für
              Dich da ist.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Das macht die Arbeit bei Infinity Plus besonders:
            </h2>

            <ul className="space-y-4 mb-8">
              {[
                "Wir bieten Dir faire und flexible Arbeitszeiten.",
                "Eine attraktive Bezahlung ist bei uns selbstverständlich.",
                "Wir sorgen für Deine finanzielle Absicherung.",
                "Regelmäßige Feedbackgespräche sind Teil unserer Kultur.",
                      "Wir sorgen für Deine finanzielle Absicherung.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full mt-1 mr-3"></span>
                  <span className="text-gray-800 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* This Button component would need to be a JS/JSX component itself */}
            <Link
              href="https://wa.me/4915773733381"
              target="_blank"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group text-base"
            >
              Starten Sie jetzt Ihr selbstbestimmtes Leben mit Infinity Plus.
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}