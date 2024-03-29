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
    id: number;
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
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Seguimiento de la compra</DrawerHeader>
          <DrawerBody>
        {
            data.map((item) => (
                <div className='  border-b w-full p-4'>
                    <table className=''>
                        <div className=''>

                        
                        <thead className=''>
                            <th>
                                Fecha
                            </th>
                        
                            <th className=''>
                                Destino
                            </th>
                        </thead>
                        <tbody className=''>
                            <td>
                              <p>{item.fecha.substring(0, 10)}</p>  
                            </td>
                            <td>
                                {item.destino}

                            </td>
                            <td>
                              
                            </td>
                            <td>
                              {
                                item.archivo.ruta ?
                                 <ButtonDownload fileId={item.archivo.id} />
                                 :
                                 <p>Sin archivos</p>
                              }
                          
                             
                            </td>
                        </tbody>
                        </div>
                    </table>
                    
              
                  
                </div>
            ))
        }
           
          </DrawerBody>
     <DrawerFooter>
            <Button variant='outline'  onClick={onClose}>
              Cerrar
            </Button>
     </DrawerFooter>
               
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default SeguimientoModal;