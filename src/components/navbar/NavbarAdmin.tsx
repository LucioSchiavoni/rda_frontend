import { useAuthStore } from "../../context/auth/store"


const NavbarAdmin = () => {

      const session = useAuthStore(state => state.profile)

  return (
    <div className="gap-5 flex flex-col absolute left-0 border p-4 min-h-screen">
        <p>{session.id}</p>
        <p>{session.username}</p>
        <p>{session.rol}</p>
        <div className="flex flex-col gap-10">
           <button className="border p-2">Crear user</button>
        <button className="border p-2">Cambiar password</button>
        <button className="border p-2">Crear nota</button> 
        </div>
        
    </div>
  )
}

export default NavbarAdmin