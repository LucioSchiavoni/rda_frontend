import { useAuthStore } from "../context/auth/store"




const HomeAuth = () => {

const session = useAuthStore(state => state.profile)

  return (
    <div>
      {
        session.rol === "ADMIN" ?
        <div>
          <p>tremendo admin el tipo</p>
          <p>{session.id}</p>
        <p>{session.username}</p>

        </div>
        :
        session.rol === "USER" ?
        <div>
          <p>un user sin privilegios</p>
        </div>
        :
        null
      }
    </div>
  )
}

export default HomeAuth