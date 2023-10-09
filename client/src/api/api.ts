import axios from "axios";

export const  api = axios.create({
    baseURL:import.meta.env.VITE_REACT_APP_API_URL,
    headers:{
        Authorization:`Bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`
    }
})