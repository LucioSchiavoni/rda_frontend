export interface createUser {
    username: string;
    name: string;
    password: string;
    rol: RolUser;
    state: State;
}


export type RolUser = 'ADMIN' | 'USER';
export type State = 'PUBLICO' | 'PRIVADO';