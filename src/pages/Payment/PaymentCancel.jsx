import React from 'react';
import Container from '../../components/Shared/Container/Container';
import { FaTimesCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';

const PaymentCancel = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-10">
            <Container>
                <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md mx-auto">
                    <FaTimesCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Cancelled</h1>
                    <p className="text-gray-600 mb-6">
                        Your payment was not completed. Please try again or contact support if the issue persists.
                    </p>
                    <div className='flex gap-2 justify-center'>
                        <Link to={navigate(-1)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">Back to Contests</Link>
                        <Link to={'/'} className='btn btn-primary'>Go Home</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PaymentCancel;
