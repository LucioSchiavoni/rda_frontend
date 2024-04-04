import LoginForm from "../components/LoginForm"


const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 min-h-screen">
    <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex">
            <div className="lg:w-1/2">
              

                <h1 className="mt-4 text-white md:text-4xl">Bienvenido!</h1>
                
                <h1 className="mt-4 text-6xl font-medium text-white capitalize  dark:text-white">
                
                Inicia Sesión
                </h1>
            </div>

           <LoginForm/>
            
        </div>

      
    </div>
</section>
  )
}

export default Home