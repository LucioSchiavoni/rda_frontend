import { useQuery } from '@tanstack/react-query';

import { getAllDocRequest } from '../../api/doc';
import { useAuthStore } from '../../context/auth/store';

const DocList = () => {

    const user = useAuthStore((state) => state.profile)
    const userId = user.id

      const { data, isLoading } = useQuery<any, Error>({
    queryKey: ['docs', userId],
    queryFn: getAllDocRequest(userId ||  ""),
    enabled: !userId
});

if(isLoading){
    return <div>Cargando..</div>
}

if(data)
  return (
    <div>{data.map((item: any, index: number) => (
        <div key={index}>
           <p className='text-white text-center text-3xl'>El title: {item.title}</p> 
        </div>
    ))}</div>
  )
}

export default DocList