import { create } from "zustand";


export type NavbarStoreProps = {
   isVisible:boolean;
   toggleIsVisible:()=>void;
}

const useNavbarStore = create<NavbarStoreProps>((set)=>({
   isVisible:true,
   toggleIsVisible:()=>set((state)=>({isVisible:!state.isVisible}))

}))

export default useNavbarStore;