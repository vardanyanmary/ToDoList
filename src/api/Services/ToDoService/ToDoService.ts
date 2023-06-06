import { api } from "../../api";
import { ToDo } from "./typesToDo";

type CreateToDoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

class ToDoService {
  async getAllToDos() {
    try {
      const response = await api.get<ToDo[]>("todos");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createToDo(title: string) {
    try {
      const newTodo = { title, completed: false };
      const res = await api.post<CreateToDoResponse>("todos", newTodo);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const toDoService = new ToDoService();
export default toDoService;
