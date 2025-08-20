import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodoStore } from "@/stores/todoStore";
import { toast } from "sonner";
import TodoModal from "./TodoModal";

const TodoItem = ({ todo }) => {
  const { removeTodo, toggleComplete } = useTodoStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      className={`transition hover:shadow-md ${
        todo.completed ? "bg-green-100 border-green-200" : ""
      }`}
    >
      <CardHeader
        onClick={() => navigate(`/todos/${todo._id}`)}
        className="cursor-pointer"
      >
        <CardTitle
          className={`text-lg font-semibold truncate ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.title}
        </CardTitle>
        {todo.description && (
          <CardDescription className="text-sm line-clamp-2">
            {todo.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <p className="text-xs text-muted-foreground">
          {todo.createdAt ? new Date(todo.createdAt).toLocaleDateString() : ""}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        {/* Tombol Complete */}
        <Button
          variant={todo.completed ? "secondary" : "outline"}
          size="sm"
          onClick={() => {
            toggleComplete(todo._id, todo.completed);
            todo.completed
              ? toast.success("Todo Uncompleted!")
              : toast.success("Todo Completed!");
          }}
          className="w-full bg-green-50"
        >
          <CheckCircle className="mr-1 h-4 w-4" />
          {todo.completed ? "Undo" : "Complete"}
        </Button>

        <div className="flex w-full flex-col gap-2 md:flex-row">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
            className="w-full md:flex-1 bg-amber-50"
          >
            <SquarePen className="mr-1 h-4 w-4" /> Edit
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              removeTodo(todo._id);
              toast.success("Todo Deleted!");
            }}
            className="w-full md:flex-1"
          >
            <Trash className="mr-1 h-4 w-4" /> Delete
          </Button>
        </div>
      </CardFooter>

      <TodoModal open={open} setOpen={setOpen} todo={todo} />
    </Card>
  );
};

export default TodoItem;
