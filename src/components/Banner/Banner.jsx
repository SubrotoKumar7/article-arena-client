import React from 'react';
import bgImg from '../../assets/background.jpg';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative text-white h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-10 bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl sm:text-4xl  font-semibold mb-4 leading-tight"> Unleash Your Creativity: Write Your Best Article</h1>
                <p className="text-xl mb-8">Submit your entries now and stand a chance to showcase your talent.</p>

                <div className="relative flex justify-center">
                    <div className="join">
                        <input className="input join-item text-black" placeholder="Search contest..." />
                        <button className="btn join-item btn-primary">Search</button>
                    </div>
                </div>

                <div className="mt-10">
                    <Link className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition" to={'/register'}>Join the Contest</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;