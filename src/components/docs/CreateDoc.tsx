import { createDocRequest } from '../../api/doc';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useAuthStore } from '../../context/auth/store';
import Layout from '../../Layout';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { Block } from '@blocknote/core';
import { generateDocx } from '../utils/generateDocx';
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CreateDoc = () => {

    const navigate = useNavigate()
    const [blocks, setBlocks] = useState<Block[]>([]);
    const user = useAuthStore((state) => state.profile);
    const userId = user.id;
    const [title, setTitle] = useState("Sin titulo");
    const saveNewDoc = async () => {
        const dataJson = {
            authorId: userId,
            title: title,
            description: JSON.stringify(blocks) 
        };
            
        try {
            const res = await createDocRequest(dataJson);
            navigate("/doc")
            toast.success(res.success);

        } catch (error) {
            console.log(error);
        }
    
    };

    const editor = useCreateBlockNote({
        initialContent: blocks.length > 0 ? blocks : [{type: "heading", content:"Hola mundo"}]
    });

    return (
        <>
            <Layout>
                <div className='flex flex-col dark:bg-white min-h-screen'>
                    <div className='flex justify-start items-center gap-4 ml-36 p-8'>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}  placeholder="Titulo" className='px-3 py-1 rounded-md hover:border w-64' />
                        <span className='text-center items-center text-xl font-semibold'><MdEdit /></span>
                        <div className='flex justify-center items-center gap-5'>
                                  <button onClick={() => saveNewDoc()} className='px-3 py-1 text-xl border font-medium bg-white rounded-md  w-40'>Guardar</button>
                        <button className='px-3 py-2 rounded-md border text-xl font-medium' onClick={ () => generateDocx(blocks)}>Descargar en Word</button>
                        </div>
                  
                    </div>
                    <div className='mt-24'>
                    <BlockNoteView 
                    className='border w-9/12 p-4 mb-40 m-auto rounded-md '
                        editor={editor}
                        onChange={() => {
                            setBlocks(editor.document);
                        }}
                        theme="light"
                    />
                </div>  
                  </div>
            </Layout>   
        </>
    );
};

export default CreateDoc;
