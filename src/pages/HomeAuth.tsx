import Navbar from "../components/navbar/Navbar"
import NotasAdmin from "../components/notas/NotasAdmin"





const HomeAuth = () => {



  return (
    <>
   <Navbar/>
   <div className="flex justify-center items-center py-24">
    
    <NotasAdmin/>
   </div>
   </>
  )
}

export default HomeAuth