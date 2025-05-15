import Image from "next/image"
// import { Button } from "@/components/ui/button" // Assuming this Button component is itself JS or already converted
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export default function Eighth() {
  return (
    <div className="w-full bg-[#f4f4f4] py-36 px-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="/Seila-Assistenz25.jpg"
                  alt="Assistant helping person in wheelchair outdoors"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div>
                <Image
                  src="/Seila-Assistenz25.jpg"
                  alt="Assistant shaking hands with person in wheelchair"
                  width={280}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div>
                <Image
                  src="/Seila-Assistenz25.jpg"
                  alt="Assistant helping person in wheelchair cross the street"
                  width={280}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </div>
          </div>

         

          {/* Right images */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What we do for you:
            </h2>

        


            <ul className="space-y-4 mb-8">
              {[
                "Wir bieten Dir faire und flexible Arbeitszeiten.",
                "Eine attraktive Bezahlung ist bei uns selbstverständlich.",
                "Wir sorgen für Deine finanzielle Absicherung.",
                "Regelmäßige Feedbackgespräche sind Teil unserer Kultur.",
                "Wir bieten Dir faire und flexible Arbeitszeiten.",
                "Eine attraktive Bezahlung ist bei uns selbstverständlich.",
                "Wir sorgen für Deine finanzielle Absicherung.",
                "Regelmäßige Feedbackgespräche sind Teil unserer Kultur.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full mt-1 mr-3"></span>
                  <span className="text-gray-800">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
            href="/kontakt"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group"
          >
            Starten Sie jetzt Ihr selbstbestimmtes Leben mit Seiler Assistenz.
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
            {/* This Button component would need to be a JS/JSX component itself */}
           
          </div>
        </div>
      </div>
    </div>
  )
}