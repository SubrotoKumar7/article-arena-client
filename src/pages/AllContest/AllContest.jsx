import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Heading from '../../components/Shared/Heading/Heading';
import ContestCard from '../../components/ContestCard/ContestCard';

const AllContest = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading title={'Explore All Contests'} position={'text-center'}></Heading>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-3  gap-5 md:gap-10 place-items-center'>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                    <ContestCard></ContestCard>
                </div>
            </Container>
        </div>
    );
};

export default AllContest;