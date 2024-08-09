import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader } from '@chakra-ui/react'
import { createDocRequest } from '../../api/doc'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useAuthStore } from '../../context/auth/store'
import { Doc } from '../../interface/doc'


const CreateDocModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [desc, _] = useState('');
    const user = useAuthStore((state) => state.profile)
    const userId = user.id
    const [title, setTitle] = useState("");

    const saveNewDoc = async () => {
        
        const dataJson: Doc = {
            authorId: userId,
            title: title,
            description: desc
        }
        try {
            const res = await createDocRequest(dataJson) 
            toast.success(res.success)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    
    <button className='px-3 py-2 rounded-md border ml-40 h-52 mt-5 dark:text-white dark:border-neutral-700' onClick={onOpen}>Nuevo documento</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center'>Nombre del documento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex justify-center'>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Nombre del documento' className='border px-5 w-64 py-2 rounded-md' />
            </div>
          </ModalBody>

          <div className=' flex justify-center gap-10 p-4'>
            <button onClick={() => saveNewDoc()} className='px-3  py-1  text-xl  border rounded-md'>Crear</button> 
               <button className='px-3  py-1  text-xl border rounded-md' onClick={onClose}>
              Cerrar
            </button>
          </div>
        </ModalContent>
      </Modal>
      </>
  )
}

export default CreateDocModal