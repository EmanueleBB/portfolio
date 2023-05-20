import { create } from "zustand";

export type StackStoreProps={
   stackIsOnScreen:boolean;
   toggleStackIsOnScreen:()=>void;
}

const useStackStore = create<StackStoreProps>((set)=>({
   stackIsOnScreen:false,
   toggleStackIsOnScreen:()=>set((state)=>({stackIsOnScreen:!state.stackIsOnScreen}))
}))

export default useStackStore;