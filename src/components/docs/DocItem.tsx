import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote} from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import { generateDocx } from "../utils/generateDocx";
import { SiMicrosoftword } from "react-icons/si";


interface DocItemProps {
  onChange: (value: string) => void;
  initialContent?: string | null;
}

const DocItem = ({ onChange, initialContent = "[]" }: DocItemProps) => {
  // Initialcontent es un JSON valido y no es null
  let initialBlocks: Block[] = [];

  
  try {
    initialBlocks = initialContent  ? (JSON.parse(initialContent) as Block[]) : []
  } catch (e) {
    console.error("Failed to parse initialContent:", e);
    initialBlocks = []; // devolver un array vacio
  }

  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);

  const editor = useCreateBlockNote({
    initialContent: blocks.length > 0 ? blocks : [{type: "heading", content:"Hola mundo"}]
 });

  useEffect(() => {
    onChange(JSON.stringify(blocks));
  }, [blocks, onChange]);
  
  return (
  <>
  <button className="px-3 font-semibold rounded-md bg-white text-black border absolute top-12 left-72 hover:bg-gray-100 h-7 flex gap-2 items-center" onClick={() => generateDocx(blocks)}>GenerarDocx <span><SiMicrosoftword /></span></button>
    <BlockNoteView
    className="border w-9/12 p-4 mb-40 m-auto rounded-md"
      editor={editor}
      onChange={() => {
        setBlocks(editor.document);
      }}
      theme="light"
    />
      
     </>
  );
};

export default DocItem;

