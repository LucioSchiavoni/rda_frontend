

import { deleteFolderRequest } from "../../api/notas"

interface PostIdPorps {
    id: number,
    folderId: number
}

const ButtonDelete: React.FC<PostIdPorps> = ({id, folderId}) => {


    const handleDelete = async() => {
        try {
            console.log("El id: ", id)
            console.log("Delete :", folderId)

           const res = await deleteFolderRequest(id,folderId)
            return res
         
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <div>
        <button onClick={handleDelete}>
            Borrar
        </button>
    </div>
  )
}


export default ButtonDelete