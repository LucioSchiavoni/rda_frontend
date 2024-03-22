import { Link } from "react-router-dom"
import UserForm from "../components/forms/user/UserForm"

const RegisterPage = () => {
  return (
    <div className="m-auto w-4/12 mt-40 ">
        <Link to='/auth' className="absolute top-5 left-5 border rounded-md shadow-xl px-3 py-1">
        Volver
        </Link>
            <UserForm/>
        </div>
           
    
 
  )
}

export default RegisterPage