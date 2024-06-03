import { useForm } from "react-hook-form"
import NotasForm from "./NotasForm"
import { NotaFormData } from "../../../types"
import { createNotasRequest } from "../../../api/notas"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from 'react';
import { toast } from "react-toastify"
import {useMutation} from '@tanstack/react-query'
import { useAuthStore } from "../../../context/auth/store"

export default function CreateNotas() {

    const navigate = useNavigate()
    const initialValues: NotaFormData = {
    titulo: "",
    observaciones: "",
    estado:"",
    authorId: "",
    seguimiento: {
        carpetas:{
            archivo: {
            ruta: "" 
    }
        }
       
    },
   
    }

    const {register, handleSubmit, formState: {errors}} = useForm<NotaFormData>({ defaultValues: initialValues })
      
    const user = useAuthStore((state) => state.profile);
    const userId = user.id;

    const [file, setFile] = useState<File | null>(null);


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
        }
    };

    const mutation = useMutation({
        mutationFn: createNotasRequest,
        onError: (error) => {
            console.log("desde onError")
            toast.error(error.message)
        },
        onSuccess: (data) => {
            console.log(data.success)
            toast.success(data.success)
            navigate("/auth")
        }
    })

   const handleForm = async (data: NotaFormData) => {
    try {
       
         const formData = new FormData();
         formData.append("authoId", userId);
        formData.append("titulo", data.titulo);
        formData.append("observaciones", data.observaciones);
        formData.append("estado", data.estado);
        if (file) {
            formData.append("seguimiento[archivo][ruta]", file);
        }
        mutation.mutate(formData)
     
    } catch (error) {
        console.log(error) 
    }
   }

return (

    <div>
        <h2 className="text-center text-4xl mb-4 font-medium dark:text-white">Crear una nueva nota</h2>

        <form onSubmit={handleSubmit(handleForm)} className="border rounded-md px-3  py-4 shadow-xl dark:bg-white " encType="multipart/form-data">
        <div className="flex flex-col-reverse">
 <NotasForm 
            register={register}
            errors={errors}
        />
            <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h2 className="mx-3 text-gray-400">Subir archivo PDF, Docx, txt, Excel</h2>

                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileChange(e)} />
            </label>
        </div>
        <button type="submit" className="mt-4 px-3 py-2 font-medium text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-md shadow-xl border text-xl w-full">Crear nota</button>
        </form>
        
    </div>
    )
}

