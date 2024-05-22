import React from 'react';
import Link from 'next/link';

const KrokSpecifics = () => {
    return (
        <div className={`w-full`}>
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Please choose your Krok specifics</h1>
            <div className="flex items-center text-green-500">
                <div style={{cursor:"pointer"}} className="text-2xl hover:underline">Go back to previous filter?</div>
            </div>
        </div>
    );
};

export default KrokSpecifics;
