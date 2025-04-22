import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Lawyers from '../Lawyers/Lawyers';

const Home = () => {
    return (
        <div className='w-9/11 mx-auto'>
        <Header/>
        <Lawyers/>
        <Services/>
        </div>
    );
};

export default Home;