// components/Sidebar.js
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from "next/image";
import profileImage from "../../../../public/profile.svg";
import {useAuth} from "@/context/AuthContext";
import React from "react";
import profilePlaceHolder from "../../../../public/profile.svg";
import {useTranslation} from "react-i18next";

const Sidebar = React.memo(({user, onTapClicked, currentTap}) => {
    const {t, i18n} = useTranslation("common");
    const router = useRouter();
    const {logout} = useAuth();
    const navItems = [
        {name: 'Profile', href: 'profile'},
        {name: 'History', href: 'history'},
        {name: 'Favourite', href: 'favorite'},
        {name: 'Notes', href: 'notes'},
        // {name: 'Logout', href: 'logout'},
    ];
    let userProfilePhoto = profilePlaceHolder;
    if (user) {
        userProfilePhoto = user.profile_photo.toString().length <= 50 ? profilePlaceHolder : user.profile_photo;
    }

    if (!user) return <>
        Loading...
    </>;
    return (
        <div className="w-1/3 sm:w-full bg-white shadow-md">
            <div className="p-4">
                <Image
                    className="w-24 h-24 rounded-full mx-auto"
                    src={userProfilePhoto}
                    width={150}
                    height={150}
                    alt="Profile Picture"
                />
                <h2 className="mt-4 text-center text-xl font-semibold text-black">{user.first_name} {user.last_name}</h2>
                <p className="mt-2 text-center text-gray-600">{user.email}</p>
            </div>
            <nav style={{cursor: "pointer"}} className="mt-10 sm:grid sm:grid-cols-3">
                {navItems.map((item) => (
                    <div onClick={() => {
                        onTapClicked(item.href);
                    }} key={item.name}
                         className={`h-28 ${currentTap === item.href.toLowerCase().trim() ? "bg-searchColor" : ""} 
                    flex items-center justify-center ${currentTap === item.href.toLowerCase().trim() ? "text-white" : "text-gray-500"} border border-gray-50`}>
                        {t(`${item.name}`)}
                    </div>
                ))}
                <div onClick={() => {
                    logout();
                    // Navigate to the /signin page
                    router.replace('/signin').then(() => {
                        // Refresh the page after the route change is complete
                        window.location.reload();
                    });
                }}
                     className={`h-28 flex items-center justify-center border border-gray-50 text-red-500`}>
                    {t("Logout")}
                </div>

            </nav>
        </div>
    );
    Sidebar.displayName = "Sidebar";
});

export default Sidebar;
