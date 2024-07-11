import { useRouter } from "next/router";

export default function SectionsHeader() {
    const router = useRouter();
    return (
        <div id="sections-header" className="w-full relative mt-2 flex flex-col sm:flex-row items-center justify-center px-4"
             >
            <div className="w-full sm:w-auto flex-1 rounded-lg px-5 py-1 text-navyBlue
             border border-0.5 border-lightDark mx-1 mb-2 sm:mb-0"
                 onClick={() => {
                     router.push('/profile');
                 }}>
                Profile
            </div>
            <div className="w-full sm:w-auto flex-1 rounded-lg px-5 py-1 text-navyBlue border border-0.5 border-lightDark mx-1 mb-2 sm:mb-0">
                Discussion
            </div>
            <div
                onClick={() => {
                    router.push('/start');
                }}
                className="w-full sm:w-auto flex-1 rounded-lg px-5 py-1 text-navyBlue border border-0.5 border-lightDark mx-1 mb-2 sm:mb-0 cursor-pointer"
            >
                Quiz
            </div>
        </div>
    );
}
