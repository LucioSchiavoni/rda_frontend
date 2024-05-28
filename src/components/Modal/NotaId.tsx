import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import React from "react";
import { useParams } from "react-router-dom";



  


const NotaId = () => {
    
  const {id} = useParams || {};

    const {data , isLoading} = useQuery<Post[] >({
        queryKey: ['post', id],
        queryFn: () => getNotasByIdRequest(id)
        
    })

    if(isLoading)
        return ( 
    <div>
        <p>cargando..</p>
    </div>
        )



    if(data)
  return (
    <div>
       
        {
            data.map((item, index) => (
                <div key={index} className="border">
                    <p>{item.file?.map((itemFile, indexFile) => (
                        <div key={indexFile}>
                                <p>{itemFile.nameFile}</p>
                                
                        </div>
                    ))}</p>
                </div>
            ))
        }
        
    </div>
  )
}

export default NotaId