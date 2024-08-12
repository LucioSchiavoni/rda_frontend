import { useQuery } from "@tanstack/react-query"
import Layout from "../Layout"
import {  getAllDocRequest } from "../api/doc"
import { useAuthStore } from "../context/auth/store"
import { Link } from "react-router-dom"
import { SimpleGrid, Tooltip } from "@chakra-ui/react"
import DateFormat from "../components/utils/DateFormat"
import { MdDelete } from "react-icons/md"
import { SiMicrosoftword } from "react-icons/si";

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
      <Tooltip label="Crear nuevo documento">
           <Link to='/createDoc' className="absolute top-10 left-40 border px-3 py-1 rounded-md text-xl flex items-center gap-2">Crear nuevo <span><SiMicrosoftword /></span></Link>
      </Tooltip>

<SimpleGrid spacing={4} ml={24} p={24} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  {data.map((item: any, index: number) => (
 <Link to={`/docId/${userId}/${item.id}`}  key={index}  className="h-72 w-52 rounded-md border flex flex-col justify-between">
 <img src="https://icones.pro/wp-content/uploads/2022/06/icone-microsoft-word.png" alt="google-doc-icons" className=" w-36 m-auto" />
 <article className="">
 <div className="mt-auto w-full border p-2 bg-slate-100">
    <p className="text-center mb-4 text-2xl">{item.title}</p>
    <div className="flex justify-between "> 
      <p className=" text-sm  text-center font-medium"><DateFormat item={item.createdAt}/></p>
    <MdDelete size={24}/>
    </div>
   
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






