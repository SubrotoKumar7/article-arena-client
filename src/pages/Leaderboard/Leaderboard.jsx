import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Heading from '../../components/Shared/Heading/Heading';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';

const Leaderboard = () => {
    const axiosData = useAxios();
    const {data: leaderboard = [], isLoading} = useQuery({
        queryKey: ['leaderboard'],
        queryFn: async()=> {
            const res = await axiosData.get('/leaderboard');
            return res.data;
        }
    });

    if(isLoading){
        return <Loader></Loader>
    }



    return (
        <div className='py-10'>
            <Container>
                <Heading title={'Leaderboard'} position={'text-center'}></Heading>
                <div className='py-10'>        
                    {
                        leaderboard.length > 0 ?
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>User</th>
                                        <td>Email</td>
                                        <th>Total Wins</th>
                                        <th>Total Prize</th>
                                        <th>Participant</th>
                                        <th>Winning Rate</th>
                                        <th>Recent Win</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        leaderboard.map((win, i) => 
                                            <tr key={win._id}>
                                                <th>{i + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                src={win.winnerPhoto}
                                                                alt="user image" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{win.winnerName}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{win._id}</td>
                                                <td>{win.totalWins}</td>
                                                <td>{win.totalPrize}</td>
                                                <td>{win.totalParticipations}</td>
                                                <td>{(win.winningPercentage).toFixed(2)}%</td>
                                                <td>{win.recentWin}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className='flex flex-col items-center justify-center h-[30vh]'>
                            <h1 className='font-bold text-3xl mb-2'>No winners yet.</h1>
                            <p className='text-center font-semibold'>Participate in contests to see your name here!</p>
                        </div>
                    }

                    
                </div>
            </Container>
        </div>
    );
};

export default Leaderboard;