// components/Sidebar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import profileImage from "../../../../public/profile.svg";

const Sidebar = () => {
    const router = useRouter();

    const navItems = [
        { name: 'Profile', href: '/profile' },
        { name: 'History', href: '/history' },
        { name: 'Favorite', href: '/favorite' },
        { name: 'Notes', href: '/notes' },
    ];

    return (
        <div className="w-1/3 bg-white shadow-md">
            <div className="p-4">
                <Image
                    className="w-24 h-24 rounded-full mx-auto"
                    src={profileImage}
                    width={150}
                    height={150}
                    alt="Profile Picture"
                />
                <h2 className="mt-4 text-center text-xl font-semibold">Yomna Ashraf</h2>
                <p className="mt-2 text-center text-gray-600">Dr. of Physiology</p>
            </div>
            <nav style={{cursor:"pointer"}} className="mt-10">
                {navItems.map((item) => (
                    <div onClick={()=>{
                        router.push(item.href);
                    }} key={item.name} className={`h-28 ${router.asPath === item.href ? "bg-searchColor" : ""} 
                    flex items-center justify-center ${router.asPath === item.href ? "text-white" : "text-gray-500"} border border-gray-50`}>
                        {item.name}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
