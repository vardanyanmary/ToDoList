import { FC, useState } from "react";
import { ToDo } from "../../../api/Services/ToDoService/typesToDo";
import cls from "./ToDoItem.module.scss";


interface ChildComponentProps {
  onChangeItem: React.Dispatch<React.SetStateAction<ToDo[]>>;
  todoItem: ToDo;
  todosArray: ToDo[];
}

const ToDoItem: FC<ChildComponentProps> = ({
  todoItem,
  onChangeItem,
  todosArray,
}) => {

  const { id, title, completed } = todoItem;
  const [ isInEditMode, setIsInEditMode ] = useState(false);

  //  Delete todo
  const deleteToDoItem = (id: number) => {
    const newToDos = todosArray.filter((todoItem) => todoItem.id !== id);
    onChangeItem(newToDos);
  };

  //  Completed todo
  const completeTask = (completedState: boolean) => {
    const newToDos = todosArray.filter((todoItem) => {
      return todoItem.completed !== completedState;
    });
    onChangeItem((prev) => {
      return prev.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  return (
    <li className={cls.ToDoItem}>
      {isInEditMode ? (
        <>
          <input
            type="text"
            placeholder="Edit to do"
            className={cls.ToDoItemInput}
          />
          <button
          // onclick = {onTodoUpdate}
          >
            Save
          </button>
        </>
      ) : (
        <p> {title} </p>
      )}
      <span>
        <button onClick={() => setIsInEditMode(true)}> Edit </button>
        <button onClick={() => completeTask(!completed)}> Completed </button>
        <button onClick={() => deleteToDoItem(id)}> Delete </button>
      </span>
    </li>
  );
};

export default ToDoItem;
