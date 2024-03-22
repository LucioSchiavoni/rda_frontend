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
          if(res && res?.status === 401){
            setMessage(true)
            console.log("Error aqui", res?.data.error)
          }else {
            setToken(res?.data.token)
            const data = await auth();
            setProfile(data)
            navigate("/auth")
          }

      } catch (error) {
        console.log("Error del componente login: ", error)
      }


    }


  return (
    <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 ">
    <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
        relative z-10">
      <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Inicia sesion</p>
      <form onSubmit={handleSubmit} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Nombre de usuario</p>
          <input placeholder="" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
       
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Contraseña</p>
          <input placeholder="******" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
        <div className="relative">
          <button type="submit" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-blue-800
              rounded-lg transition duration-200 hover:bg-blue-700 ease">Ingresar</button>
              {
                message && (

                  <div>
                    <p className="text-red-800">Datos incorrectos</p>
                  </div>
                )
              }
        </div>
      </form>
    </div>


  </div>
  )
}

export default LoginForm