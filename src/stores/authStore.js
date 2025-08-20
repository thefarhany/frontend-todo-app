import { loginApi, logoutApi, registerApi } from "../services/auth";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const user = await loginApi(email, password);
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw error;
    }
  },

  register: async (username, email, password) => {
    try {
      const user = await registerApi(username, email, password);
      set({ user, isAuthenticated: true });
    } catch (err) {
      throw err;
    }
  },

  logout: async () => {
    await logoutApi();
    set({ user: null, isAuthenticated: false });
  },

  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));
