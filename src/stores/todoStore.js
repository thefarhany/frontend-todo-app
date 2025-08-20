import { create } from "zustand";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../services/todo";

export const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  error: null,

  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getTodos();
      set({ todos: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addTodo: async (todo) => {
    set({ loading: true, error: null });
    try {
      const newTodo = await createTodo(todo);
      set((state) => ({ todos: [newTodo, ...state.todos], loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  editTodo: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const updatedTodo = await updateTodo(id, updatedData);
      set((state) => ({
        todos: state.todos.map((t) => (t._id === id ? updatedTodo : t)),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  toggleComplete: async (id, completed) => {
    const updated = await updateTodo(id, { completed: !completed });
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo._id === id ? { ...todo, completed: updated.completed } : todo
      ),
    }));
  },

  removeTodo: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteTodo(id);
      set((state) => ({
        todos: state.todos.filter((t) => t._id !== id),
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
