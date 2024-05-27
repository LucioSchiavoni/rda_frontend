import {
  Menu,
  MenuList,
  MenuButton,
  IconButton,
  Spinner
} from '@chakra-ui/react'
import {  getNotasRequest } from "../../api/notas"
import { useQuery } from "@tanstack/react-query";
import SeguimientoModal from '../Modal/SeguimientosModal';
import SubirArchivo from "../Modal/ArchivoModal";

import ButtonDrawer from '../button/ButtonDrawer';

import EditModal from '../Modal/EditModal';
import { useState } from 'react';
import { GetNota, Nota } from '../../types';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../context/auth/store';


export default function NotasAdmin() {
    

    const [search, setSearch] = useState("");

    const user = useAuthStore(state => state.profile)

      const { data, isLoading, error } = useQuery<Nota[], Error>({
        queryKey: ['notas'],
        queryFn: getNotasRequest
    });

       const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };


  
    const filteredData = search 
    ? (Array.isArray(data) ? data.filter(item => 
        (item.titulo && item.titulo.toLowerCase().includes(search.toLowerCase())) ||
        (item.observaciones && item.observaciones.toLowerCase().includes(search.toLowerCase()))
      ) : [])
    : data;


    if(isLoading) return <div className="flex justify-center items-center mt-32 text-3xl ">
      <Spinner color='blue.900' fontWeight={'40px'}  width={'40px'} height={'40px'}/>
      </div>
  
    if(data)
    return (
    <>

       <div className="flex flex-col  justify-center items-center">
               <div className="pb-4 whitespace-nowrap">
<div className="flex w-auto ">

        {
          user.rol === "ADMIN" ? 
           <Link to='/createNotas' className="flex items-center justify-center w-1/2 mr-56 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span className='font-medium text-xl'>Crear nota</span>
            </Link>
          :
          null
        }
       
         

      <div className="relative flex items-center mt-4 md:mt-0 ml-12">
            <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
          
            
            <input type="text" value={search} placeholder="Nro. pedido, motivo, observacion.." onChange={handleSearch} className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 shadow-xl"  />  
        </div>
        
          

</div>
 </div>

<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  
            <div className="inline-block min-w-full py-2 md:px-6 lg:px-8">
<div className="overflow-hidden border dark:border-gray-700  md:rounded-lg ">
  
    <table className="min-w-full divide-y "/>
        <thead className=" dark:bg-gray-800">
<tr className=''>
<th scope="col" className="py-3.5 px-4 font-semibold text-xl text-left dark:border-none border-b rtl:text-right gap-10 text-gray-900 dark:text-gray-400">

  </th>

  <th scope="col" className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right dark:border-none border-b dark:text-white  ">
      Titulo
  </th>

  <th scope="col" className="px-4 py-3.5 text-left rtl:text-right dark:border-none border-b dark:text-white font-semibold text-xl ">
      Observacion
  </th>
     
  <th>
        
  </th>
  <th>
        
        </th>
 <th className='dark:text-white text-xl font-thin'>
    {
      user.rol === "ADMIN" ?
      <span>Editar / Eliminar</span>
      :
      null
    }
    
  </th>
                            
    </tr>
</thead>
     {filteredData?.map((item: GetNota, index: number) => (

  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900" key={index} >
                            <tr>
  <td className="px-4 py-4 text-sm font-medium text-gray-700  dark:border-none border-b border-l border-r border-gray-200 dark:text-gray-200 whitespace-nowrap">

  </td>

 
  <td className="px-4 py-4 text-xl font-semibold text-gray-700 dark:border-none border-b border-l border-r border-gray-200 dark:text-gray-300 whitespace-nowrap">
      <div className="flex items-center gap-x-2">
       
          <p className="capitalize ">{item.titulo}</p>
      </div>
  </td>
  
  <td className="px-4 py-4 dark:border-none border-b border-l border-r border-gray-200 text-gray-700 dark:text-gray-200 whitespace-nowrap text-xl font-semibold">{item.observaciones}</td>

      <td className='text-white  '>
        <span className='px-2 py-1 border  rounded-xl '>{item.estado}</span>
        
      </td>
  <td className='flex justify-center items-center ml-4 py-1 '>
     <Menu>
   <MenuButton className='  flex justify-center items-center mt-3 ' as={IconButton} >

             <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 m-auto w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
 
  </MenuButton>
  <MenuList className='flex flex-col'>
    <SeguimientoModal id={item.nro_referencia} />
    {
      user.rol === "ADMIN" ?
       <SubirArchivo  id={item.nro_referencia}/>
       :
       null
    }
           
  </MenuList>
</Menu>
  </td>
    
      <td className="px-4 py-4 text-sm  whitespace-nowrap">
        {

        user.rol == "ADMIN"  ?
      <div className="flex items-center gap-x-6">

        <EditModal id={item.nro_referencia}/> 
        <ButtonDrawer id={item.nro_referencia} />
      </div>
      :
      null
          }
  </td>
                            </tr>
    
</tbody> 
   
 ))

 }

</div>
  </div>

    </div>
      </div>

        </>
  )
}

