import { useQuery } from "@tanstack/react-query"
import { Post } from "../../interface/notas";
import { getNotasRequest } from "../../api/notas";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import DateFormat from "../utils/DateFormat";


const PostContent = () => {

  const { data, isLoading } = useQuery<Post[], Error>({
    queryKey: ['notas'],
    queryFn: getNotasRequest
});

const navigate = useNavigate();

const handleRowClick = (id: number) => {
  navigate(`/${id}`);
};

if(isLoading)
  return (
    <div>
      <p className="text-center text-3xl ">Cargando...</p>
    </div>
  )

  if(!data || data.length === 0){
    return(
      <div className="w-10/12 m-auto flex flex-col gap-10">
        <p className="text-center text-2xl font-medium dark:text-white">Sin repositorios creados</p>
        <Link to='/createPost' className="w-64 text-center rounded-md dark:bg-white border dark:text-black bg-neutral-900 text-white hover:bg-neutral-800 font-medium dark:hover:bg-gray-100 px-3 py-1 m-auto">
        Crear repositorio
        </Link>
      </div>
    )
  }

if(data)
  return (

    <div className="flex flex-col w-10/12 m-auto">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="px-16 py-2 text-start text-xs font-medium text-gray-500 uppercase dark:text-white">Autor</th>
              <th scope="col" className="px-6 py-2 text-start text-xs font-medium text-gray-500 uppercase dark:text-white">Asunto</th>
              <th scope="col" className="px-6 py-2 text-end text-xs font-medium text-gray-500 uppercase dark:text-white">Colaboradores</th>
              <th scope="col" className="px-6 py-2 text-end text-xs font-medium text-gray-500 uppercase dark:text-white">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
           
           
              {

       
              
                data.map((item, index) => (

                     <tr key={index} onClick={() => handleRowClick(item.id)} className="tr-button hover:font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 hover:shadow-xl ">  
              <td className="px-2 py-2 whitespace-nowrap   text-gray-800 dark:text-neutral-200">
                <span className="flex gap-2">
                                 {item.state === "PUBLIC" ? <p className="text-sm mt-0.5 ml-5"></p> :     <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5  text-gray-600 dark:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span> }
               <p className="px-3 ">
                {item.author?.name}  
                </p> 
                </span>
 
               </td>
              <td className="  px-6 py-2 text-gray-800 dark:text-neutral-200">
                <span className="flex gap-3 w-full ">
                     
                      <p className="font-medium hover:font-bold">
                         {item.title === null ? <p className="text-gray-400">Sin titulo</p>  : item.title}
                      </p>
               <p>-</p>
                <p>
                     {item.content === null ? <p className="text-gray-400 ">Sin asunto</p>  : item.content}
                </p>
             
                </span>
            
                </td>
                  <td>

                  </td>

              <td className="px-6 py-2 whitespace-nowrap text-end text-sm font-medium text-gray-800 dark:text-neutral-200">
                <DateFormat  item={item.createdAt}/>
                
              </td> 
              </tr>
           
                 
                ))
             
              }
             
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          
  )
}

export default PostContent