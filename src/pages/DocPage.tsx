
import { useMutation } from "@tanstack/react-query"
import { CreateDocument } from "../interface/notas"
import Layout from "../Layout"
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { toast } from "react-toastify"
import { createDocRequest } from "../api/doc"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../context/auth/store"
import ErrorMessage from "../components/errors/ErrorMessage"
import DocList from "../components/docs/DocList"


const DocPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()


   const initialValues: CreateDocument = {
        title: "",
        authorId: ""
    }

    const user = useAuthStore((state) => state.profile);
    const userId = user.id;


    const {register, handleSubmit, formState: {errors}} = useForm<CreateDocument>({ defaultValues: initialValues })
    
    const mutation = useMutation({
        mutationFn: createDocRequest,
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
    
        },
        onSuccess: (data) => {
        toast.success(data.success);
        onClose(); 
    
   
        }
    })

   const handleForm = async (data: CreateDocument) => {
    try {
        
        const jsonData = {
            title: data.title,
            authorId: userId
        };

        mutation.mutate(jsonData)
        
    } catch (error) {
        console.log(error) 
      
    }
   }
  return (
    <Layout>
       <div className="flex justify-center flex-col w-11/12 mr-10 m-auto text-black dark:text-white">
        <aside className="justify-start p-4  flex ">
          <button className="border p-4 rounded-md h-48 w-36" onClick={onOpen}>Nuevo</button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
           
            <ModalContent>
               <ModalCloseButton/>   
                <form onSubmit={handleSubmit(handleForm)}>
            <div className="p-10 flex justify-center flex-col"> 

              <h2 className="text-center font-medium mb-5 text-xl">Nuevo documento</h2>

            <input type="text" placeholder="Nombre del documento" className="border rounded-md focus:border-neutral-400 focus:ring-1  focus:outline-none px-6 py-2"  {...register("title", {
                required: "El título es obligatorio",
                maxLength: {
                  value: 50,
                  message: "El título no puede tener más de 50 caracteres",
                },
              })}
            />
              {errors.title && (
  <ErrorMessage>{errors.title.message}</ErrorMessage>
)}
                </div>
            <div className="flex">
                   <button type="submit" className="rounded-md px-3 py-1 roubded-md border w-24 ml-4 mb-4">Crear</button>
              <button onClick={onClose} className="rounded-md px-3 py-1 roubded-md border w-24 ml-4 mb-4">Cerrar</button>
            </div>
          </form>
            </ModalContent>
            
          
          </Modal>
        </aside>
        <article className="p-6 rounded-md shadow-xl  border w-10/12 justify-center items-center flex mx-auto ">
           <DocList/>
        </article>
        </div> 
    </Layout>
    
  )
}

export default DocPage