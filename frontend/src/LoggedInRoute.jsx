import React from 'react';
import { Navigate } from 'react-router-dom';

const LoggedInRoute = ({children}) => {
    const savedUser = sessionStorage.getItem('loggedInUser');

    return savedUser ? children : <Navigate to="/login" />;
}

export default LoggedInRoute;