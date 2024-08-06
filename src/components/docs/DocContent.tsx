
import { Link } from 'react-router-dom'
import DocItem from './DocItem'
import { CreateDocument } from '../../interface/notas'




const DocContent = () => {

    const initialValues: CreateDocument = {
        description: "",
        title: "",
        authorId: ""
    }


    


  return (
    <div className='flex '>
        <span className='min-h-screen fixed w-1/12 flex flex-col gap-24 p-4 bg-white border shadow-xl'>
          <Link to="/doc" className='text-center rounded-md bg-gray-200 px-3 py-1'>Volver</Link>   
          <div className='flex flex-col gap-10 justify-center items-center'>
            <button className='w-28 m-auto border rounded-md px-3 py-1 text-sm'>Agregar colaborador</button>
            <p className=''>Colaboradores</p>
          </div>
        </span> 

        <div className='flex flex-col w-11/12 ml-40'>
             <aside className=' bg-[url(https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg)] bg-center bg-no-repeat bg-cover h-52 '>
            <h1 className='mt-24 font-semibold  text-5xl text-center'>Titulo</h1>
            <button className='absolute top-5 ml-8 border px-3 py-1 rounded-md bg-white font-medium shadow-xl'>Guardar</button>
        </aside>
        <div className='w-11/12  m-auto  bg-white mt-12'> 
          <DocItem />  
        </div>
        </div>
       
        
    </div>

  )
}

export default DocContent