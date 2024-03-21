import { useState } from "react"
import { loginRequest, auth } from "../api/auth"
import { useAuthStore } from "../context/auth/store"
import { useNavigate} from "react-router-dom"



const LoginForm = () => {

  const setToken = useAuthStore(state => state.setToken)

  const setProfile = useAuthStore(state => state.setProfile)

  const [message, setMessage] = useState<boolean>(false)



  const navigate = useNavigate()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault()
      const username = (e.currentTarget.elements[0] as HTMLInputElement).value
      const password = (e.currentTarget.elements[1] as HTMLInputElement).value

      try {
          const res = await loginRequest(username, password)
          if(res?.status === 401){
            setMessage(true)
            console.log("Error aqui", res?.data.error)
          }else {
            setToken(res?.data.token)
            const data = await auth();
            setProfile(data)
            console.log(data)
            navigate("/auth")
          }

      } catch (error) {
        console.log("Error del componente login: ", error)
      }


    }


  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 rounded-md border shadow-xl flex flex-col gap-5">

<div className="flex flex-col text-center gap-2">
  <label htmlFor="">Nombre de usuario</label>
  <input type="text" name="username" className="px-3 py-1 rounded-md bg-white shadow-xl border focus:p-3 transition-all" />
</div>
<div className="text-center flex flex-col gap-2">
  <label htmlFor="">Contraseña</label>
<input type="password" name="password"  className="px-3 py-1 rounded-md bg-white shadow-xl border focus:p-3 transition-all"/>
</div>

<button type="submit" className="mt-8 px-3 py-1 rounded-md bg-blue-700 text-white hover:bg-blue-600">Ingresar</button>

{
  message && (
    <div className="text-xl text-red-700 ">
      Datos incorrectos
    </div>
  )
}
      </form>
        
    </div>
  )
}

export default LoginForm