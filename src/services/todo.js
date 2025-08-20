import API from "./axios";

export const getTodos = async () => {
  const res = await API.get("/todos");
  return res.data;
};

export const createTodo = async (data) => {
  const res = await API.post("/todos/create", data);
  return res.data;
};

export const updateTodo = async (id, data) => {
  const res = await API.put(`/todos/update/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await API.delete(`/todos/delete/${id}`);
  return res.data;
};
