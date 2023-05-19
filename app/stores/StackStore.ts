import { create } from "zustand";

export type StackStoreProps={
   stackIsOnScreen:boolean;
   setStackIsOnScreen:()=>void;
}

const useStackStore = create<StackStoreProps>((set)=>({
   stackIsOnScreen:false,
   setStackIsOnScreen:()=>set((state)=>({stackIsOnScreen:!state.stackIsOnScreen}))
}))

export default useStackStore;