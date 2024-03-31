import { useState } from "react"



const Search = () => {

    const [, setSearch] = useState("")

    const handleSearch = async(nro_pedido: string) => {
        setSearch(nro_pedido)
    }


  return (
    <div>
      
        <input type="text" placeholder="Buscar.." onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default Search