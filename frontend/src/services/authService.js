import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

export const register = async (userData) => {
    const response = await axios.post(API_URL + "signup", userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    return response.data;
};

export const getUserProfile = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(API_URL + "profile", config);
    return response.data;
};
