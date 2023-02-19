
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    user : null,
    setUser : (value) => set({user:value}),
}));
