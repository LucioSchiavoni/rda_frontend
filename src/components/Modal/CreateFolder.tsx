import { 
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader
 } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
 import { HiOutlineFolderPlus } from "react-icons/hi2";

const CreateFolder = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const {handleSubmit} = useForm()

    const handleForm = async() =>{
        try {
            console.log("data")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
   
    <Button onClick={onOpen} width="100%" backgroundColor='transparent' _hover="none" textColor='dark:white'>Nueva carpeta <span className="font-thin flex justify-between text-2xl ">
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
        <input type="text"  className="px-4 py-2 border rounded-md shadow-xl flex justify-center  m-auto w-80 mb-2" />
        </form>
       
      <div>
       <button type="submit" className="px-3 py-1 border rounded-md shadow-xl ml-5 dark:bg-neutral-900 text-white">Guardar</button>
          <button className="px-4 py-1   dark:text-white rounded-md bg-gray-50 text-black dark:bg-neutral-900 "  onClick={onClose}>
            Cerrar
          </button>
          
      </div>
    </ModalBody>
     
      </ModalContent>
    </Modal> 
    </>
  )
}

export default CreateFolder