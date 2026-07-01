import api from "../api/axios.js";

export const getReferralDetails = async (referralCode) => {
    const response = await api.get(`/referral/${referralCode}`);
    return response.data;
};