import React from 'react';
import Container from '../../components/Shared/Container/Container';
import contestImg from '../../assets/environment.jpg';
import Winner from '../../components/Winner/Winner';

const Details = () => {
    return (
        <div className='py-10'>
            <Container>
                <div>
                    <div className='w-full h-[350px] md:h-[450px] relative'>
                        <img className='w-full rounded-xl absolute top-0 left-0 object-cover h-full' src={contestImg} alt="contest image" />
                        <div className='w-full h-full rounded-xl absolute bg-black/20'></div>
                        <div className='absolute z-20 bottom-5 left-3 text-white'>
                            <h1 className='text-2xl md:text-3xl font-semibold mb-2'> Global Warming Awareness Contest</h1>
                            <p>Join the movement to fight climate change and raise awareness about the impacts of global warming.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-7'>
                        <div>
                            <h1 className='text-2xl font-bold mb-2'>Contest Details</h1>
                            <div>
                                <p>The world is facing a climate crisis—rising temperatures, environmental pollution, and deforestation are threatening our future. We believe that change starts with awareness and action. That’s why we’re hosting the "Global Warming: Our Planet, Our Responsibility" contest.</p>
                                <div className='mt-4'>
                                    <h1 className='mt-2 text-xl font-semibold'>How to Join</h1>
                                    <ol className='space-y-2'>
                                        <li><span className='font-semibold'>Pay the Contest Fee:</span> To join the contest, participants must first pay the contest fee.</li>
                                        <li><span className='font-semibold'>Complete the Registration:</span> After payment, you will be officially registered for the contest.</li>
                                        <li><span className='font-semibold'>Submit Your Task:</span> Once registered, you can submit your task (an article, essay, poem, or other creative content) via the "Submit Task" button on the contest page.</li>
                                        <li><span className='font-semibold'>Task Evaluation:</span> Your submission will be evaluated by the contest judges.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 p-5'>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Price Money:</span> <span className='text-primary'>$10000</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Participant:</span> <span>100</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Contest Category:</span> <span>Environment</span></div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Deadline:</span> 5 day</div>
                            <div className='flex justify-between text-lg'><span className='font-semibold'>Contest Fee:</span> $100</div>
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
