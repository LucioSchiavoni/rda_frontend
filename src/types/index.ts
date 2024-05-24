import {z} from 'zod'



export const notaSchema = z.object({
    titulo: z.string(),
    observaciones: z.string(),
    estado: z.string(),
    authorId: z.string(),
    seguimiento: z.object({
        carpetas: z.object({
             archivo: z.object({
            ruta: z.string(),
        }),
        })
       
    }),
}); 

export const getNotaSchema = z.object({
    nro_referencia: z.string(),
    titulo: z.string(),
    observaciones: z.string(),
    estado:z.string(),
    authorId: z.string(),
    seguimiento: z.array(
        z.object({
            id: z.number(),
            fecha: z.string(),
            archivoId: z.number(),
            notaId: z.number(),
            carpetas: z.object({

                archivo: z.object({
                id: z.number(),
                ruta: z.string(),
                nombre: z.string(),
            }),
            })
            
        })
    ),
});

export type Nota = z.infer<typeof notaSchema>;


export type GetNota = z.infer<typeof getNotaSchema>;
export type NotaFormData = Omit<Nota, 'id'>;


