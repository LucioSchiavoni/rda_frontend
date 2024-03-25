import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,

  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react'

const SubirArchivo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <button onClick={onOpen} className=' px-3 py-1t font-semibold rounded-sm hover:bg-gray-100 transition-all'>Subir archivo</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem, ipsum dolor.
          </ModalBody>

       
        </ModalContent>
      </Modal>
    </>
  )
}


export default SubirArchivo;