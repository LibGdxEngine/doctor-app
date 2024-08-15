import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Import flag images
import usaFlag from '../../../../public/flag1.svg'
import flag2 from '../../../../public/flag2.svg'

import dropdownIcon from '../../../../public/dropdownIcon.svg'

const LanguageDropdown = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (language) => {
        // Implement language change logic
        console.log("Selected language:", language);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center w-full shadow-sm
                    px-4 py-2  text-sm font-medium text-gray-700 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src={router.locale === 'en' ? usaFlag : flag2}
                        alt={router.locale === 'en' ? 'USA Flag' : 'Ukrainian Flag'}
                        width={24}
                        height={24}
                    />
                    <span className="ml-2">{router.locale === 'en' ? 'English' : 'Ukrainian'}</span>
                    <Image src={dropdownIcon} alt={``} width={30} height={30} />
                </button>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" onClick={() => handleLanguageChange('en')}>
                            <Image src={usaFlag} alt="USA Flag" width={24} height={24} className="inline mr-2" />
                            English
                        </button>
                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" onClick={() => handleLanguageChange('fr')}>
                            <Image src={flag2} alt="France Flag" width={24} height={24} className="inline mr-2" />
                            Ukrainian
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
