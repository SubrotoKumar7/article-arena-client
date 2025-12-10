import React from 'react';
import useRole from '../hooks/useRole';
import Loader from '../components/Loader/Loader';
import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const AdminRoute = ({children}) => {
    const {role: {role}, roleLoading} = useRole();
    const {logoutUser} = useAuth();


    if(roleLoading){
        return <Loader></Loader>
    }

    if(role !== 'admin'){
        logoutUser()
        .then(()=> {
            toast.error('Unauthorized Access');
        })
        
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default AdminRoute;