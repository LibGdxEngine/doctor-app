import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import useScrollPosition from "../utils/useScrollPosition";

export default function HomePage() {
  const isScrolled = useScrollPosition({ threshold: 10 });
  return (
    <div className="w-full relative min-h-screen">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/back1.png"
          alt="Background image showing hands working with assistance equipment"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Main content */}
      <div className="relative z-20">
        {/* Header/Navigation */}
        <header className={`fixed top-0 left-0 right-0 z-50
          flex items-center justify-between px-8 md:px-16
          py-4
          transition-transform duration-800 ease-in-out
          ${isScrolled
            ? 'bg-white shadow-lg' // White background and shadow when scrolled
            : 'bg-transparent shadow-none' // Transparent background and no shadow at the top
          }
          `}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-orange-500 font-bold text-2xl">
                <Image
                  src="/newdesign.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto mr-2" />
              </div>
              <div className="ml-2 flex flex-col">
                <span className={`${isScrolled ? "text-gray-900": "text-white"}  font-bold uppercase text-lg tracking-wider`}> Infinity Plus </span>
                <span className="text-orange-400 text-xs italic">your strong partner</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-orange-400 transition-colors `}>
            Assistance Recipient
          </Link>
          <Link href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-orange-400 transition-colors `}>
            Become an Assistant
          </Link>
          <Link href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-orange-400 transition-colors `}>
            Personal Budget
          </Link>
          <Link href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-orange-400 transition-colors `}>
            Benefits Provider
          </Link>
          <Link href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-orange-400 transition-colors `}>
            About Us
          </Link>
          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Request Assistance
          </Link>
        </nav>
        </header>

        {/* Hero Content */}
        <main className="px-8 py-16 md:px-16 md:py-24 max-w-4xl flex flex-col items-center md:items-start justify-center min-h-screen">
         

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Infinity Plus 
          </h1>

          <p className="text-white text-lg mb-8 max-w-2xl hidden md:block">
            Mit Seiler Assistenz an Ihrer Seite, ein Leben voller Freiheit und Unabhängigkeit genießen: Egal ob im
            Privat- oder Berufsalltag - mit uns an Ihrer Seite meistern Sie jede Herausforderung.
          </p>

          <Link
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Jetzt Assistent*in Anfragen
          </Link>

          {/* Contact options */}
          <div className="mt-16 flex items-center space-x-8">
            <Link href="#" className="flex items-center text-white hover:text-orange-400 transition-colors">
              <MessageCircle className="mr-2" />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="tel:02273 9515274"
              className="flex items-center text-white hover:text-orange-400 transition-colors"
            >
              <Phone className="mr-2" />
              <span>02273 9515274</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
