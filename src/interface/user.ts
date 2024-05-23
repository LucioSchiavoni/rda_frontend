export interface createUser {
    username: string;
    password: string;
    rol: RolUser;
    estado: Estado;
}


export type RolUser = 'ADMIN' | 'USER';
export type Estado = 'PUBLICO' | 'PRIVADO';