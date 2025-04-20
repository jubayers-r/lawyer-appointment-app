import React from 'react';
import Navbar from '../Navbar/Navbar';

const Error = () => {
    return (
        <>
            <Navbar/>
            <div className='space-y-5 text-center h-screen flex flex-col justify-center'>
                <div className='w-screen p-5'>
                <img src="/src/assets/error.jpg" className='rounded-xl mx-auto'/>
                </div>
                <h3 className='text-4xl font-bold text-red-400'>404 - Page Not Found</h3>
                <p className='text-lg'>Oops! The page you are looking for doesn't exist.</p>
            </div>
        </>
    );
};

export default Error;