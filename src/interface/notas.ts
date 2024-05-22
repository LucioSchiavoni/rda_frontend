export interface createNotas {
    titulo:string;
    observaciones: string;
    ruta: File | null;
}

export type Nota = {
    nro_referencia: number;
    titulo: string;
    observaciones: string;
    seguimiento: Seguimiento[];
};

export type Seguimiento = {
    id: number;
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


export type EditData = {
    [key: string]: any;
    titulo?:string;
    observaciones?: string;
}