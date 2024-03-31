import { useForm } from "react-hook-form"
import { registerRequest } from "../../../api/auth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const UserForm = () => {

  

     const { register, handleSubmit, watch, formState: { errors } } = useForm<{
        username: string;
        password: string;
        confirmPassword: string;
        rol: string;
      }>();
     const navigate = useNavigate()

    const handleForm = async(data: Record<string, any>) => {

      try {
          const jsonData = {
            username: data.username,
            password: data.password,
            rol: data.rol
          }
          const res = await registerRequest(jsonData)
          toast.success(res.success)
          navigate("/auth")
          
      } catch (error) {
        console.log(error)
      }
    }

    

  return (
    <form className="p-4 border shadow-xl rounded-md bg-white" onSubmit={handleSubmit(handleForm)}>
        <h2 className="text-center text-3xl mb-10 font-semibold">Registrar usuario</h2>
 <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Nombre de usuario</p>
          <input placeholder="" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md" {...register("username", {
            required: "Este campo es requerido",
          })}/>
           {errors.username ? <span className="text-red-800 text-xl px-2 py-1">{errors.username.message}</span> : null}
        </div>
        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Contraseña</p>
          <input placeholder="****" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"   {...register("password", {
            required: "Este campo es requerido",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          })}/>
          {errors.password ? <span className="text-red-800 text-xl px-2 py-1">{errors.password.message}</span> : null}
        </div>
        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Repetir contraseña</p>
          <input placeholder="****" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"    {...register("confirmPassword", {
            validate: value => value === watch("password") || "Las contraseñas no coinciden"
          })}
        />
        {errors.confirmPassword ? <span className="text-red-800 text-xl px-2 py-1">{errors.confirmPassword.message}</span> : null}


        </div>
           <div className="relative ">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Rol</p>
          <select {...register("rol", {
            required: "Este campo es obligatorio"
          }) } className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md">
            <option value="USER">Usuario</option>
            <option value="ADMIN">Administrador</option>
          </select>
           {errors.rol ? <span className="text-red-800 text-xl px-2 py-1">{errors.rol.message}</span> : null}
        </div>

<button type="submit" className="mt-8 border px-3 py-2 rounded-md  w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xl justify-center ">Registrar</button>
    </form> 
  )
}

export default UserForm