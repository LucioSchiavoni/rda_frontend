
import { useMutation, useQuery } from "@tanstack/react-query"
import { CreateDocument } from "../interface/notas"
import Layout from "../Layout"
import { useDisclosure } from "@chakra-ui/react"
import { toast } from "react-toastify"
import { createDocRequest, getAllDocRequest, getDocByIdRequest } from "../api/doc"
import { useForm } from "react-hook-form"
import { useAuthStore } from "../context/auth/store"

import { Link, useNavigate } from "react-router-dom"
import DocItem from "../components/docs/DocItem"

const DocPage = () => {


  const user = useAuthStore((state) => state.profile)

  const userId = user.id

      const { data, isLoading } = useQuery<any, Error>({
      queryKey: ['docId', userId],
      queryFn: () => getAllDocRequest(userId|| "")
  });
  
  if(isLoading) return <div>Cargando...</div>

 if(data)
  return (
    <Layout>
    <div className="flex justify-center items-center p-10 ml-24">
   {
    data.map((item: any, index: number) => (
      <div key={index} className="border p-4 rounded-md text-white">
        <h2>{item.title}</h2>
        <Link to={`/docId/${userId}/${item.id}`} className="border px-4 py-2">Ver</Link>
      </div>
    ))
   }
    </div>
    </Layout>
    
  )
}

export default DocPage