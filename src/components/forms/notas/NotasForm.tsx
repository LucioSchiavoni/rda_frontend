import { useAuthStore } from "../../../context/auth/store"
import { useRef } from "react"


const NotasForm = () => {


  const imageRef = useRef<HTMLInputElement>(null)
  const createNotas = useAuthStore((state) => state.createNotas)

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const motivo = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const nro_pedido = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const estado = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const destino = (e.currentTarget.elements[3] as HTMLInputElement).value;
    const observaciones = (e.currentTarget.elements[4] as HTMLInputElement).value;
    const rutaBg = imageRef.current?.files?.[0];
    
    try {
      const response = await createNotas({motivo, nro_pedido, estado, destino, observaciones, ruta: rutaBg || null}) as any;
      console.log(response)
    } catch (error) {
        console.log("Error para registrar la nota: ", error)
    }

  }


  return (
    <div>
            <form className="p-4 border shadow-xl rounded-md " onSubmit={handleSubmit}>
        <h2 className="text-center text-4xl mb-10 font-thin ">Registrar Notas</h2>
        <div className="flex justify-around">


        <div className="flex flex-col ">
           <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Motivo</p>
          <input placeholder="" type="text" name="motivo" id="motivo" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>

        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Numero de pedido</p>
          <input name="nro_pedido" id="nro_pedido" placeholder="Nro. pedido" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Estado</p>
           <select id="estado" name="estado" className=" text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8  rounded focus:outline-none focus:border-blue-600">
                                    <option value="EN_PROCESO">En proceso</option>
                                    <option value="EN_CURSO">En curso</option>
                                    <option value="FINALIZADO">Finalizado</option>
                                </select>
        </div>
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Destino</p>
          <input placeholder="" type="text" name="seguimiento[destino]" id="seguimiento[destino]" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
        </div>
    

    <div className="">
    <div className="">
    <label htmlFor="Observacion" className="block  text-gray-600 pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium dark:text-gray-300">Observacion</label>

    <textarea placeholder="Observacion..." id="observaciones" name="observaciones" className="block focus:outline-none focus:border-blue-600 mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700  dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 "></textarea>
    
    <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">Agrega una observacion a la nota (no obligatorio)</p>
</div>

<div className="mt-8">
    <label htmlFor="file" className="block font-medium px-3 text-gray-600  mb-4">Subir archivo</label>
  

        <input  type="file" id="seguimiento[archivo][ruta]" name="seguimiento[archivo][ruta]" ref={imageRef} />

</div>
    </div>

    </div>
<button type="submit" className="mt-8 border px-3 py-2 rounded-md  w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xl justify-center ">Registrar</button>
    </form> 
    </div>
  )
}

export default NotasForm