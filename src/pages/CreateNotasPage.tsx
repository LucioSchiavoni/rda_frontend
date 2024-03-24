import { Link } from "react-router-dom"
import CreateNotas from "../components/forms/notas/CreateNotas"



const CreateNotasPage = () => {
  return (
    <div className="w-4/12 m-auto mt-24">
 <Link to='/auth' className="absolute top-5 left-5 border rounded-md shadow-xl px-3 py-1">
        Volver
        </Link>
      <CreateNotas/>
      

    </div>
  )
}

export default CreateNotasPage