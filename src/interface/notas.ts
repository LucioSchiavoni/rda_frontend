export interface createNotas {
    motivo:string;
    nro_pedido: string;
    estado: string;
    observaciones: string;
    destino: string;
    ruta: File | null;
}