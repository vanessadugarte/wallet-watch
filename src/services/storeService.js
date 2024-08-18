import api from "../configs/axiosConfig";

export const createStore = async (data) => {
    try {
        const response = await api.post('/api/store/', data);
        console.log('Respuesta:', response.data);
    } catch (error) {
        console.error('Error al crear la tienda:', error);
    }
};