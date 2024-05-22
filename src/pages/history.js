// pages/history.js
import React from 'react';
import Sidebar from "/src/pages/components/Profile/Sidebar"

const History = () => {
    return (
        <div className="w-full flex">
            <div className="min-h-screen flex-1 bg-gray-100 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg mt-10 p-8">
                    <h1 className="text-2xl font-bold mb-6">History</h1>
                    <div className="space-y-4">
                        {[1, 2].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg font-semibold">Mixed (study mood)</h2>
                                        <p className="text-gray-500">85% Completed</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Resume studying</button>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                                    </div>
                                </div>
                                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
