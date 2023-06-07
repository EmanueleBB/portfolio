import { create } from "zustand";

export type StackStoreProps={
   stackIsOnScreen:boolean;
   paragraphIsAnimated:boolean;
   toggleStackIsOnScreen:()=>void;
   toggleParagraphIsAnimated:()=>void;
   
}

const useStackStore = create<StackStoreProps>((set)=>({
   stackIsOnScreen:false,
   paragraphIsAnimated:false,
   toggleStackIsOnScreen:()=>set((state)=>({stackIsOnScreen:!state.stackIsOnScreen})),
   toggleParagraphIsAnimated:()=>set((state)=>({paragraphIsAnimated:!state.paragraphIsAnimated}))
}))

export default useStackStore;