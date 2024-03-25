import {
  Menu,
  MenuList,
  MenuItem,
  Button,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { getNotasRequest } from "../../api/notas"
import { useQuery } from "@tanstack/react-query";
import SeguimientoModal from '../Modal/SeguimientosModal';
import SubirArchivo from "../Modal/ArchivoModal";
export default function NotasAdmin() {


    
 
    const {data , isLoading} = useQuery({
        queryKey: ['notas'],
        queryFn: getNotasRequest
    })

    if(isLoading) return <div className="p-4 text-2xl text-black font-semibold text-center"><p>Cargando...</p></div>
  
    if(data)
    return (
    <>

       <div className="flex flex-col">
               <div className="pb-4 text-sm whitespace-nowrap">
<div className="flex items-center gap-x-6">
    <button className="text-white transition-colors duration-200 text-xl px-3 py-1 rounded-md  focus:outline-none hover:bg-blue-400 bg-blue-800">
   Subir nuevo archivo
    </button>


</div>
 </div>
<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg bg-gray-800">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"/>
        <thead className="bg-gray-50 dark:bg-gray-800">
<tr>
<th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <div className="flex items-center gap-x-3">
       
        <button className="flex items-center gap-x-2">
            <span>Nro. de pedido</span>

            <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
<path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
<path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
            </svg>
                        </button>
                                    </div>
  </th>



  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
      Destino
  </th>

  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
      Motivo
  </th>

  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
      Observacion
  </th>
       <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
      Estado
  </th>
<th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
    Borrar/Editar
</th>

                            
                            </tr>
                        </thead>
                        {data.map((item, index) => (

                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900" key={index} >
                            <tr>
  <td className="px-4 py-4 text-sm font-medium text-gray-700 border-r-2 border-b-2 rounded-sm dark:text-gray-200 whitespace-nowrap">
      <div className="inline-flex items-center gap-x-3" >
<p className="px-4 text-xl"> {item.nro_pedido}</p>

 </div>
  </td>
 {item.seguimiento.map((item) => (

    <td className="px-4 py-4  text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.destino}</td>
  ))}
 
  <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      <div className="flex items-center gap-x-2">
       
          <p className="">{item.motivo}</p>
      </div>
  </td>
  
  <td className="px-4 py-4  text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.observaciones}</td>
    
   <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-white font-semibold bg-emerald-100/60 dark:bg-gray-800">
       

          <h2 className="">{item.estado.replace(/_/g, ' ')}</h2>
      </div>
  </td>
  
   <td className="px-4 py-4 text-sm  whitespace-nowrap">
      <div className="flex items-center gap-x-6">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
          </button>

          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              
          </button>
    
      </div>
    
        
  </td>
  <td className='flex justify-center items-center p-2'>
     <Menu>
   <MenuButton className='  flex justify-center items-center' as={IconButton} >

             <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 m-auto w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
 
  </MenuButton>
  <MenuList className='flex flex-col'>
    <SeguimientoModal id={item.nro_referencia} />
            <SubirArchivo/>
  </MenuList>
</Menu>
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

