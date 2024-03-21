import axios from 'axios'
import { useAuthStore } from '../context/auth/store';

// const URL = import.meta.env.VITE_URL


const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_URL
})

clienteAxios.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  


export default clienteAxios;