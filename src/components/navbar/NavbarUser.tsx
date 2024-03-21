import { useAuthStore } from "../../context/auth/store"


const NavbarUser = () => {

       const session = useAuthStore(state => state.profile)

  return (
    <div className="p-4"> 
    <div>   Usuario: </div>
     
        <div>
  {session.id}
        </div>
          <div>
           {session.username} 
        </div>
          <div>
              {session.rol}
        </div>
      
        
      
    </div>
  )
}

export default NavbarUser