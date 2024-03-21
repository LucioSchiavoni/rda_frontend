import LoginForm from "../components/LoginForm"


const Home = () => {
  return (
    <div> 
        <h1 className="text-center font-semibold text-2xl">Bienvenido</h1>
        <div className="w-96  m-auto mt-36">
        <LoginForm/>
        </div>
    </div>
  )
}

export default Home