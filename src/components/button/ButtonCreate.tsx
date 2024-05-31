import SubirArchivo from "../Modal/ArchivoModal"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HiPlus } from "react-icons/hi";

import CreateFolder from "../Modal/CreateFolder";


const ButtonCreate = (id: any) => {

    
  return (
<Menu>
  <MenuButton className="dark:border-neutral-700 shadow-xl"
    px={4}
    py={1.5}
    transition='all 0.2s'
    borderRadius='xl'
    borderWidth='1px'
    _hover={{ bg: 'neutral.800' }}
  >
    <span className="flex items-center gap-2  text-xl ">
    Crear <p ><HiPlus />
</p>      </span> 
  </MenuButton>
  <MenuList className="dark:text-white dark:border-neutral-700  dark:bg-neutral-900">
    <MenuItem className="dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center gap-2 "><SubirArchivo id={id}/> </MenuItem>
    <MenuItem className="dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center gap-2  justify-center "> <CreateFolder/> </MenuItem>
   
  </MenuList>
</Menu>
  )
}

export default ButtonCreate