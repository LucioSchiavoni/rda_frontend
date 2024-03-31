import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,

  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from '@chakra-ui/react'

import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSeguimientoRequest } from '../../api/notas';
import { toast } from 'react-toastify';


interface ArchivoProps {
    id: string;
}
const SubirArchivo: React.FC<ArchivoProps> = ({id}) => {


 const {handleSubmit} = useForm()
const idParam = id;

const [file, setFile] = useState<File | null>(null);
        const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
        }
    };


   const handleForm = async () => {
        try {
            const formData = new FormData()
            formData.append("nro_referencia", idParam.toString())
            if(file){
                 formData.append("seguimiento[archivo][ruta]", file)
                 
            }
           const data = await createSeguimientoRequest(formData)
            toast.success(data.succes)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
        
    }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <button onClick={onOpen} className=' px-3 py-1.5 font-semibold rounded-sm hover:bg-gray-100 transition-all '>Subir archivo</button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent className='h-64'>
          <ModalHeader className='text-center'>Subir nueva nota al seguimiento</ModalHeader>
          <ModalCloseButton />
          <ModalBody className=' flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleForm)}>
                
                <div className='flex flex-col'>
                       <input type="file" onChange={(e) => handleFileChange(e)} />
               
                </div>
              <button type='submit' className='w-full hover:bg-blue-800  px-3 py-2 text-xl bg-blue-950 rounded-md text-white font-semibold mt-10'>Subir</button>
            </form>
          </ModalBody>

       
        </ModalContent>
      </Modal>
    </>
  )
}


export default SubirArchivo;