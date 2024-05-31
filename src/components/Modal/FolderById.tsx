import { Link, useParams } from "react-router-dom";
import { File } from "../../interface/notas";
import { useQuery } from "@tanstack/react-query";
import {  getFolderById } from "../../api/notas";
import { MdArrowBack } from "react-icons/md";
import ButtonDownload from "../button/ButtonDownload";

import SubirArchivo from "./ArchivoModal";

const FolderById = () => {
    const { postId, folderId, titlePost, nameFolder } = useParams<{ postId: any, folderId: string, titlePost: string, nameFolder:string }>();

    const postIdInt = parseInt(postId || "");
    const folderIdInt = parseInt(folderId || "");

    const { data, isLoading, error } = useQuery<File[], Error>({
        queryKey: ['folder', postIdInt, folderIdInt],
        queryFn: () => getFolderById(postIdInt, folderIdInt),
        enabled: !!postId && !!folderId,
    });




    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (

      <div className="dark:text-white">
        <aside className="absolute gap-8 left-24 top-10 flex items-center text-2xl font-thin ">
        <Link to={`/auth`} className="  dark:hover:bg-neutral-800 hover:bg-gray-100 shadow-xl px-3 py-1 rounded-md text-3xl">
            <MdArrowBack/>
        </Link>
        <Link to={`/${postId}`} >
           <p className=" hover:bg-gray-100 dark:hover:bg-neutral-800 p-2 hover:font-normal  rounded-md">{titlePost}</p>
        </Link>
     
        <p className="hover:underline underline-offset-2">{nameFolder}</p>
        </aside>

        <div className="flex flex-col  mt-16  ">
                <span className="ml-40 w-56  shadow-xl rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-800 bg-gray-50 border text-center">
                    <SubirArchivo id={postId} folderId={folderId} /> 
                </span>
             
            
            <h2 className="ml-36 text-2xl  text-start mt-10 ">Archivos en esta carpeta</h2> 
        </div>
            
        <div className="grid grid-cols-6 ml-24 p-8 gap-24 place-content-start   dark:text-white ">
            {Array.isArray(data) && data.map((item: File, index: number) => (
                <div key={index} className="m-auto mt-2 gap-5 flex justify-between flex-col border dark:border-neutral-800 text-md w-52 h-36 text-center px-3 py-1 rounded-md shadow-xl">
                    <p>{item.nameFile}</p>
                    <ButtonDownload fileId={item.id} nameFile={item.nameFile}/>
                </div>
            ))}
           
        </div> 

      </div>
        
    );
}

export default FolderById;


