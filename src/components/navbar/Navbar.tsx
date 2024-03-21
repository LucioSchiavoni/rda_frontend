import { useAuthStore } from "../../context/auth/store"
import NavbarAdmin from "./NavbarAdmin"
import NavbarUser from "./NavbarUser"


const Navbar = () => {

  const session = useAuthStore(state => state.profile)

  return (
  <>
           {
        session.rol === "ADMIN" ?
       <NavbarAdmin/>
        :
        session.rol === "USER" ?
       <NavbarUser/>
        :
        null
      }
    </>
  )
}

export default Navbar