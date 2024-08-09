import { createDocRequest } from '../../api/doc';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuthStore } from '../../context/auth/store';
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
        const dataJson = {
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
                        <input type="text" onChange={(e) => setTitle(e.target.value)}  placeholder="Titulo" className='px-3 py-1 rounded-md border absolute top-1 left-24' />
                        <button onClick={() => saveNewDoc()} className='px-3 py-1 text-xl border rounded-md absolute top-10 left-64 w-40'>Crear</button>
                    </div>
                    <BlockNoteView 
                    className='border w-9/12 m-auto rounded-md mt-10 '
                        editor={editor}
                        onChange={() => {
                            setBlocks(editor.document);
                        }}
                        theme="light"
                    />
                </div>
            </Layout>   
        </>
    );
};

export default CreateDoc;
