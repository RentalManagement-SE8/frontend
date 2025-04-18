import api from './api';

export const rentalService = {
    list: async () => {
        const { data } = await api.get('/rentals');
        return data;
    },
    getById: async (id) => {
        const { data } = await api.get(`/rentals/${id}`);
        return data;
    },
    create: async (payload) => {
        const { data } = await api.post('/rentals', payload);
        return data;
    },
};
