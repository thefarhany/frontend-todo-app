import React, { useEffect, useState } from "react";
import { useTodoStore } from "../stores/todoStore";
import { Button } from "@/components/ui/Button";
import TodoList from "../components/layouts/dashboard/TodoList";
import TodoModal from "@/components/layouts/dashboard/TodoModal";
import { useAuthStore } from "../stores/authStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { LogOut, Plus } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const Dashboard = () => {
  const { todos, fetchTodos } = useTodoStore();
  const { logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleLogout = () => {
    logout();
    toast.success("Logout Berhasil");
    navigate("/");
  };

  usePageTitle("Dashboard");

  return (
    <div className="container mx-auto p-6 px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">My Todos</h1>

        <div className="flex gap-2 w-full md:w-auto">
          <Button onClick={() => setOpen(true)} size="sm" className="w-1/2">
            <Plus className="mr-1 h-4 w-4" /> Add Todo
          </Button>
          <Button
            variant="destructive"
            onClick={handleLogout}
            size="sm"
            className="w-1/2"
          >
            <LogOut className="mr-1 h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      <p className="text-gray-500">Welcome back,</p>

      <TodoList todos={todos} />

      <TodoModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Dashboard;
