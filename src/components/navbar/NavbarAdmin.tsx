import { Link } from "react-router-dom"
import { useAuthStore } from "../../context/auth/store"


const NavbarAdmin = () => {

      const session = useAuthStore(state => state.profile)
      const logout = useAuthStore(state => state.logout)

  return (
    <div className="gap-5 flex flex-col absolute left-0 border p-4 min-h-screen">
        <p>{session.id}</p>
        <p>{session.username}</p>
        <p>{session.rol}</p>
        <div className="flex flex-col gap-10">
           <Link to='/register' className="border p-2 text-center">Crear user</Link>
        <button className="border p-2">Cambiar password</button>
        <Link to="/createNotas" className="border p-2 text-center">Crear nota</Link> 
        <button className="border" onClick={logout}>Cerrar sesion</button>
        </div>
        
    </div>
  )
}

export default NavbarAdmin