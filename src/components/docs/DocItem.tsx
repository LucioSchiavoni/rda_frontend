import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";

interface DocItemProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

const DocItem = ({ onChange, initialContent = "[]" }: DocItemProps) => {
  // Ensure initialContent is a valid JSON string
  let initialBlocks: Block[] = [];
  try {
    initialBlocks = JSON.parse(initialContent) as Block[];
  } catch (e) {
    console.error("Failed to parse initialContent:", e);
  }

  const [blocks, setBlocks] = useState<Block[]>(initialBlocks.length ? initialBlocks : [{ type: "paragraph", content: "" }]);

  const editor = useCreateBlockNote({
    initialContent: blocks.length ? blocks : [{ type: "paragraph", content: "" }]
  });

  useEffect(() => {
    onChange(JSON.stringify(blocks));
  }, [blocks, onChange]);

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        setBlocks(editor.document);
      }}
      theme="light"
    />
  );
}

export default DocItem;
