import { 
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,

  ModalHeader
} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { createFolderRequest } from "../../api/notas";
import { toast } from "react-toastify";
import React from "react";





interface PostIdPorps  {
id: {
  id: number;
};
}

interface FolderData {
nameFolder: string;
postId: number;
}

const CreateFolder: React.FC<PostIdPorps> = ({id}) => {



  const { isOpen, onOpen, onClose } = useDisclosure()


  const { register, handleSubmit } = useForm<FolderData>(); 


  const handleForm: SubmitHandler<FolderData> = async(data) =>{
      try {  
          const jsonData = {
            ...data,
             postId: id.id
          }
          const res = await createFolderRequest(jsonData)
          toast.info(res.message)
          setTimeout(() =>{
            window.location.reload()
          }, 2000)
      } catch (error) {
          console.log(error)
      }
  }

return (
  <>
 
  <Button onClick={onOpen} width="100%" backgroundColor='transparent' className="gap-2" _hover="none" textColor='dark:white'>Nueva carpeta <span className="font-thin flex justify-between text-2xl ">
    <HiOutlineFolderPlus/></span></Button>
  <Modal
    isCentered
    onClose={onClose}
    isOpen={isOpen}
    motionPreset='slideInBottom'
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader className=" text-center">Nombre de la carpeta</ModalHeader>
      <ModalCloseButton />
      <ModalBody>

          <form onSubmit={handleSubmit(handleForm)}>            
      <input id="nameFolder"  {...register('nameFolder')} type="text" placeholder="Nueva carpeta..."  className="px-4 py-2 border border-gray-300 mb-5 rounded-md  flex justify-center  m-auto w-80" />
    <div className="flex justify-center items-center gap-5 ">
     <button type="submit"  className="px-4 dark:hover:bg-neutral-800 py-2 font-semibold dark:text-white rounded-md bg-gray-100 hover:bg-gray-200 text-black dark:bg-neutral-900 ">Guardar</button>
        
           <Button  className="px-4 dark:hover:bg-neutral-800 py-2 font-semibold dark:text-white rounded-md bg-gray-100 hover:bg-gray-200 text-black dark:bg-neutral-900 "  onClick={onClose}>
          Cerrar
        </Button>
        </div>
          </form>
 
  </ModalBody>
   
    </ModalContent>
  </Modal> 
  </>
)
}

export default CreateFolder