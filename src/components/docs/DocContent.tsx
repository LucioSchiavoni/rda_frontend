import { Link, useParams } from 'react-router-dom';
import DocItem from './DocItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {  getDocByIdRequest, updateDocRequest } from '../../api/doc';
import { useState } from 'react';
import Layout from '../../Layout';
import Navbar from '../navbar/Navbar';


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

     
      <div className='flex '>


        <div className='flex flex-col w-11/12 ml-40 '>
          <aside className='bg-[url(https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg)] bg-center bg-no-repeat bg-cover h-52'>
            <button 
              className='absolute top-5 ml-8 border px-3 py-1 rounded-md  font-medium shadow-xl' 
              onClick={handleSave}>
              Guardar
            </button>
          </aside>
          <div className='w-11/12 m-auto bg-white mt-12'>
            <DocItem onChange={setDocContent} initialContent={initialContent}    />
          </div>
        </div>
      </div>
    </>
    ); 
}

export default DocContent;

