
import { Link, useParams } from 'react-router-dom'
import DocItem from './DocItem'
import { CreateDocument } from '../../interface/notas'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createDocRequest, getDocByIdRequest } from '../../api/doc'
import { useAuthStore } from '../../context/auth/store'
import { useState } from 'react'
import { Block } from '@blocknote/core'




const DocContent = () => {

    const initialValues: CreateDocument = {
        title: "",
        authorId: ""
    }

    const {authorId, id} = useParams();

    const user = useAuthStore((state) => state.profile);
    const userId = user.id;

    const {register, handleSubmit, formState: {errors}} = useForm<CreateDocument>({ defaultValues: initialValues })
    
    const { data, isLoading } = useQuery<any, Error>({
      queryKey: ['docId', authorId, id],
      queryFn: () => getDocByIdRequest(userId, id || "")
  });
  

    
    const mutation = useMutation({
        mutationFn: createDocRequest,
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
    
        },
        onSuccess: (data) => {
          if(data?.success){}
            console.log(data?.success)
            toast.success(data.success)
        }
    })

   const handleForm = async (data: CreateDocument) => {
    try {

        const jsonData = {
            title: data.title,
            authorId: userId,
            description: blocks
        };
        
        mutation.mutate(jsonData)
     
    } catch (error) {
        console.log(error) 
      
    }
   }

   const [blocks, setBlocks] = useState<Block[]>([]);


  return (
    <div className='flex '>
        <span className='min-h-screen fixed w-1/12 flex flex-col gap-24 p-4 bg-white border shadow-xl'>
          <Link to="/doc" className='text-center rounded-md bg-gray-200 px-3 py-1'>Volver</Link>   
          <div className='flex flex-col gap-10 justify-center items-center'>
            <button className='w-28 m-auto border rounded-md px-3 py-1 text-sm'>Agregar colaborador</button>
            <p className=''>Colaboradores</p>
          </div>
        </span> 

        <div className='flex flex-col w-11/12 ml-40'>
             <aside className=' bg-[url(https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg)] bg-center bg-no-repeat bg-cover h-52 '>
            <h1 className='mt-40  ml-12 font-semibold  text-4xl  text-start'>Titulo</h1>
            <button onClick={handleSubmit(handleForm)} className='absolute top-5 ml-8 border px-3 py-1 rounded-md bg-white font-medium shadow-xl'>Guardar</button>
        </aside>
        <div className='w-11/12  m-auto  bg-white mt-12'> 
        {!isLoading && data && <DocItem description={data.description} onChange={() => setBlocks}/>}
        </div>
        </div>
       
        
    </div>

  )
}

export default DocContent