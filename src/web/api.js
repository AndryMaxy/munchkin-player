import axios from './axios';

export default {
    create: async (name, sex) => {
        const response = await axios.post(`/player/${name}?sex=${sex}`);
        return response.data;
    },

    get: async (name) => {
        const response = await axios.get(`/player/${name}`);
        return response.data;
    },

    update: async (player) => {
        const body = JSON.stringify(player);
        const headers = { 'Content-Type': 'application/json' };

        const response = await axios.put(`/player`, body, { headers });
        return response.data;
    },
};
