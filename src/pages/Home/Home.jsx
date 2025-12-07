import React from 'react';
import Banner from '../../components/Banner/Banner';
import Popular from './Popular/Popular';
import Motivation from './Motivation/Motivation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Motivation></Motivation>
        </div>
    );
};

export default Home;