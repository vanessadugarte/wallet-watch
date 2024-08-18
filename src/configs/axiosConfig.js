import axios from 'axios';

const api = axios.create({
    baseURL: process.env.WALLET_WATCH_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados comunes aquí
    },
});

export default api;

