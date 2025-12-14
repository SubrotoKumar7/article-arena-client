import React from 'react';
import useRole from '../../../hooks/useRole';
import AdminHome from '../Admin/AdminHome/AdminHome';
import Loader from '../../../components/Loader/Loader';
import CreatorHome from '../Creator/CreatorHome/CreatorHome';
import UserHome from '../User/UserHome/UserHome';

const DashboardHome = () => {
    const {role: {role}, roleLoading} = useRole();

    if(roleLoading){
        return <Loader></Loader>
    }

    if(role === 'admin'){
        return <AdminHome></AdminHome>
    }

    if(role === 'creator'){
        return <CreatorHome></CreatorHome>
    }

    if(role === 'user'){
        return <UserHome></UserHome>
    }

};

export default DashboardHome;