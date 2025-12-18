import React from 'react';
import Container from '../../components/Shared/Container/Container';
import Winner from '../../components/Winner/Winner';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';

const Details = () => {
    const axiosSecure = useAxiosSecured();
    const {id} = useParams();
    const {data: contest = [], isLoading} = useQuery({
        queryKey: ['contest', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest/${id}`);
            return res.data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }


    return (
        <div className='py-10'>
            <Container>
                <div>
                    <div className='w-full h-[350px] md:h-[450px] relative'>
                        <img className='w-full rounded-xl absolute top-0 left-0 object-cover h-full' src={contest.image} alt="contest image" />
                        <div className='w-full h-full rounded-xl absolute bg-black/20'></div>
                        <div className='absolute z-20 bottom-5 left-3 text-white'>
                            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{contest.contestName}</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-7'>
                        <div>
                            <h1 className='text-2xl font-bold mb-2'>Contest Details</h1>
                            <div>
                                <p>{contest.description}</p>
                                <div className='mt-4'>
                                    <h1 className='mt-2 text-xl font-semibold'>How to Join</h1>
                                    <ol className='space-y-2'>
                                        <li><span className='font-semibold'>Pay the Contest Fee:</span> To join the contest, participants must first pay the contest fee.</li>
                                        <li><span className='font-semibold'>Complete the Registration:</span> After payment, you will be officially registered for the contest.</li>
                                        <li><span className='font-semibold'>Submit Your Task:</span> Once registered, you can submit your task (an article, essay, poem, or other creative content) via the "Submit Task" button on the contest page.</li>
                                        <li><span className='font-semibold'>Task Evaluation:</span> Your submission will be evaluated by the contest judges.</li>
                                    </ol>
                                </div>
                                <div className='mt-5'>
                                    <h1 className='mt-2 text-xl font-semibold'>Task Instruction</h1>
                                    <p>{contest.taskInstruction}</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 p-5'>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Price Money:</span> <span className='text-primary'>${contest.prizeMoney}</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Participant:</span> <span>{contest.participant}</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Contest Category:</span> <span>{contest.category}</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Deadline:</span>{new Date(contest.deadline).toDateString()}</div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Contest Fee:</span> ${contest.price}</div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Created At:</span> {new Date(contest.createdAt).toDateString()}</div>
                            <button className='btn btn-primary'>Pay Now</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <Winner></Winner>
                </div>
            </Container>
        </div>
    );
};

export default Details;
