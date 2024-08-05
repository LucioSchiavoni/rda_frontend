import { Link } from "react-router-dom"
import Layout from "../Layout"


const DocPage = () => {
  return (
    <Layout>
       <div className="flex justify-center flex-col w-11/12 mr-10 m-auto">
        <aside className="justify-start p-4  flex text-white">
            <Link to='/docItem' className="border p-4 rounded-md">Crear doc button</Link>
        </aside>
        
        <article className="p-4 flex justify-center border ">
            <p className="text-white font-semibold">Mapeado de docs creados</p>
        </article>
        </div> 
    </Layout>
    
  )
}

export default DocPage