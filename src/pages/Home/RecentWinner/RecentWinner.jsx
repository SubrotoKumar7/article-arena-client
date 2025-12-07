import React from 'react';
import Container from '../../../components/Shared/Container/Container';
import Heading from '../../../components/Shared/Heading/Heading';
import WinnerCard from '../../../components/WinnerCard/WinnerCard';
import TotalWinnerCard from '../../../components/TotalWinnerCard/TotalWinnerCard';
import TotalPriceMoney from '../../../components/TotalPriceMoney/TotalPriceMoney';

const RecentWinner = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading position={'text-center'} title={'Meet Our Recent Champions'} subtitle={'Celebrating the outstanding achievements of our winners. See who rose to the top and claimed the prize!'}></Heading>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 pt-10'>
                    <TotalWinnerCard></TotalWinnerCard>
                    <WinnerCard></WinnerCard>
                    <TotalPriceMoney></TotalPriceMoney>
                </div>
            </Container>
        </div>
    );
};

export default RecentWinner;
