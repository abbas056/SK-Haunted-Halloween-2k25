import { create } from "zustand";

const useScrollStore = create((set) => ({
  scroll: undefined,
  setScroll: (scroll) => set({ scroll }),
  unSetScroll: () => set({ undefined }),
}));

export default useScrollStore;
