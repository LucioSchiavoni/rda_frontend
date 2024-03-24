import clienteAxios from "../config/axios";
// import { NotaFormData } from "../types";


export const createNotasRequest = async (formData: FormData) => {
    try {
        const response = await clienteAxios.post("/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
}