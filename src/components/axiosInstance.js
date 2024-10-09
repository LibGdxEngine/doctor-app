// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://app.krokplus.com/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInstance;
