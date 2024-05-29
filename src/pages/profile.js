// pages/Profile.js
import React, {useEffect, useState} from 'react';
import Sidebar from "/src/pages/components/Profile/Sidebar"
import Image from "next/image";
import profileImage from "../../public/profile.svg";
import NavBar from "@/pages/components/NavBar";
import Footer from "@/pages/components/Footer";
import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/SplashScreen";
import {
    createExamJourney,
    deleteExamJourney, deleteFavouritesList,
    getExamJourney,
    getFavouritesLists,
    getUserHistoryExams
} from "@/components/services/questions";
import FavCard from "@/pages/components/Favourites/FavCard";
import {toast} from "react-toastify";
import QuestionCard from "@/pages/components/Favourites/QuestionCard";

function PersonalInfo({user}) {
    return <div className="w-full min-h-screen flex-1 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg mt-10 p-8">
            <div className="w-full  flex items-center justify-start">
                <Image
                    className="w-24 h-24 rounded-full mx-auto"
                    src={profileImage}
                    width={150}
                    height={150}
                    alt="Profile Picture"
                />
                <div className={`w-full `}>

                    <h1 className="text-2xl font-bold">{user.first_name} {user.last_name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className={`w-full flex items-center justify-center`}>
                <div className="w-full mt-6 me-2">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        value={user.first_name}
                        placeholder={`First Name`}
                        className="mt-1 me-2 py-2  px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    />
                </div>
                <div className="w-full mt-6 ms-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        value={user.last_name}
                        type="text"
                        placeholder={`Last Name`}
                        className="mt-1 ps-2 py-2 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    value={user.email}
                    type="email"
                    className="mt-1 ps-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={`Email`}
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                    type="password"
                    placeholder={`New Password`}
                    className="mt-1 ps-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    placeholder={`Confirm Password`}
                    className="mt-1 ps-2 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border
                             border-transparent shadow-sm text-sm font-medium rounded-md
                              text-white bg-navyBlue hover:bg-indigo-500 focus:outline-none focus:ring-2
                               focus:ring-offset-2 focus:ring-navyBlue"
                >
                    Save
                </button>
            </div>
        </div>
    </div>;
}

function History() {
    const router = useRouter();
    const {token, loading} = useAuth();
    const [examObject, setExamObject] = useState(null);
    useEffect(() => {
        if (token) {
            getUserHistoryExams(token).then((response) => {
                setExamObject(response);
            }).catch((error) => {
                console.error('Error fetching exam:', error);
            });
        }

    }, [token]);
    if (loading || !examObject) {
        return <SplashScreen/>
    }
    return <div className="w-full min-h-screen flex-1 flex flex-col items-center">
        <div className={`w-full max-w-4xl bg-white shadow-md rounded-lg mt-10 p-8`}>
            <h1 className="text-2xl font-bold mb-6">History</h1>
            <div className="space-y-4">
                {examObject.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">Type ({item.type} mood)</h2>
                                <p className="text-gray-500">{parseInt(item.current_question) / item.questions.length * 100}%
                                    Completed</p>
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => {
                                    router.push(`/quiz?id=${item.id}&q=${parseInt(item.current_question)}`);
                                }}
                                        className={`bg-blue-500 text-white px-3 py-1 rounded-md ${parseInt(item.current_question) / item.questions.length * 100 === 100 ? "hidden" : ""}`}>
                                    Resume studying
                                </button>
                                <button onClick={() => {
                                    deleteExamJourney(token, item.id).then((response) => {
                                        setExamObject(examObject.filter((exam) => exam.id !== item.id));
                                    });
                                }} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete
                                </button>
                            </div>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full"
                                 style={{width: `${parseInt(item.current_question) / item.questions.length * 100}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

function Favourites() {
    const router = useRouter();
    const {token, loading} = useAuth();
    const [favourites, setFavourites] = useState(null);
    const [showQuestions, setShowQuestions] = useState(false);
    const [selectedFavourite, setSelectedFavourite] = useState(null);

    useEffect(() => {
        if (token) {
            getFavouritesLists(token).then((response) => {
                setFavourites(response);
            }).catch((error) => {
                console.error('Error fetching favourites:', error);
            });
        }

    }, [token]);
    if (loading || !favourites) {
        return <SplashScreen/>
    }
    return <>
        {showQuestions ? <div className="w-full h-fit mt-10 flex-1 flex flex-row flex-wrap justify-center gap-6 items-center">
                <div className={`w-full `}>
                    <button onClick={() => {
                        setShowQuestions(false);
                    }} className={`w-fit px-2 mx-20 text-start text-red-700 rounded-full border-2 border-red-700`}>
                        X
                    </button>
                </div>
            {selectedFavourite.questions.map((question, index)=>{
                return <QuestionCard key={index} number={index+1} question={question.text} answers={question.answers} correctAnswer={question.correct_answer.answer} />
            })}
            </div>
            :
            <div className="w-full h-fit mt-10 flex-1 flex flex-row flex-wrap justify-center gap-6 items-center">
                {favourites.length === 0 ? <h1 className={`text-3xl mt-20`}>No favourites found</h1>: ""}
                {favourites.map((item, index) => {
                    return <FavCard key={index} title={item.name} numOfQuestions={item.questions.length}
                                    onDeleteClicked={() => {
                                        deleteFavouritesList(token, item.pkid).then((response) => {
                                            toast.success('Favourite deleted successfully');
                                            setFavourites(favourites.filter((fav) => fav.id !== item.id));
                                        });
                                    }}
                                    onShowQuestionsClicked={() => {
                                        setShowQuestions(!showQuestions);
                                        setSelectedFavourite(item);
                                    }}
                    />
                })}

            </div>
        }
    </>

}

const Profile = () => {
    const router = useRouter();
    const {user, token, loading} = useAuth();

    const [selectedTap, setSelectedTap] = React.useState('profile');

    useEffect(() => {
        if (!loading && !token) {
            router.push('/signin');
        }
    }, [token, loading, router]);

    if (loading) {
        return <SplashScreen/>
    }

    if (!user) {
        return <SplashScreen/>
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <NavBar/>
            <div className={`w-full flex`}>
                <Sidebar user={user} onTapClicked={(tap) => {
                    setSelectedTap(tap);
                }} currentTap={selectedTap}/>
                {selectedTap === 'profile' ? <PersonalInfo user={user}/> : ""}
                {selectedTap === 'history' ? <History/> : ""}
                {selectedTap === 'favorite' ? <Favourites/> : ""}
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;
