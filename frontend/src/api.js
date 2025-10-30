// Centrailzed API URL 

import axios from 'axios';

const api = axios.create({
    baseURL : "https://task1-8727.onrender.com/api"
})

export default api;