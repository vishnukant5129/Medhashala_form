import api from "../api/axios.js";

export const createPayment = async (userId) => {
    const response = await api.post(`/payment/create/${userId}`);
    return response.data;
};

export const verifyPayment = async (paymentId) => {
    const response = await api.put(`/payment/verify/${paymentId}`);
    return response.data;
};