import React from 'react';
import Banner from '../../components/Banner/Banner';
import Popular from './Popular/Popular';
import Motivation from './Motivation/Motivation';
import RecentWinner from './RecentWinner/RecentWinner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Motivation></Motivation>
            <RecentWinner></RecentWinner>
        </div>
    );
};

export default Home;