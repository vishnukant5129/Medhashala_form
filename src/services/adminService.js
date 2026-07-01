import api from "../api/axios.js";

export const getAllUsers = async () => {
    const response = await api.get("/admin/users");
    return response.data;
};

export const getAnalytics = async () => {
    const response = await api.get("/admin/analytics");
    return response.data;
};