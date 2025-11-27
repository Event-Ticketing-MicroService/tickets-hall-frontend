import axios from "axios";

const API_BASE_URL = "http://localhost:8087/api";

export const createCustomer = async (customerData) => {
    return axios.post(
        `${API_BASE_URL}/customers/register`,
        customerData,
        { headers: { "Content-Type": "application/json" } }
    );
};
