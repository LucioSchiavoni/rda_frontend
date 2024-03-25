import clienteAxios from "../config/axios";
import { isAxiosError } from "axios";
import { getNotaSchema } from "../types";


export const createNotasRequest = async (formData: FormData) => {
    try {
        const response = await clienteAxios.post("/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response.data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
        
    
    }
}


export const getNotasRequest = async() => {
    try {
        const res = await clienteAxios.get("/allNotas")
        return res.data

    } catch (error) {
        console.log(error)
    }
}