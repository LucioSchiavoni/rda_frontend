import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonCreate from "../button/ButtonCreate";
import { MdArrowBack } from "react-icons/md";
// import UploadFileInFolder from "./UploadFileInFolder";


  


const NotaId = () => {
    
   const { id } = useParams<{ id: string }>();

    const {data , isLoading, error} = useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getNotasByIdRequest(id || ""),
        enabled: !!id,
        
    })

    const navigate = useNavigate();

const handleRowClick = (postId: number, folderId: number) => {
    navigate(`/folder/${postId}/${folderId}`);
};

        if (isLoading) return <div><p>cargando...</p></div>;
        if (error) return <div><p>Error: {error.message}</p></div>;
        if (!data) return <div><p>No se encontraron datos.</p></div>;


  return (

    <div className="flex justify-center items-center flex-col gap-10  dark:text-white ">
      <div className='top-32 left-24 absolute'>
        <ButtonCreate id={data.id}/> 
      </div>


<Link to='/auth' className="absolute left-24 top-10 border dark:border-neutral-700 shadow-xl px-3 py-1 rounded-md text-3xl">
    <MdArrowBack/>
</Link>
<aside className="absolute top-10 left-40 px-3 ">
    <h1 className=" font-medium text-3xl">{data.title}</h1>
    <p className="text-gray-700 dark:text-white px-3 text-start mt-2 ">{data.content}</p>
</aside>
<section className=" w-10/12 mt-32 ">    

        <h2 className="font-thin text-2xl pb-6 px-3">
        Carpetas
    </h2>
  
   
       
     <div className="grid grid-cols-6 w-full gap-6">
                        {
                            data.folder?.map((itemFolder, folderIndex) => (
                                <button key={folderIndex} onClick={() => handleRowClick(data.id, itemFolder.id)} className="dark:border-neutral-800 border mt-6  flex justify-between   shadow-xl  px-3 py-1 bg-gray-100 dark:bg-neutral-900 dark:text-white  rounded-md">
                                    <p className="text-start font-semibold">{itemFolder.nameFolder}</p>
                                    {/* <p className="text-end font-thin text-sm mt-0.5">{itemFolder.createdAt}</p> */}
                                    {/* <UploadFileInFolder id={data.id} folderId={itemFolder.id}/> */}
                                </button>
                            ))
                        }
                    </div>

</section>
 
 <section className=" w-10/12 mt-16 ">
   
          <h2 className="text-2xl  ml-5 pb-8  font-thin">Archivos</h2>
       

     
       <div className="grid grid-cols-6  gap-5">

     {data.file?.map((itemFile, indexFile) => (


                        <div key={indexFile} className="bg-gray-100 dark:bg-neutral-900 dark:border-neutral-800 border shadow-lg p-4 rounded-md  space-y-10 hover:scale-105 transition-all delay-150 duration-300">
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