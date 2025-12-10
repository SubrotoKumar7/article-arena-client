import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate } from 'react-router';
import toast from 'react-hot-toast';

const UserRoute = ({children}) => {
    const {role: {role}, roleLoading} = useRole();
    const {logoutUser} = useAuth();

    if(roleLoading){
        return <Loader></Loader>
    }

    if(role !== 'user'){
        logoutUser()
        .then(()=> {
            toast.error('Unauthorized Access');
        })

        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default UserRoute;