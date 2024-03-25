export interface createNotas {
    motivo:string;
    nro_pedido: string;
    estado: string;
    observaciones: string;
    destino: string;
    ruta: File | null;
}

export type Nota = {
    nro_referencia: number;
    motivo: string;
    nro_pedido: number;
    estado: string;
    observaciones: string;
    seguimiento: Seguimiento[];
};

export type Seguimiento = {
    id: number;
    destino: string;
    fecha: string;  
    archivoId: number;
    notaId: number;
    archivo: Archivo;
};

export type Archivo = {
    id: number;
    ruta: string;
    nombre: string;
};
