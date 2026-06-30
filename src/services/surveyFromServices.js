import api from "../api/axios.js";

export const submitSurvey = async (data) => {
    const response = await api.post("survey/submit", data);
    return response.data;
};