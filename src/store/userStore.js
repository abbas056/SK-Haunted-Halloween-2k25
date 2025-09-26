import { create } from "zustand";
import { user } from "../URL";

const useUserStore = create((set) => ({
  user: {
    uid: 0,
    token: undefined,
  },
  setUser: (userData) => set({ user: userData }),
  resetUser: () => set({ user: user }),
}));

export default useUserStore;
