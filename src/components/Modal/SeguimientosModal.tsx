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

interface SeguimientoProps {
    id: number;
}



const SeguimientoModal: React.FC<SeguimientoProps> = ({id})  => {


      const {data , isLoading} = useQuery({
        queryKey: ['seguimiento', id],
        queryFn: () => getSeguimientoRequest(id),
    
    })
console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()

  if(isLoading) return <div>Cargando...</div>
  if(data)
return (
    <>
 <button className='px-3 py-1 rounded-sm font-semibold border-b hover:bg-gray-100 transition-all' onClick={onOpen}>
        Ver seguimiento
      </button>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Seguimiento de la compra</DrawerHeader>
          <DrawerBody>
        {
            data.map((item) => (
                <div className='flex justify-between border w-full p-4'>
                    <table className=''>
                        <thead className='flex space-x-20 gap-10'>
                            <th>
                                Fecha
                            </th>
                            <th>
                                Archivo
                            </th>
                        </thead>
                        <tbody className='flex justify-between'>
                            <td>
                              <p>{item.fecha.substring(0, 10)}</p>  
                            </td>
                            <td>
                                  <p className='underline underline-offset-2'>{item.archivo.nombre}</p>
                            
                            </td>
                        </tbody>
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