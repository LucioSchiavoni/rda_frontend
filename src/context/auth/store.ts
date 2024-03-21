import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { createUser } from "../../interface/user";



type State = {
    token: string;
    profile: any;
    isAuth: boolean
    
}

type Actions = {
    setToken: (token: string) => void
    setProfile: (profile: any) => void
    logout: () => void
    // register: (user: createUser) => void

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
        logout: () => set(() => ({
            token: '',
            isAuth: false,
            profile: null
        }))

    }) , {
        name: 'auth',
        
    }
))