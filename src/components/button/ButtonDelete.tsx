
import { deleteFolderRequest } from "../../api/notas"

interface PostIdPorps {
    id:{
        id: number
    }
}

const ButtonDelete: React.FC<PostIdPorps> = ({id}) => {


    const handleDelete = async(data: any) => {
        try {
            console.log("Delete :", data.id.id)
           const res = await deleteFolderRequest(data.id.id) 
           return res.data
        } catch (error) {
            console.log(error)   
        }
    }

  return (
    <div>
        <button onClick={() => handleDelete(id.id)}>
            Borrar
        </button>
    </div>
  )
}


export default ButtonDelete