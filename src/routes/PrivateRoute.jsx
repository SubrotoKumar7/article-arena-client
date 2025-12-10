import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate, useLocation } from 'react-router';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {
    const {user, loading, logoutUser} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(!user){
        logoutUser()
        .then(()=> {
            toast.error("Unauthorized Access");
        })
        
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;