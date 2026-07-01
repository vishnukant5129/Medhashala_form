import api from "../api/axios.js";

export const getDashboard = async (userId) => {
    const response = await api.get(`/dashboard/${userId}`);
    return response.data;
};