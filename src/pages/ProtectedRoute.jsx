import React from 'react';
import { Navigate } from 'react-router-dom';
// import your auth hook when ready:
// import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children, role }) {
    // TODO: replace with real auth/role check
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
