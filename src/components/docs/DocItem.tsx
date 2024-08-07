import "@blocknote/core/fonts/inter.css";
import { BlockNoteView
 } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";


const DocItem = () => {
  // Nueva instancia para el editor
  const editor = useCreateBlockNote();

  return  (
       <BlockNoteView editor={editor} theme={"light"}/>
 
  )

}

export default DocItem;