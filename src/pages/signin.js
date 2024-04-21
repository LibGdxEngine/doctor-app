import SignInPage from "@/pages/components/Auth/SignInPage";

export default function Signin() {
    return (
        <main
            className={`w-full h-full p-0 m-0 flex min-h-screen flex-col items-center justify-between `}
        >
            <div id={`main-container`} className={`w-full h-full flex flex-col items-center justify-start`}>
                <SignInPage />
            </div>
        </main>
    );
}
