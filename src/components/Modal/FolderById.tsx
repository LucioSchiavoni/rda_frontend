import { Link, useParams } from "react-router-dom";
import { File } from "../../interface/notas";
import { useQuery } from "@tanstack/react-query";
import { getFolderById } from "../../api/notas";
import { MdArrowBack } from "react-icons/md";

const FolderById = () => {
    const { postId, folderId } = useParams<{ postId: string, folderId: string }>();

    const postIdNumber = postId ? parseInt(postId) : undefined;
    const folderIdNumber = folderId ? parseInt(folderId) : undefined;

    const { data, isLoading, error } = useQuery<File[], Error>({
        queryKey: ['folder', postIdNumber, folderIdNumber],
        queryFn: async () => {
            if (postIdNumber !== undefined && folderIdNumber !== undefined) {
                return await getFolderById(postIdNumber, folderIdNumber);
            }
            return Promise.reject("Invalid IDs");
        },
        enabled: postIdNumber !== undefined && folderIdNumber !== undefined,
    });

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (

      <div className="">
      <Link to='/auth' className="absolute left-24 top-10 dark:border dark:border-neutral-700 shadow-xl px-3 py-1 rounded-md text-3xl">
    <MdArrowBack/>
</Link>
        <div className="grid grid-cols-4 p-24">
            {Array.isArray(data) && data.map((item: File, index: number) => (
                <div key={index} className="m-auto p-8 border w-52 h-38 rounded-md shadow-xl">
                    <p>{item.nameFile}</p>
                </div>
            ))}
        </div>
      </div>
        
    );
}

export default FolderById;
