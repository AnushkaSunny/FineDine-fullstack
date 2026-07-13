import axios from "axios";

const API_URL = "http://localhost:8080/api/reservations";

export const createReservation = async (reservationData) => {
    const response = await axios.post(API_URL, reservationData);
    return response.data;
};

export const getAllReservations = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getReservationsByEmail = async (email) => {
    const response = await axios.get(`${API_URL}/email/${email}`);
    return response.data;
};

export const getReservationById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const deleteReservation = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};