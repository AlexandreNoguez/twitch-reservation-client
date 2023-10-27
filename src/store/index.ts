'use client'

import { ILoginProps } from "@/lib/types";
import { Api } from "@/services/axios-config";
import { create } from "zustand";

interface IStoreProps {
    authUser: string | null;
    globalLoading: boolean;
    login: (loginDTO: ILoginProps) => Promise<string>;
    setGlobalLoading: (isLoading: boolean) => void;
    logout: () => void;
}

const useStore = create<IStoreProps>((set) => ({

    authUser: null,
    globalLoading: false,
    // setAuthUser: (user) => set((state) => ({
    //     ...state,
    //     authUser: user
    // })),
    login: async (loginDTO: ILoginProps) => {
        try {
            const { data } = await Api.post("/login", loginDTO);
            // let teste = Api.defaults.headers.Authorization = `Bearer ${data}`

            // console.log("teste", teste);
            // const user = data
            return data
        } catch (error) {
            console.error(error);
            alert("Usuário ou senha inválidos")
        }
    },
    setGlobalLoading: (isLoading) => set((state) => ({
        ...state,
        globalLoading: isLoading
    })),
    logout: () => set({ authUser: null, globalLoading: false })

}))

export default useStore;