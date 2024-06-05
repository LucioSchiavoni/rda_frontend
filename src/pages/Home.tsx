import LoginForm from "../components/LoginForm"
import StarsCanvas from "../components/layout/StarBackground"


const Home = () => {
  return (
    <section className="bg-neutral-900  min-h-screen">
    
    <div className="container px-6 py-24 mx-auto lg:py-32"> 
   
        <div className="lg:flex ">
            <div className="lg:w-1/2 ">
              
            <StarsCanvas/>
                
            </div>
           <div className="z-50 w-full">
            <LoginForm/>
            </div>
         

    
            
        </div>

      
    </div>
</section>
  )
}

export default Home