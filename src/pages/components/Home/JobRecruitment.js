import Image from "next/image"
// import { Button } from "@/components/ui/button" // Assuming this Button component is itself JS or already converted

export default function JobRecruitment() {
  return (
    <div className="bg-[#FDF8F3] py-16 md:py-24 lg:py-32">
      <div className="mx-8 md:mx-36 ">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Bewirb Dich jetzt als Assistent*in (w/m/d) bei Seiler Assistenz
            </h2>

            <p className="text-gray-700 mb-8 text-sm">
              Werde Teil unseres Teams und unterstütze Menschen dabei, ein selbstbestimmtes Leben zu führen. Bei Seiler
              Assistenz erwartet dich ein Job mit großer Wirkung, in dem Deine Arbeit wertgeschätzt wird. Bewirb Dich
              jetzt und profitiere von fairen Arbeitsbedingungen, attraktiver Bezahlung und einem Team, das immer für
              Dich da ist.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Das macht die Arbeit bei Seiler Assistenz besonders:
            </h3>

            <ul className="space-y-4 mb-8">
              {[
                "Wir bieten Dir faire und flexible Arbeitszeiten.",
                "Eine attraktive Bezahlung ist bei uns selbstverständlich.",
                "Wir sorgen für Deine finanzielle Absicherung.",
                "Regelmäßige Feedbackgespräche sind Teil unserer Kultur.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full mt-1 mr-3"></span>
                  <span className="text-gray-800 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* This Button component would need to be a JS/JSX component itself */}
           
          </div>

          {/* Right images */}
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
        </div>
      </div>
    </div>
  )
}