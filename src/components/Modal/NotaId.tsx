import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import { useParams } from "react-router-dom";



  


const NotaId = () => {
    
   const { id } = useParams<{ id: string }>();

    const {data , isLoading, error} = useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getNotasByIdRequest(id || ""),
        enabled: !!id,
        
    })

        if (isLoading) return <div><p>cargando...</p></div>;
        if (error) return <div><p>Error: {error.message}</p></div>;
        if (!data) return <div><p>No se encontraron datos.</p></div>;



  return (

    <div className="w-8/12 m-auto  dark:text-white ">
       

               
                    <p>{data.file?.map((itemFile, indexFile) => (
                        <div key={indexFile} className="flex gap-5">
                              <p className="font-semibold underline underline-offset-2">{itemFile.nameFile}</p>
                                <p>{itemFile.createdAt}</p>
                        </div>
                    ))}</p>

                    <div className=" p-3 flex gap-4">
                        {
                            data.folder?.map((itemFolder, folderIndex) => (
                                <div key={folderIndex} className="border px-3 py-1 rounded-md">
                                    <p>{itemFolder.nameFolder}</p>
                                </div>
                            ))
                        }
                    </div>
                  
        </div>
  
  )
}

export default NotaId