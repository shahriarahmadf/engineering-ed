import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    // import context
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner variant='warning' animation='border'></Spinner>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;