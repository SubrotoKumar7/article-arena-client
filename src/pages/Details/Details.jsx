import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container/Container';
import Winner from '../../components/Winner/Winner';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const axiosSecure = useAxiosSecured();
    const { id } = useParams();
    const {user} = useAuth();

    const [timeLeft, setTimeLeft] = useState("");
    const [isEnded, setIsEnded] = useState(false);

    const { data: contest = {}, isLoading } = useQuery({
        queryKey: ['contest', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest/${id}`);
            return res.data;
        }
    });

    useEffect(() => {
        if (!contest?.deadline) return;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const deadline = new Date(contest.deadline).getTime();
            const diff = deadline - now;

            if (diff <= 0) {
                setIsEnded(true);
                setTimeLeft("");
                clearInterval(interval);
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [contest?.deadline]);

    if (isLoading) {
        return <Loader />;
    }

    const handlePayment = async() => {
        const paymentInfo = {
            contestName: contest.contestName,
            contestImage: contest.image,
            price: contest.price,
            contestId: contest._id,
            customerEmail: user.email,
            description: contest.description
        };

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

        window.location.assign(res.data.url);
    }

    return (
        <div className='py-10'>
            <Container>
                <div>
                    <div className='w-full h-[350px] md:h-[450px] relative'>
                        <img
                            className='w-full rounded-xl absolute top-0 left-0 object-cover h-full'
                            src={contest.image}
                            alt="contest image"
                        />
                        <div className='w-full h-full rounded-xl absolute bg-black/20'></div>
                        <div className='absolute z-20 bottom-5 left-3 text-white'>
                            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                                {contest.contestName}
                            </h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-7'>
                        <div>
                            <h1 className='text-2xl font-bold mb-2'>Contest Details</h1>
                            <p>{contest.description}</p>

                            <div className='mt-4'>
                                <h1 className='mt-2 text-xl font-semibold'>How to Join</h1>
                                <ol className='space-y-2'>
                                    <li><span className='font-semibold'>Pay the Contest Fee:</span> Pay first</li>
                                    <li><span className='font-semibold'>Complete Registration:</span> Get registered</li>
                                    <li><span className='font-semibold'>Submit Task:</span> After registration</li>
                                    <li><span className='font-semibold'>Evaluation:</span> Judges will review</li>
                                </ol>
                            </div>

                            <div className='mt-5'>
                                <h1 className='mt-2 text-xl font-semibold'>Task Instruction</h1>
                                <p>{contest.taskInstruction}</p>
                            </div>
                        </div>

                        <div className='space-y-2 p-5 rounded-xl'>
                            <div className='flex justify-between text-lg'>
                                <span className='font-semibold'>Prize Money:</span>
                                <span className='text-primary'>${contest.prizeMoney}</span>
                            </div>

                            <div className='flex justify-between text-lg'>
                                <span className='font-semibold'>Participant:</span>
                                <span>{contest.participant}</span>
                            </div>

                            <div className='flex justify-between text-lg'>
                                <span className='font-semibold'>Category:</span>
                                <span>{contest.category}</span>
                            </div>

                            <div className='flex items-center justify-between text-lg'>
                                <span className='font-semibold'>Deadline:</span>
                                <span className={`text-center font-medium ${isEnded ? 'text-red-500' : 'text-blue-600'}`}>{isEnded ? "Contest Ended" : `${timeLeft}`}</span>
                            </div>


                            <div className='flex justify-between text-lg'>
                                <span className='font-semibold'>Contest Fee:</span>
                                <span>${contest.price}</span>
                            </div>

                            <div className='flex justify-between text-lg'>
                                <span className='font-semibold'>Created At:</span>
                                <span>{new Date(contest.createdAt).toDateString()}</span>
                            </div>

                            <button onClick={handlePayment} disabled={isEnded} className={`btn w-full mt-4 ${isEnded ? 'btn-disabled' : 'btn-primary'}`}>Pay Now</button>
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    {
                        isEnded && <Winner />
                    }
                </div>
            </Container>
        </div>
    );
};

export default Details;
