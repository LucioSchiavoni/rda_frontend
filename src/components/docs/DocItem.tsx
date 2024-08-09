import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";

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
    initialContent: blocks
  });

  useEffect(() => {
    onChange(JSON.stringify(blocks));
  }, [blocks, onChange]);


  return (<>
    <BlockNoteView
    className="border w-9/12  mb-40 m-auto rounded-md"
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

