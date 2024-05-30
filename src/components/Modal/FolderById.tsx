import { useParams } from "react-router-dom";
import { File } from "../../interface/notas";
import { useQuery } from "@tanstack/react-query";
import { getFolderById } from "../../api/notas";
import { useEffect } from "react";


const FolderById = () => {

    const { postId, folderId } = useParams<{ postId: any, folderId: any}>();
    
    
    const { data, isLoading, error } = useQuery<File>({
        queryKey: ['folder', postId, folderId],
        queryFn: () => getFolderById(postId!, folderId!),
        enabled: !!postId && !!folderId,
    });
  useEffect(() => {
    console.log("la data: ",data?.nameFile)
  },[])
 
    if(isLoading) 
        return(
         <div>Cargando..</div>
    )

    
    if(error) 
        return(
         <div>{error.message}</div>
    )
    
    return (
    <div className="flex items-center gap-10">
        {
          data?.nameFile
        }
       
    </div>
  )
}

export default FolderById