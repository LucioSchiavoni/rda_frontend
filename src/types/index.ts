import {z} from 'zod'



export const notaSchema = z.object({
    motivo: z.string(),
    nro_pedido: z.string(),
    estado: z.string(),
    observaciones: z.string(),
    seguimiento: z.object({
        destino: z.string(),
        archivo: z.object({
            ruta: z.string(),
        }),
    }),
});

export type Nota = z.infer<typeof notaSchema>
export type NotaFormData = Pick<Nota, 'motivo' | 'nro_pedido'| 'estado' | 'observaciones' | "seguimiento" >

