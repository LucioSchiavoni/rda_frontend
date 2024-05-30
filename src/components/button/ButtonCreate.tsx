import SubirArchivo from "../Modal/ArchivoModal"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HiPlus } from "react-icons/hi";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { HiOutlineDocumentPlus } from "react-icons/hi2";

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
    <MenuItem className="dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center gap-2 "><SubirArchivo id={id}/> <span className="text-2xl font-thin "><HiOutlineDocumentPlus/></span> </MenuItem>
    <MenuItem className="dark:bg-neutral-900 dark:hover:bg-neutral-800 flex items-center gap-2  "> <p className="px-2">Nueva carpeta</p> <span className="font-thin text-2xl">
      <HiOutlineFolderPlus/></span></MenuItem>
   
  </MenuList>
</Menu>
  )
}

export default ButtonCreate