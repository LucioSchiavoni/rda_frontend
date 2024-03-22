import clienteAxios from "../config/axios";
import { createNotas } from "../interface/notas";


export const createNotasRequest = async(data: createNotas) => {
    try {
        const res = await clienteAxios.post("/create", data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}