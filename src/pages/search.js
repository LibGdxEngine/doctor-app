import React, {useEffect, useState} from 'react';
import NavBar from "@/pages/components/NavBar";
import Footer from "@/pages/components/Footer";
import {searchForQuestions} from "@/components/services/questions";
import {useAuth} from "@/context/AuthContext";
import {toast, ToastContainer} from "react-toastify";
import QuestionCard from "@/pages/components/Questions/QuestionCard";
import {useRouter} from "next/router";
import SearchBar from "@/pages/components/Home/SearchBar";
import SectionsHeader from "@/pages/components/SectionsHeader";

const Search = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const [results, setResults] = useState([]);
    const {token} = useAuth();

    useEffect(() => {
        if (!token) {
            router.push('/signin');
        }
        if (router) {
            setQuery(router.query.token || '');
            handleSearch();
        }
    }, [router, token]);

    const handleSearch = async () => {

        // Fetch initial data
        if (!token) {
            toast.error("You need to login to search for questions");
            return;
        }
        if (query.length < 3) {
            toast.error("Search query must be at least 3 characters long");
            return;
        }

        searchForQuestions(token, query).then((response) => {
            setResults(response.results);
            if (response.results.length === 0) {
                toast.error("No results found");
            }
        }).catch((error) => {
            console.error('Error searching for questions:', error);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center">
            <div className={`w-full hidden md:block`}>
                <SearchBar/>
                {/*<SectionsHeader/>*/}
                <ToastContainer position={'bottom-center'} />
            </div>

            <NavBar/>
            <h1 className="text-4xl font-extrabold text-white my-8 text-center">Search Your Question</h1>

            <div className="w-full max-w-md">
                {results.map((result) => (
                    <div
                        key={result.id}
                        className="p-4 bg-white rounded-lg shadow-lg mb-4 transform hover:scale-105 transition duration-300"
                    >
                        <QuestionCard question={result}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
