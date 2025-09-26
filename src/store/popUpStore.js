import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "English",
  setLanguage: (language) => set({ language }),
}));

const usePopUpStore = create((set) => ({
  popUp: { message: null },
  openPopUp: (message) => {
    set({ popUp: { message: message } });
  },
  closePopUp: () => {
    set({ popUp: { message: null } });
  },
}));

const useToastStore = create((set) => ({
  toast: { message: null },
  closeToast: () => {
    set({ toast: { message: null } });
  },
  openToast: (message) => {
    set({ toast: { message: message } });
    setTimeout(() => {
      set({ toast: { message: null } });
    }, 3000);
  },
}));

export { useLanguageStore, usePopUpStore, useToastStore };
