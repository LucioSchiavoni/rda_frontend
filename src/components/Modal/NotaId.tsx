import { useQuery } from "@tanstack/react-query";
import { getNotasByIdRequest } from "../../api/notas";
import { Post } from "../../interface/notas";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonCreate from "../button/ButtonCreate";
import { MdArrowBack } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
// import UploadFileInFolder from "./UploadFileInFolder";


  


const NotaId = () => {
    
   const { id } = useParams<{ id: string }>();

    const {data , isLoading, error} = useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getNotasByIdRequest(id || ""),
        enabled: !!id,
        
    })

    const navigate = useNavigate();

const handleRowClick = (postId: number, folderId: number, titlePost: string, nameFolder: string) => {
    navigate(`/folder/${postId}/${folderId}/${titlePost}/${nameFolder}`);
};

        if (isLoading) return <div><p>cargando...</p></div>;
        if (error) return <div><p>Error: {error.message}</p></div>;
        if (!data) return <div><p>No se encontraron datos.</p></div>;


  return (

    <div className="flex flex-1 justify-center items-center flex-col gap-10  dark:text-white ">
      



<aside className="flex absolute left-24 top-10 gap-5">
    <Link to='/auth' className="shadow-xl h-10 hover:bg-gray-100 dark:hover:bg-neutral-800 px-3 py-1 rounded-md text-3xl">
    <MdArrowBack/>
</Link>
<article className="flex flex-col">
        <h1 className=" font-medium text-3xl">{data.title}</h1>
    <p className="text-gray-700 dark:text-white px-3 text-start mt-2 ">{data.content}</p>
</article>

    <div className=''>
        <ButtonCreate id={data.id}/> 
      </div>
</aside>
<section className=" w-10/12 mt-32 ">    

        <h2 className="font-thin text-2xl pb-6 px-3">
        Carpetas
    </h2>
  
   
       
     <div className="grid grid-cols-6 w-full gap-6">
                        {
                            data.folder?.map((itemFolder, folderIndex) => (
                                <button key={folderIndex} onClick={() => handleRowClick(data.id, itemFolder.id, data.title || "", itemFolder.nameFolder)} className="items-center dark:border-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-800 border mt-6 py-2.5 flex justify-between   shadow-xl  px-4 bg-gray-100 dark:bg-neutral-900 dark:text-white  rounded-md">
                                    <p className="text-start font-thin">{itemFolder.nameFolder}</p>
                                    <span className="text-xl mt-1 dark:text-white"><FaFolder/></span>
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