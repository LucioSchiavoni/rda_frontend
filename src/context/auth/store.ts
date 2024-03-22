import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createUser } from "../../interface/user";
import { registerRequest } from "../../api/auth";
import { createNotas } from "../../interface/notas";
import { createNotasRequest } from "../../api/notas";




type State = {
    token: string;
    profile: any;
    isAuth: boolean
    
}

type Actions = {
    setToken: (token: string) => void
    setProfile: (profile: any) => void
    logout: () => void
    createUser: (user: createUser) => void
    createNotas: (nota: createNotas) => void
}

export const useAuthStore = create(persist<State & Actions>(
    (set) => ({
        token: "",
        profile: null,
        isAuth: false,

        setToken: (token: string) => set(() => ({
            token,
            isAuth: true
        })),

        setProfile: (profile: any) => set(() => ({
            profile
        })),
        createUser: async(user: createUser) => {
               try {
                    const res = await registerRequest(user)
                    return res
               } catch (error) {
                console.log("Error en el state al crear el user: ", error)
               } 
        },
        createNotas: async(nota: createNotas) => {
            try {
                const res = await createNotasRequest(nota)
                return res
            } catch (error) {
                console.log("Error al crear el statae de notas: ", error)
            }
        },
        logout: () => set(() => ({
            token: '',
            isAuth: false,
            profile: null
        }))

    }) , {
        name: 'auth',
        
    }
))