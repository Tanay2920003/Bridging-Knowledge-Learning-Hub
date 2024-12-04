// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
    if (!user) {
        // Redirect to login page if user is not authenticated
        return <Navigate to="/" replace />;
    }
    return children;
};

export default PrivateRoute;
