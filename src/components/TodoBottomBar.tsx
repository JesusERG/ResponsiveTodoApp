import { useState } from "react";
import "../css/TodoBottomBar.css";

export interface TodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TodoBottomBar = ({
  todos,
  addTask,
}: {
  todos: TodoItem[];
  addTask: (prev: TodoItem) => void;
}) => {
  const [userInput, setUserInput] = useState("");

  console.log("todos: ", todos);
  const handleAddTask = () => {
    if (userInput.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      title: userInput,
      isCompleted: false,
    };
    // @ts-ignore
    addTask((prev) => [...prev, newTodo]);
    setUserInput("");
    console.log(todos);
  };

  return (
    <div className="main-container-bottom">
      <input
        value={userInput}
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="btn-bottom" onClick={() => handleAddTask()}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoBottomBar;
