import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;