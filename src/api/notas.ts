import clienteAxios from "../config/axios";
import { isAxiosError } from "axios";
import { EditData, Nota, Seguimiento } from "../interface/notas";
import { toast } from "react-toastify";



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

export const editNotasRequest = async(id: number, data: EditData) => {
    try {
        const filterData = Object.fromEntries(
            Object.entries(data).filter(([_key, value]) => value !== "")
        );
        if(Object.keys(filterData).length > 0) {
            const response = await clienteAxios.put(`/updateNota/${id}`, filterData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            toast.success(response.data.succes);
        } else {
            toast.info("No hay cambios para realizar");
        }
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

export const getNotasByIdRequest = async(id: number) => {
    try {
        const {data} = await clienteAxios.get(`/nota/${id}`)
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

export const createSeguimientoRequest = async(formdata:FormData) => {
    try {
        const res = await clienteAxios.post("/createFile", formdata, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
           return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteNotaRequest = async(id: number) => {
try {
  
    const res = await clienteAxios.delete(`/deleteNota/${id}`)
    return res.data

} catch (error) {
    console.log(error)
}
}