import React from "react";
import TodoItem from "@/components/layouts/dashboard/TodoItem";

const TodoList = ({ todos }) => {
  if (!todos.length)
    return <p className="text-center text-gray-500">No todos yet.</p>;

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
