import { useQuery } from "@tanstack/react-query"
import Layout from "../Layout"
import {  getAllDocRequest } from "../api/doc"
import { useAuthStore } from "../context/auth/store"
import { Link } from "react-router-dom"
import { SimpleGrid } from "@chakra-ui/react"



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
<>
    <Layout>
   <Link to='/createDoc' className="absolute top-10 left-40 border px-3 py-1 rounded-md">Nuevo doc</Link>
<SimpleGrid spacing={4} ml={24} p={24} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  {data.map((item: any, index: number) => (
 <Link to={`/docId/${userId}/${item.id}`}  key={index}  className="h-72 w-52 rounded-md border flex flex-col justify-between">
 <img src="https://icones.pro/wp-content/uploads/2022/06/icone-microsoft-word.png" alt="google-doc-icons" className=" w-36 m-auto" />
 <article className="">
 <div className="mt-auto w-full border p-2 bg-slate-100">
    <p className="text-center mb-4 text-2xl">{item.title}</p>
    <p className="text-center  ">Fecha</p>
 </div> 
 </article>
 </Link>
))}
</SimpleGrid>

    </Layout>
    </>
  )
}

export default DocPage






