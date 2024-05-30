import clienteAxios from "../config/axios";
import { isAxiosError } from "axios";
import { EditData, Post } from "../interface/notas";
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

// export const getNotasByEstado = async(estado: string) => {
//     try {
//         const response = await clienteAxios.get(`/nota/estado/${estado}`)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }



export const downloadFileRequest= async(id:number) => {
    try {
        const res = await clienteAxios.get(`/download/${id}`, {
            responseType: 'blob'
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

export const editNotasRequest = async(id: string, data: EditData) => {
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
            return response.data
        } else {
            toast.info("No hay cambios para realizar");
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}




export const getNotasRequest = async (): Promise<Post[]> => {
    try {
        const { data } = await clienteAxios.get("/allNotas");
        return data as Post[];
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching post data");
    }
};

export const getNotasByIdRequest = async(id: string): Promise<Post> => {
    try {
        const {data} = await clienteAxios.get(`/post/${id}`)
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Error fetching post data")
    }
}

// export const getSeguimientoRequest = async(id: string)  => {
//     try {
//         const {data} = await clienteAxios.get(`/seguimiento/${id}`)
//         return data;
//     } catch (error) {
//         console.log(error)
//         throw new Error("Error fetching seguimiento data");
//     }
// }

export const createFileRequest = async(formdata:FormData) => {
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

export const createFileByIdFolderRequest = async(formdata:FormData) => {
    try {
        const res = await clienteAxios.post("/create/folder/file", formdata, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
           return res.data
    } catch (error) {
        console.log(error)
    }
}

///pasarlo como parametros en la url  
export const getFolderById = async(postId: number, folderId:number) => {
    try {
        const res = await clienteAxios.get("/folder/file",{
            params:{
                postId: postId,
                folderId: folderId
            }
        })
        console.log("Response data:", res.data);
        return res.data 
    } catch (error) {
        console.log(error)
    }
}

export const deleteNotaRequest = async(id: string) => {
try {
  
    const res = await clienteAxios.delete(`/deleteNota/${id}`)
    return res.data

} catch (error) {
    console.log(error)
}
}