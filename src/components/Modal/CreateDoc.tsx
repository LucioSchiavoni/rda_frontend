import { createDocRequest } from '../../api/doc';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuthStore } from '../../context/auth/store';
import { Doc } from '../../interface/doc';
import Layout from '../../Layout';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { Block } from '@blocknote/core';

const CreateDoc = () => {

    const [blocks, setBlocks] = useState<Block[]>([]);
    const user = useAuthStore((state) => state.profile);
    const userId = user.id;
    const [title, setTitle] = useState("");

    const saveNewDoc = async () => {
        const dataJson: Doc = {
            authorId: userId,
            title: title,
            description: JSON.stringify(blocks)
        };
        try {
            const res = await createDocRequest(dataJson);
            toast.success(res.success);
        } catch (error) {
            console.log(error);
        }
    };

    const editor = useCreateBlockNote();

    return (
        <>
            <Layout>
                <div className='flex flex-col ml-24'>
                    <div className='flex flex-col gap-5 w-4/12'>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className='px-3 py-1 rounded-md border ' />
                        <button onClick={() => saveNewDoc()} className='px-3 py-1 text-xl border rounded-md'>Crear</button>
                    </div>
                    <BlockNoteView 
                        editor={editor}
                        onChange={() => {
                            setBlocks(editor.document);
                        }}
                    />
                </div>
            </Layout>   
        </>
    );
};

export default CreateDoc;
