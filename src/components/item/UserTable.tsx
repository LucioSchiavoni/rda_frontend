import { useQuery } from "@tanstack/react-query"
import { User } from "../../interface/notas"
import { deleteUser, getUsers } from "../../api/auth"
import { toast } from "react-toastify"
import { TiUserDeleteOutline } from "react-icons/ti";
import { useDisclosure, Modal, Button, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader } from "@chakra-ui/react";


const UserTable = () => {


    const {data, isLoading} = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: getUsers
    })

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleDelete = async(id: number) => {
        try {
            const res = await deleteUser(id)
            toast.info(res?.success)
            setTimeout(() =>{
                window.location.reload()
            },1000)
        } catch (error) {
            console.log(error)
        }
    }

    if(isLoading)
        return (
            <div className="w-10/12 m-auto">
                <p>Cargando...</p>
            </div>
        )

    if(data)
  return (
    <div className="flex flex-col w-10/12 m-auto">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-white">Nombre</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-white">Usuario</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-white">Rol</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-white">Eliminar usuario</th>
            </tr>
          </thead>
          <tbody>

                {
                    data.map((item:User, index: number) => (
                        
            <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{item.username}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-end">{item.rolUser}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">

               
                  
                  <Button onClick={onOpen}>
                    <TiUserDeleteOutline />
                  </Button>
                  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                <ModalContent>
                <ModalHeader>Borrar usuario</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                    <p>Desea eliminar esta cuenta?</p>
            
          </ModalBody>

          <ModalFooter className="gap-4">
          <Button variant='ghost'  type="button" className="inline-flex bg-gray-100 hover:bg-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 items-center gap-x-2 text-2xl font-semibold rounded-lg border border-transparent text-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white " onClick={() => handleDelete(item.id)}>Eliminar usuario</Button>
            <Button mr={3} onClick={onClose} className="dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 bg-gray-100 hover:bg-gray-300">
              Cancelar
            </Button> 
          </ModalFooter>
        </ModalContent>

                  </Modal>
                

              </td>
            </tr>
   ))
                }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default UserTable