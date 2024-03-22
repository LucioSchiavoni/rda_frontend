

const UserForm = () => {
  return (
    <form className="p-4 border shadow-xl rounded-md">
        <h2 className="text-center text-3xl mb-10 font-semibold">Registrar usuario</h2>
 <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Nombre de usuario</p>
          <input placeholder="" type="text" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
        <div className="relative mb-10">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Contraseña</p>
          <input placeholder="****" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
        <div className="relative">
          <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
              absolute">Repetir contraseña</p>
          <input placeholder="****" type="password" className="border placeholder-gray-400 focus:outline-none
              focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
              border-gray-300 rounded-md"/>
        </div>
<button type="submit" className="mt-8 border px-3 py-2 rounded-md  w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xl justify-center ">Registrar</button>
    </form> 
  )
}

export default UserForm