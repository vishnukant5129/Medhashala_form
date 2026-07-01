import api from "../api/axios.js";

export const getReferralDetails = async (referralCode) => {
    const response = await api.get(`/auth/${referralCode}`);
    return response.data;
};