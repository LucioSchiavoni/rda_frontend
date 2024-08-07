import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
 


interface DocItemProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}

const DocItem: React.FC<DocItemProps> = ({
  onChange,
  initialContent,
  editable
}) => {

const editor: BlockNoteEditor = useCreateBlockNote({
  initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
})
  

  return (
    <BlockNoteView editor={editor}
     editable={editable}
      onChange={onChange}
       theme="light" 
       />
  );
}

export default DocItem;
