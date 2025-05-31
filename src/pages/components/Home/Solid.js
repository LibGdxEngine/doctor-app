import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react'; // Using lucide-react for icons
import Link from 'next/link';
function Solid() {
    return (
        <div className='w-full h-screen flex flex-col bg-orange-400 items-center px-8 md:px-36 py-36 md:py-24'>
            <Image
                src="/newdesign.png" // Ensure this image is in your /public folder
                alt="Infinity Plus Logo"
                width={700}
                height={700}
                className="h-36 w-auto transition-all duration-300"
            />
            <div className='md:w-1/2 text-white text-2xl md:text-4xl font-bold text-center leading-tight mt-8'>
                Erleben Sie <span className='text-orange-500/80'>individuelle Unterstützung</span> und ein selbstbestimmtes Leben</div>

            <div className='md:w-1/2 text-white text-sm md:text-lg font-bold text-center leading-tight mt-8'>
                Bei Infinity Plus in Bochum stehen Sie im Mittelpunkt. Wir sind mehr als nur ein Assistenzdienst - wir sind Ihr zuverlässiger Partner
                für ein selbstbestimmtes Leben. Unsere Mission ist es, Menschen mit Behinderungen im Alltag zu unterstützen und ihre Unabhängigkeit zu fördern.
            </div>

            <Link href={`tel:4915773733381`} style={{"cursor": "pointer"}} className='w-full md:w-1/2 flex items-center justify-center bg-white  text-black font-bold py-4 px-4 rounded-lg mt-8 hover:bg-gray-200 transition duration-300'>
                <PhoneCall className="h-5 w-5  text-orange-500 group-hover:text-orange-600 transition-colors mr-4" />
                
                Jetzt Asisstenz anfragen
            </Link>

        </div>
    );
}

export default Solid;