import {
Drawer,
DrawerOverlay,
DrawerContent,
Button,
DrawerHeader,
DrawerBody,
DrawerFooter,

} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query";
import { getSeguimientoRequest } from '../../api/notas';
import ButtonDownload from '../button/ButtonDownload';
import { Seguimiento } from '../../interface/notas';


interface SeguimientoProps {
    id: string;

}



const SeguimientoModal: React.FC<SeguimientoProps> = ({id})  => {


      const {data , isLoading} = useQuery<Seguimiento[]>({
        queryKey: ['seguimiento', id],
        queryFn: () => getSeguimientoRequest(id),
        
    })

  const { isOpen, onOpen, onClose } = useDisclosure()

  if(isLoading) return <div>Cargando...</div>
  if(data)
return (
    <>
 <button className='px-3 py-1.5 rounded-sm font-semibold border-b hover:bg-gray-100 transition-all' onClick={onOpen}>
        Ver seguimiento
      </button>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent className='dark:bg-gray-900 dark:text-white'>
          <DrawerHeader className='text-center mt-2'>Lista de archivos</DrawerHeader>
          <DrawerBody>
                 
    <section className=" px-4 ">
    
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                       
                                <tr>
                                  <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-x-3">
                                        <span className="">Nombre del archivo</span>
                                    </div>
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Fecha de subida
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Subido por
                                    </th>
                                    <th scope="col" className="relative py-3.5 px-4">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            {
                                data?.map((item, index) => (
                                    
                            <tbody key={index} className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                <p>{item.archivos.map((item: any, fileIndex: any) => (
                                    <div key={fileIndex}>
                                     <p>archivo suelto: {item.nombre}</p>   
                                    </div>
                                ))}</p>
                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">

                                            <div className="flex items-center gap-x-2">
                                                <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                    </svg>
                                                </div>
                                              
                                                <div>
                                                    
                                                    {
                                                        item.carpetas.map((carpeta, carpetaIndex) => (
                                                        <div key={carpetaIndex}>
                                                        <ButtonDownload  fileId={carpeta.id} nombre={carpeta.nombre} />
                                                            </div>
                                                                ))

                                                    }
                                                    <h2 className="font-normal text-gray-800 dark:text-white hover:underline hover:underline-offset-4"></h2>
                                                    {/* <p className="text-xs font-normal text-gray-500 dark:text-gray-400">200 KB</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                 
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{item.fecha.substring(0, 10)}</td>
                                   
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">agregar autor</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                         Borrar
                                        </button>
                                    </td>
                                </tr>
    
                            </tbody> 
                              ))
                              }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
       
    </section>

          </DrawerBody>
     <DrawerFooter>
            <Button variant='outline' className='dark:bg-white text-black'  onClick={onClose}>
              Cerrar
            </Button>
     </DrawerFooter>
               
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default SeguimientoModal;

//{item.fecha.substring(0, 10)}


// {
//   item.archivo.ruta ?
//   <ButtonDownload fileId={item.archivo.id} nombre={item.archivo.nombre}  />
//   :
//   <p className='text-sm ml-6 text-gray-600 underline underline-1'>Sin archivos para descargar</p>
// }

//data.map  key = index