import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import { Link, useParams } from "react-router-dom";
import ButtonCreate from "../button/ButtonCreate";



  


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

    <div className="flex justify-center items-center flex-col gap-10  dark:text-white ">
      <div className='top-28 left-24 absolute'>
        <ButtonCreate id={data.id}/> 
      </div>
<Link to='/auth' className="absolute left-24 top-10  border shadow-xl px-3 py-1 rounded-md">
    Volver
</Link>

<aside className="absolute top-10 left-52 px-3 ">
    <h1 className=" font-medium text-3xl">{data.title}</h1>
    <p className="text-gray-700 text-start mt-2 ">{data.content}</p>
</aside>
<section className=" w-10/12 mt-10 ">
    <span className="flex items-center gap-10">

        <h2 className="font-thin text-2xl ">
        Carpetas
    </h2>
    <p className="text-md border rounded-md p-1 shadow-xl font-thin mt-1">Crear carpeta+</p>
    </span>
       
     <div className="grid grid-cols-6 w-full gap-6">
                        {
                            data.folder?.map((itemFolder, folderIndex) => (
                                <div key={folderIndex} className="border mt-6  flex gap-8 shadow-xl  px-4 py-2 bg-gray-100  rounded-md">
                                    <p className="text-start font-semibold">{itemFolder.nameFolder}</p>
                                    <p className="text-end font-thin text-sm mt-0.5">{itemFolder.createdAt}</p>
                                </div>
                            ))
                        }
                    </div>

</section>
 
 <section className=" w-10/12 mt-20 ">
    <span className="flex items-center mb-10 gap-10">
          <h2 className="text-2xl  ml-5  font-thin">Archivos</h2>
          <p className="text-md border rounded-md p-1 shadow-xl font-thin">Crear archivo+</p>
    </span>
     
       <div className="grid grid-cols-6  gap-5">

     {data.file?.map((itemFile, indexFile) => (


                        <div key={indexFile} className="bg-gray-100 border shadow-lg p-4 rounded-md  space-y-10 hover:scale-105 transition-all delay-150 duration-300">
                              <p className="font-semibold underline underline-offset-2">{itemFile.nameFile}</p>
                                <p>{itemFile.createdAt}</p>
                        </div>
                    ))}
    </div>
    </section>              
                   

                   
                  
        </div>
  
  )
}

export default NotaId