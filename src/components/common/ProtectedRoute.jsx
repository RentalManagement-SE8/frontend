import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

/**
 * A placeholder guard. Replace useAuth check with your real logic.
 */
export default function ProtectedRoute({ children, role }) {
    // Simple logged‑in check (token present)
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
