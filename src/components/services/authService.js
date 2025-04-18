// frontend/src/services/authService.js
import api from './api';

export const authService = {
    // Sends { email, password } → returns { user, token, refreshToken }
    register: async (userData) => {
        const { data } = await api.post('/auth/register', userData);
        return data;
    },

    login: async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password });
        return data;
    },

    // If your gateway implements a "me" endpoint:
    getCurrentUser: async () => {
        const { data } = await api.get('/auth/me');
        return data.user || data;
    },

    // Optional, if you support server‐side logout
    logout: async () => {
        await api.post('/auth/logout');
    },
};
