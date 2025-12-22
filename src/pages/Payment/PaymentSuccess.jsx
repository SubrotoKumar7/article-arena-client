import React, { useEffect } from 'react';
import Container from '../../components/Shared/Container/Container';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecured from '../../hooks/useAxiosSecured';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecured();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(()=> {
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        }
    }, [sessionId, axiosSecure]);

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-base-200 py-10">
            <Container>
                <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md mx-auto">
                    <FaCheckCircle className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
                    <p className="text-gray-600 mb-6">Thank you for your payment. Your transaction has been completed successfully.</p>
                    <Link to={'/dashboard/joined-contest'} className="bg-primary text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">Go to Contests</Link>
                </div>
            </Container>
        </div>
    );
};

export default PaymentSuccess;
