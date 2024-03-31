import {
  Menu,
  MenuList,
  MenuButton,
  IconButton,
  Spinner,
  Progress
} from '@chakra-ui/react'
import { getNotasByEstado, getNotasRequest } from "../../api/notas"
import { useQuery } from "@tanstack/react-query";
import SeguimientoModal from '../Modal/SeguimientosModal';
import SubirArchivo from "../Modal/ArchivoModal";

import ButtonDrawer from '../button/ButtonDrawer';

import EditModal from '../Modal/EditModal';
import { useState } from 'react';
import { GetNota } from '../../types';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../context/auth/store';
export default function NotasAdmin() {
    
    const [estado, setEstado] = useState("default")
    const [search, setSearch] = useState("");

    const user = useAuthStore(state => state.profile)

    const {data , isLoading} = useQuery<GetNota[]>({
        queryKey: ['notas', estado],
        queryFn: () => {
          if(estado === "default"){
            return getNotasRequest()
          }else{
            return getNotasByEstado(estado)
          }
        }
    })

    const handleEstado = async(estado:string)=>{
      setEstado(estado)
    }

       const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };

const filteredData = search 
  ? data?.filter(item => item.nro_pedido.toString().includes(search))
  : data;


    if(isLoading) return <div className="flex justify-center items-center mt-32 text-3xl ">
      <Spinner color='blue.900' fontWeight={'40px'}  width={'40px'} height={'40px'}/>
      </div>
  
    if(data)
    return (
    <>

       <div className="flex flex-col  justify-center items-center">
               <div className="pb-4    whitespace-nowrap">
<div className="flex   w-auto ">

        {
          user.rol === "ADMIN" ? 
           <Link to='/createNotas' className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span className='font-medium text-xl'>Crear nota</span>
            </Link>
          :
          null
        }
       
            <div className='flex  items-center '>
              <div className='px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
<label htmlFor="" className='inline-flex items-center px-3 py-1 bg-gray-800 rounded-full gap-x-2 text-white dark:text-white font-semibold  dark:bg-gray-800 '>ESTADO:</label>
              </div>
          
 <select name="" id="" onChange={(e)=> handleEstado(e.target.value)} className='w-32 border shadow-xl text-xl rounded-md px-3'>
  <option value="default">Todos</option>
  <option value="EN_PROCESO">En proceso</option>
  <option value="EN_CURSO">En curso</option>
  <option value="FINALIZADO">Finalizado</option>
 </select>
        </div>

      <div className="relative flex items-center mt-4 md:mt-0 ml-12">
            <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
          
            
            <input type="text" value={search} placeholder="Buscar nro. pedido.." onChange={handleSearch} className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 shadow-xl"  />  
            
    
        </div>
        
          

</div>
 </div>

<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  
            <div className="inline-block min-w-full py-2 md:px-6 lg:px-8">
<div className="overflow-hidden border dark:border-gray-700  md:rounded-lg ">
  
    <table className="min-w-full divide-y "/>
        <thead className=" dark:bg-gray-800">
<tr className=''>
<th scope="col" className="py-3.5 px-4 font-semibold text-xl text-left dark:border-none border-b rtl:text-right text-gray-900 dark:text-gray-400">
    <div className="flex items-center gap-x-3">
       
        <button className="flex items-center gap-x-2 ">
            <span>Nro. de pedido</span>

            <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
<path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
<path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
            </svg>
                        </button>
                                    </div>
  </th>

  <th scope="col" className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right dark:border-none border-b dark:text-white  ">
      Motivo
  </th>

  <th scope="col" className="px-4 py-3.5 text-left rtl:text-right dark:border-none border-b dark:text-white font-semibold text-xl ">
      Observacion
  </th>
       <th scope="col" className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right dark:border-none border-b dark:text-white ">
      Estado
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
      <div className=" items-center" >
<p className="px-4 text-xl"> {item.nro_pedido}</p>

 </div>
  </td>

 
  <td className="px-4 py-4 text-xl font-semibold text-gray-700 dark:border-none border-b border-l border-r border-gray-200 dark:text-gray-300 whitespace-nowrap">
      <div className="flex items-center gap-x-2">
       
          <p className="capitalize ">{item.motivo}</p>
      </div>
  </td>
  
  <td className="px-4 py-4 dark:border-none border-b border-l border-r border-gray-200 text-gray-700 dark:text-gray-200 whitespace-nowrap text-xl font-semibold ">{item.observaciones}</td>
    
   <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap dark:border-none border-b border-l border-r border-gray-200">
      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-white font-semibold bg-gray-800 dark:bg-gray-800">

          <h2 className="">
          {item.estado.replace(/_/g, ' ')}</h2>
      </div>
           {
          item.estado === "EN_PROCESO" ? <Progress hasStripe value={20} className='rounded-md mt-2' />:
          item.estado === "EN_CURSO" ? <Progress hasStripe value={50} className='rounded-full mt-2'/> :
          item.estado === "FINALIZADO" ? <Progress hasStripe value={100} className='rounded-full mt-2' /> :
          null
            }
  </td>
  

  <td className='flex justify-center items-center p-2 '>
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

