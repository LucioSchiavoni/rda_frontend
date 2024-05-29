import { useQuery } from "@tanstack/react-query"

import { Post } from "../../interface/notas";
import { getNotasRequest } from "../../api/notas";

import { Link } from "react-router-dom";

const PostContent = () => {

  const { data, isLoading } = useQuery<Post[], Error>({
    queryKey: ['notas'],
    queryFn: getNotasRequest
});

if(isLoading)
  return (
    <div>
      <p className="text-center text-3xl ">Cargando...</p>
    </div>
  )

if(data)
  return (

            <div className="">

                {data.map((item, index) => (        
                    <Link to={`/${item.id}`} >
                      <section key={index} className="flex justify-center dark:text-white text-xl ">
                        <table className="border  border-white w-8/12 ">
                          <thead>
                            <tr className="">
                              <th>Autor</th>
                                <th>Fecha</th>
                                  <th>Asunto</th>
                                    <th>Colaboradores</th>
                                    <th>Opciones</th>
                            </tr>
                          </thead>
                          <tbody className="">

                            <td>a</td>
                             <td>a</td>
                              <td>a</td>
                               <td>a</td>
                                <td>a</td>
                          </tbody>
                        </table>
                      </section>
                        </Link>
                   
              )  )}
        </div>
  )
}

export default PostContent