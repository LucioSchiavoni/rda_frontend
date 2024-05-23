export interface createNotas {
    titulo:string;
    observaciones: string;
    ruta: File | null;
}

export type Nota = {
    nro_referencia: number;
    titulo: string;
    observaciones: string;
    carpetas: Carpeta[]
};

export type Carpeta = {
    id: number;
    nombre: string;
    archivos: Archivo[];
    seguimientoId?: number;
}

export type Seguimiento = {
    id: number;
    fecha: string;  
    carpetas: Carpeta[];
    notaId: number;
   
};

export type Archivo = {
    id: number;
    ruta: string;
    nombre: string;
    carpetaId: number;
};


export type EditData = {
    [key: string]: any;
    titulo?:string;
    observaciones?: string;
}