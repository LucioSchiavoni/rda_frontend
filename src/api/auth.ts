import clienteAxios from "../config/axios";
import { createUser } from "../interface/user";


export const loginRequest = async (username: string, password: string) => {
    const dataLogin = {
        username,
        password
    }
    return await clienteAxios.post("/login",dataLogin)
}



export const auth = async() => {
    try {
        const res = await clienteAxios.get("/auth")
        return res.data
    } catch (error) {
        console.log(error)        
    }
}

export const registerRequest = async(data:createUser): Promise<any> => {
    try {
        const res = await clienteAxios.post("/register", data)
        return res
    } catch (error) {
        console.log(error)
    }
}