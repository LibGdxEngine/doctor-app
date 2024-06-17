import {useEffect, useState} from 'react';
import NavBar from "@/pages/components/NavBar";
import Footer from "@/pages/components/Footer";
import {searchForQuestions} from "@/components/services/questions";
import {useAuth} from "@/context/AuthContext";
import {toast} from "react-toastify";
import QuestionCard from "@/pages/components/Questions/QuestionCard";

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const {token} = useAuth();


    const handleSearch = async (e) => {
        e.preventDefault();
        // Fetch initial data
        if(!token){
            toast.error("You need to login to search for questions");
            return;
        }
        if(query.length < 3){
            toast.error("Search query must be at least 3 characters long");
            return;
        }

        searchForQuestions(token, query).then((response) => {
            setResults(response.results);
            if(response.results.length === 0){
                toast.error("No results found");
            }
        }).catch((error) => {
            console.error('Error searching for questions:', error);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center">
            <NavBar/>
            <h1 className="text-4xl font-extrabold text-white my-8">Search Your Question</h1>
            <form onSubmit={handleSearch} className="w-full max-w-md flex items-center mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your search query"
                    className="flex-grow p-3 border border-gray-300 rounded-l-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                    type="submit"
                    className="p-3 bg-blue-600 text-white rounded-r-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    Search
                </button>
            </form>
            <div className="w-full max-w-md">
                {results.map((result) => (
                    <div
                        key={result.id}
                        className="p-4 bg-white rounded-lg shadow-lg mb-4 transform hover:scale-105 transition duration-300"
                    >
                        <QuestionCard question={result} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
