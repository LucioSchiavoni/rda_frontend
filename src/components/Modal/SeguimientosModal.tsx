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

interface SeguimientoProps {
    id: string;
}



const SeguimientoModal: React.FC<SeguimientoProps> = ({id})  => {


      const {data , isLoading} = useQuery({
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
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'md'}>
        <DrawerOverlay />
        <DrawerContent className='dark:bg-gray-900 dark:text-white'>
          <DrawerHeader borderBottomWidth='1px'>Seguimiento:</DrawerHeader>
          <DrawerBody>
        {
            data.map((item) => (
                <div className='border-b w-full p-4'>
                    <table className='min-w-full divide-y divide-gray-200  dark:text-black '>
                        
                        <thead className='bg-gray-50 dark:bg-gray-900 '>
                            <th className='py-3.5 px-4 text-xl text-left rtl:text-right text-gray-900 dark:text-white font-medium'>
                                Fecha
                            </th>

                            <th className='dark:text-white text-xl '>
                                Destino
                            </th>
                            <th className='dark:text-white text-xl'>Archivo</th>
                        </thead>
                        <tbody className='bg-white dark:bg-gray-900 dark:text-white divide-gray-200 dark:divide-gray-700 '>
                            <td  className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                              <p className='dark:text-white text-xl'>{item.fecha.substring(0, 10)}</p>  
                            </td>
                            <td className='p-8 text-xl'>
                                {item.destino}
                                
                            </td>
                          
                            <td className=''>
                              {
                                item.archivo.ruta ?
                                <ButtonDownload fileId={item.archivo.id} />
                                :
                                <p className='text-sm ml-6 text-gray-600 underline underline-1'>Sin archivos para descargar</p>
                              }
                          
                            
                            </td>
                        </tbody>
                    </table>
                    
              
                  
                </div>
            ))
        }
           
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