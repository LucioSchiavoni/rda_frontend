import { useForm } from "react-hook-form"
import NotasForm from "./NotasForm"
import { NotaFormData } from "../../../types"
import { createNotasRequest } from "../../../api/notas"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from 'react';

export default function CreateNotas() {

    const navigate = useNavigate()
    const initialValues: NotaFormData = {
    motivo: "",
    nro_pedido:"",
    estado: "EN_PROCESO",
    observaciones: "",
    seguimiento: {
        destino: "",
        archivo: {
            ruta: "" 
    }
    }
    }

    const {register, handleSubmit, formState: {errors}} = useForm<NotaFormData>({ defaultValues: initialValues })

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
        }
    };

   const handleForm = async (data: NotaFormData) => {
        const formData = new FormData();
        formData.append("motivo", data.motivo);
        formData.append("nro_pedido", data.nro_pedido);
        formData.append("estado", data.estado);
        formData.append("observaciones", data.observaciones);
        formData.append("seguimiento[destino]", data.seguimiento.destino);
        if (file) {
            formData.append("seguimiento[archivo][ruta]", file);
        }

        await createNotasRequest(formData);
        navigate("/auth");
    }


  return (

    <div>
        <h2 className="text-center text-4xl mb-4 font-medium">Crear una nueva nota</h2>
        <form onSubmit={handleSubmit(handleForm)} className="border rounded-md px-3  py-4 shadow-xl" encType="multipart/form-data">
        <div className="flex flex-col-reverse">
 <NotasForm 
            register={register}
            errors={errors}
        />
        <div className="mt-6  mb-6 ml-2 shadow-xl p-4 ">
    <label htmlFor="file" className="block font-medium px-3 text-gray-600  mb-4">Subir archivo</label>
        <input  type="file" onChange={(e) => handleFileChange(e)}/>
</div>
        </div>
        <button type="submit" className="mt-4 px-3 py-2 font-medium text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-md shadow-xl border text-xl w-full ">Crear nota</button>
        </form>
        
    </div>
    )
}

