import api from './api';

export const authService = {
    // Login with email and password
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },

    // Register a new user
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },

    // Get the current user's information
    getCurrentUser: async () => {
        const response = await api.get('/auth/me');
        return response.data;
    },

    // Logout the current user
    logout: async () => {
        return await api.post('/auth/logout');
    },

    // Request password reset
    requestPasswordReset: async (email) => {
        const response = await api.post('/auth/forgot-password', { email });
        return response.data;
    },

    // Reset password with token
    resetPassword: async (token, newPassword) => {
        const response = await api.post('/auth/reset-password', { token, newPassword });
        return response.data;
    },

    // Login with OAuth providers
    loginWithGoogle: async (token) => {
        const response = await api.post('/auth/google', { token });
        return response.data;
    },

    loginWithFacebook: async (token) => {
        const response = await api.post('/auth/facebook', { token });
        return response.data;
    },
};