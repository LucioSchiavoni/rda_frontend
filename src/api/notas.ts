import clienteAxios from "../config/axios";
import { isAxiosError } from "axios";
import { Nota, Seguimiento } from "../interface/notas";


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
        const {data} = await clienteAxios.get("/allNotas")
        return data as Nota[];
    } catch (error) {
        console.log(error)
    }
}

export const getSeguimientoRequest = async(id: number) => {
    try {
        const {data} = await clienteAxios.get(`/seguimiento/${id}`)
        return data as Seguimiento[];
    } catch (error) {
        console.log(error)
    }
}