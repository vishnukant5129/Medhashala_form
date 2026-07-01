import api from "../api/axios.js";

export const getRewardStatus = async (data) => {
    const response = await api.post(`/reward${userId}`);
    return response.data;
};

export const unlockReward = async (data) => {
    const response = await api.post(`/reward/unlock${userId}`);
    return response.data;
};