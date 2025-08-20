import React, { useEffect, useState } from "react";
import { useTodoStore } from "../../../stores/todoStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { toast } from "sonner";

const TodoModal = ({ open, setOpen, todo }) => {
  const { addTodo, editTodo } = useTodoStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (open) {
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
      } else {
        setTitle("");
        setDescription("");
      }
    }
  }, [open, todo]);

  const handleSubmit = () => {
    if (todo) {
      editTodo(todo._id, { title, description });
      toast.success("Todo Updated!");
    } else {
      addTodo({ title, description });
      toast.success("Todo Added!");
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{todo ? "Edit Todo" : "Add Todo"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit}>
            {todo ? "Save Changes" : "Add Todo"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
