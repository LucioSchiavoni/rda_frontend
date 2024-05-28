import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "../../context/auth/store"
import { Post } from "../../interface/notas";
import { getNotasRequest } from "../../api/notas";
import NotaId from "../Modal/NotaId";
import { Link } from "react-router-dom";

const PostContent = () => {

  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ['notas'],
    queryFn: getNotasRequest
});

if(isLoading)
  return (
    <div>
      <p className="text-center text-3xl ">Cargando...</p>
    </div>
  )

if(data)
  return (
    <div className='flex items-center justify-center  flex-col gap-5 w-8/12 m-auto '>
     

    
        {
          data.map((item, index) => (
           
            <div key={index} className="border px-5 py-3 gap-8 flex rounded-md dark:text-white dark:border-none dark:bg-gray-800 shadow-xl w-full">
             <Link to={`auth/${item.id}`}>
            <aside className="flex gap-1"> <span className="font-bold">Asunto:</span> <p>{item.title}</p></aside>
              <aside className="flex gap-1"><span className="font-bold">Titulo:</span> <p>{item.content}</p></aside>
                <p>{item?.file?.map((itemFile, fileIndex) => (
                  <div key={fileIndex}>
                      <p>{itemFile.nameFile}</p>
                  </div>
                ))
                
                }</p>

                
                  <p className="capitalize flex">Author: {item.author.name}</p>

<p>{item?.folder?.map((itemFolder, folderIndex) => (
                  <div key={folderIndex}>
                      <p> carpeta: {itemFolder.nameFolder}</p>
                  </div>
                ))
                
                }</p>
             
    </Link>
            </div>
             
          ))
          
        }

    </div>
  )
}

export default PostContent