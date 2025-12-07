import { FaRocket } from "react-icons/fa";
import Heading from "../../../components/Shared/Heading/Heading";

const Motivation = () => {
    return (
        <div className="bg-linear-to-r from-blue-500 via-blue-700 to-blue-600 text-white py-10">
            <div className="container mx-auto px-4 text-center">
                
                <Heading customClass={'text-3xl md:text-4xl'} position={'text-center'} title={'The only limit is your imagination. Dare to create, dare to win!'}></Heading>

                <p className="text-xl pt-5 pb-7">Join the challenge, push your creativity to new heights, and unlock endless possibilities. Your moment to shine is here!</p>

                <div className="flex justify-center">
                    <FaRocket size={30} className="text-6xl text-yellow-400 animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Motivation;
