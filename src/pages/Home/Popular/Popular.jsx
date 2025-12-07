import React from 'react';
import Heading from '../../../components/Shared/Heading/Heading';
import Container from '../../../components/Shared/Container/Container';
import ContestCard from '../../../components/ContestCard/ContestCard';
import { Link } from 'react-router';

const Popular = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading position={'text-center'} title={'Popular Contest'} subtitle={'Explore the most popular contests, featuring thousands of participants. Join the excitement, showcase your talent, and get a chance to win amazing prizes!'}></Heading>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-3  gap-5 md:gap-10 place-items-center'>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                </div>
                <div className='mt-10 mx-auto flex items-center justify-center'>
                    <Link className='btn btn-secondary' to={'/all-contests'}>Show All</Link>
                </div>
            </Container>
        </div>
    );
};

export default Popular;