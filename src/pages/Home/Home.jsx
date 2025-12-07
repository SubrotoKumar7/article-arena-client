import React from 'react';
import Banner from '../../components/Banner/Banner';
import Popular from './Popular/Popular';
import Motivation from './Motivation/Motivation';
import RecentWinner from './RecentWinner/RecentWinner';
import HowItWork from '../../components/HowItWork/HowItWork';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Motivation></Motivation>
            <RecentWinner></RecentWinner>
            <HowItWork></HowItWork>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;