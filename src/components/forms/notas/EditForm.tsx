import { UseFormRegister, FieldErrors} from "react-hook-form"
import ErrorMessage from "../../errors/ErrorMessage";
import { EditData } from "../../../interface/notas";


 type NotasFormProps = {
  register: UseFormRegister<EditData>;
  errors: FieldErrors<EditData>;
};

 
export default function EditForm({errors, register}: NotasFormProps){

  return (
    <div className="">

        <div className="flex justify-around gap-12 py-6 ">


        <div className="flex flex-col w-7/12 text-xl">
           <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Titulo</p>
          <input placeholder="" type="text"  id="titulo" className=" text-xl border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0  block bg-white
              border-gray-300 rounded-md" {...register("titulo")}/>
              {errors.titulo && (
  <ErrorMessage>{errors.titulo.message}</ErrorMessage>
)}
        </div>

      



        </div>
    


    <div className="w-8/12">
    <label htmlFor="Observacion" className="block text-xl  pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-700">Observacion</label>

    <textarea placeholder="Observacion..." id="observaciones" {...register("observaciones")} className="block focus:outline-none focus:border-blue-600 mt-2 w-full text-xl placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 "></textarea>
    
   


    </div>


    </div>
  </div>
  

  )
}

