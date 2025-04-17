import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const user = await authService.getCurrentUser();
                    setCurrentUser(user);
                }
            } catch (err) {
                console.error('Auth status check failed:', err);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email, password) => {
        setError(null);
        try {
            const response = await authService.login(email, password);
            localStorage.setItem('token', response.token);
            setCurrentUser(response.user);
            return response.user;
        } catch (err) {
            setError(err.message || 'Login failed');
            throw err;
        }
    };

    const register = async (userData) => {
        setError(null);
        try {
            const response = await authService.register(userData);
            localStorage.setItem('token', response.token);
            setCurrentUser(response.user);
            return response.user;
        } catch (err) {
            setError(err.message || 'Registration failed');
            throw err;
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            localStorage.removeItem('token');
            setCurrentUser(null);
        }
    };

    const value = {
        currentUser,
        loading,
        error,
        login,
        register,
        logout,
        setCurrentUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};