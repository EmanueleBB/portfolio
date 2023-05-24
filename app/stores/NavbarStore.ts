import { create } from "zustand";


export type NavbarStoreProps = {
   isVisible:boolean;
   toggleIsVisible:()=>void;
   isCompact:boolean|undefined;
   setIsCompact:(value:boolean)=>void;
}

const useNavbarStore = create<NavbarStoreProps>((set)=>({
   isVisible:true,
   toggleIsVisible:()=>set((state)=>({isVisible:!state.isVisible})),
   isCompact:undefined,
   setIsCompact:(value)=>set(()=>({isCompact:value}))
}))

export default useNavbarStore;