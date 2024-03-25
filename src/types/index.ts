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



export const getNotaSchema = z.object({
    nro_referencia: z.string(),
    motivo: z.string(),
    nro_pedido: z.number(),
    estado: z.string(),
    observaciones: z.string(),
    seguimiento: z.array(
        z.object({
            id: z.number(),
            destino: z.string(),
            fecha: z.string(),
            archivoId: z.number(),
            notaId: z.number(),
            archivo: z.object({
                id: z.number(),
                ruta: z.string(),
                nombre: z.string(),
            }),
        })
    ),
});

export type Nota = z.infer<typeof notaSchema>;



export type GetNota = z.infer<typeof getNotaSchema>;
export type NotaFormData = Omit<Nota, 'id'>;

