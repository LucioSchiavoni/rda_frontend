import {  Link, useParams } from 'react-router-dom';
import DocItem from './DocItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {  getDocByIdRequest, updateDocRequest } from '../../api/doc';
import { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Navbar from '../navbar/Navbar';
import { FaRegSave } from "react-icons/fa";
import { generateDocx } from '../utils/generateDocx';

const DocContent = () => {
  const { authorId, id } = useParams();
  const [docContent, setDocContent] = useState('');
  


   const { data, isLoading } = useQuery<any, Error>({
     queryKey: ['docId', authorId, id],
     queryFn: () =>  getDocByIdRequest(authorId, id)
   });

  const queryClient = useQueryClient()

  const handleSave = async () => {
    try {
      const updateJson = {
        authorId: authorId,
        id: id,
        description: docContent
      }
      const res = await updateDocRequest(updateJson)
      queryClient.invalidateQueries({
        queryKey: ['docId', authorId, id],
        exact: true
      })
      toast.success(res.success)
    } catch (error) {
      toast.error('Error al guardar el documento');
      console.log(error);
    }
  };

   

  if (isLoading) return <div>Cargando...</div>;

  if (!data || !data.description) {
    return <Layout>
       <div className=''>No se encontro el documento</div>
    </Layout>
  }

  const initialContent = data.description

  if(data)

   console.log('Initial Content:', docContent); 

    return (
      <>
   <Navbar/>

        <div className='flex flex-col w-full ml-24'>
      <div className=' mt-12 flex items-center gap-3'>
        <Link to='/doc' className='bg-white  h-7 w-20 text-center hover:bg-gray-100 items-center  rounded-md font-semibold border'>Volver</Link>
           <button onClick={() =>generateDocx} className='hover:bg-gray-100 h-7 items-center  w-36 rounded-md font-semibold shadow-xl border bg-white'>Descargar Docx</button>
            <button 
              className='hover:bg-gray-100 flex  justify-center items-center gap-2 bg-white border h-7 w-28 text-center rounded-md font-medium shadow-xl' 
              onClick={handleSave}>
            <span className='text-xl'> <FaRegSave/>
              </span>  <p className=''>Guardar</p>
            </button>
      </div>
         

          <div className='w-11/12 m-auto bg-white mt-12'>
            <DocItem onChange={setDocContent} initialContent={initialContent}    />
          </div>
        </div>

    </>
    ); 
}

export default DocContent;

