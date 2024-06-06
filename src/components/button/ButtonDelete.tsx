

import { Button, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { deleteFolderRequest } from "../../api/notas"
import { toast } from "react-toastify"

interface PostIdPorps {
    id: number,
    folderId: number
}

const ButtonDelete: React.FC<PostIdPorps> = ({id, folderId}) => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const handleDelete = async() => {
        try {
            console.log("El id: ", id)
            console.log("Delete :", folderId)

           const res = await deleteFolderRequest(id,folderId)
            toast.info(res.succes)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <div>
        <button onClick={onOpen}>
            Eliminar
        </button>
        <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Desea eliminar esta carpeta?</ModalHeader>
            <ModalCloseButton/>
            <div className="flex gap-3 p-5 mt-8">
            <button className="px-3 py-1 rounded-md hover:bg-neutral-800 bg-neutral-900 text-white w-24 " onClick={handleDelete}>
            Borrar
        </button>
 
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Cerrar
            </Button>

 
            </div>
       
         </ModalContent>
        </Modal>
        
    </div>
  )
}


export default ButtonDelete