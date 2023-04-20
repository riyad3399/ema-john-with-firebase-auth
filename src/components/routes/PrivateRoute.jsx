import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <h3>Loading.........</h3>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace>Login</Navigate>;
};

export default PrivateRoute;