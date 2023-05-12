import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const LoggedInRoute = ({children}) => {
    const savedUser = sessionStorage.getItem('loggedInUser');

    const location = useLocation();

    if (location.pathname === '/login') {
        return savedUser ? <Navigate to="/patientlist" /> : children;
    }

    return savedUser ? children : <Navigate to="/login" />;
}

export default LoggedInRoute;