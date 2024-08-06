
import Layout from "../Layout"
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"


const DocPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Layout>
       <div className="flex justify-center flex-col w-11/12 mr-10 m-auto text-black dark:text-white">
        <aside className="justify-start p-4  flex ">
          <button className="border p-4 rounded-md h-48 w-36" onClick={onOpen}>Nuevo</button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
           
            <ModalContent>
               <ModalCloseButton/>
            <div className="p-10 flex justify-center flex-col">
              <h2 className="text-center font-medium mb-5 text-xl">Nuevo documento</h2>
              <input type="text" placeholder="Nombre del documento" className="border rounded-md focus:border-neutral-400 focus:ring-1  focus:outline-none px-6 py-2" />
            </div>
            <div className="flex">
                   <button className="rounded-md px-3 py-1 roubded-md border w-24 ml-4 mb-4">Crear</button>
              <button onClick={onClose} className="rounded-md px-3 py-1 roubded-md border w-24 ml-4 mb-4">Cerrar</button>
            </div>
       
            </ModalContent>
            
          
          </Modal>
        </aside>
        <article className="p-6 rounded-md shadow-xl  border w-10/12 justify-center items-center flex mx-auto ">
            <p className="">Mapeado de docs creados</p>
        </article>
        </div> 
    </Layout>
    
  )
}

export default DocPage