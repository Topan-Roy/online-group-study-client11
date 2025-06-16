import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivetRoute = ({children}) => {
    const {user,loading}= use(AuthContext);
    // console.log(user)
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user&& user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate> 
};

export default PrivetRoute;