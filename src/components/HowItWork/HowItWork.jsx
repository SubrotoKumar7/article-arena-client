import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Shared/Heading/Heading';


const HowItWork = () => {
    return (
        <div className='py-10'>
            <Container>
                <Heading position={'text-center'} title={'How It Works'} subtitle={'Participating in our contests is simple. Follow these steps to get started:'}></Heading>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
                        <div className="bg-base-100 border border-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-primary">Step 1: Choose a Contest</h3>
                            <p>Browse through our available contests and pick the one that suits you best.</p>
                        </div>
                        <div className="bg-base-100 border border-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-primary">Step 2: Submit Your Work</h3>
                            <p>Upload your article, poem, or essay by following the submission guidelines.</p>
                        </div>
                        <div className="bg-base-100 border border-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-primary">Step 3: Win and Celebrate</h3>
                            <p>Get the chance to win exciting prizes and be recognized for your creative work!</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HowItWork;