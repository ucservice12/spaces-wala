
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">Page Not Found</h2>
            <p className="mt-2 text-gray-500">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="mt-4 px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;