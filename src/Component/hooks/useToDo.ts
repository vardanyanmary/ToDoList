import { useEffect, useState } from "react";
import toDoService from "../../api/Services/ToDoService/ToDoService";
import { ToDo } from "../../api/Services/ToDoService/typesToDo";

export function useToDo() {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [toDoValue, setToDoValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoValue(e.target.value);
  };

  const createNewToDo = async (title: string) => {
    try {
      const res = await toDoService.createToDo(title);
      if (res) {
        setToDos((prev) => [...prev, res]);
        setToDoValue("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    todos,
    toDoValue,
    createNewToDo,
    handleValueChange,
  };
}