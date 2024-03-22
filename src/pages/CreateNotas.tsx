import { Link } from "react-router-dom"
import NotasForm from "../components/forms/notas/NotasForm"


const CreateNotas = () => {
  return (
    <div className="w-4/12 m-auto mt-24">
 <Link to='/auth' className="absolute top-5 left-5 border rounded-md shadow-xl px-3 py-1">
        Volver
        </Link>

      <NotasForm/>

    </div>
  )
}

export default CreateNotas