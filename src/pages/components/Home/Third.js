import Image from "next/image";
import Link from "next/link";

// Removed the TypeScript type definition for ServiceCard

// The data array remains, just without the type annotation
const services = [
  {
    id: "personal-assistance",
    title: "Persönliche Assistenz",
    description: "Individuelle Unterstützung bei alltäglichen Aufgaben.",
    imageUrl: "/1.jpg",
    imageAlt: "Person shaking hands with someone in a wheelchair",
  },
  {
    id: "mobility-help",
    title: "Mobilitätshilfe",
    description: "Bereitstellung von Rollstühlen und Gehhilfen.",
    imageUrl: "/2.jpg",
    imageAlt: "People assisting someone in a wheelchair outdoors",
  },
  {
    id: "application-help",
    title: "Antragshilfe",
    description: "Wir unterstützen bei der Beantragung verschiedener Anträge.",
    imageUrl: "/1.jpg",
    imageAlt: "People working on paperwork at a desk",
  },
  {
    id: "household-help",
    title: "Haushaltshilfe",
    description: "Unterstützung bei der Haushaltsführung und täglichen Aufgaben.",
    imageUrl: "/2.jpg",
    imageAlt: "Person helping with household tasks",
  },
  {
    id: "care-services",
    title: "Pflegedienste",
    description: "Professionelle Pflegeleistungen für verschiedene Bedürfnisse.",
    imageUrl: "/1.jpg",
    imageAlt: "Caregiver assisting someone at home",
  },
  {
    id: "social-participation",
    title: "Soziale Teilhabe",
    description: "Begleitung bei sozialen Aktivitäten und Veranstaltungen.",
    imageUrl: "/2.jpg",
    imageAlt: "Group of people participating in a social activity",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 mx-12 md:grid-cols-2 lg:grid-cols-3 gap-6 py-36">
      {services.map((service) => (
        <div key={service.id} className="bg-[#FDF8F3] rounded-2xl overflow-hidden flex flex-col h-full">
          <div className="relative h-48 w-full">
            {/* The Image component and its props remain the same */}
            <Image src={service.imageUrl || "/placeholder.svg"} alt={service.imageAlt} fill className="object-cover" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <div className="mt-auto">
              {/* The Link component remains the same */}
              <Link href={`/services/${service.id}`} className="text-orange-500 hover:text-orange-600 font-medium">
                  Jetzt Assistent*in Anfragen
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}