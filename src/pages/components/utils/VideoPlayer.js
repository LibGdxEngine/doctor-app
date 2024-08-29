// Component.jsx
import {useTranslation} from "react-i18next";

const VideoPlayer = () => {
    const {t, i18n} = useTranslation("common");
    return <div id="home-video"
                className="w-full flex flex-col sm:w-screen bg-light h-full items-center justify-center">
        <h1 className={`text-6xl sm:text-4xl my-5 font-extrabold`}>{t("HowToUse")}</h1>
        <div className="aspect-w-16 aspect-h-9 w-full">

            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CjcRacjsmYY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>

};

export default VideoPlayer;
