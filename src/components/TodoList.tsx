import "../css/TodoList.css";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <div className="todo-item-container" key={todo.id}>
          <div className="todo-item">
            <input
              className="todo-checkbox"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => {
                setTodoList((prev) =>
                  prev.map((prevTodo) =>
                    prevTodo.id === todo.id
                      ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
                      : prevTodo
                  )
                );
              }}
            />
            <h3>{todo.title}</h3>
          </div>
          <div className="todo-button">
            <button
              className="btn"
              onClick={() => {
                setTodoList((prev) =>
                  prev.filter((prevTodo) => prevTodo.id !== todo.id)
                );
              }}
            >
              Delete
            </button>
            <button
              className="btn"
              onClick={() => {
                setTodoList((prev) =>
                  prev.map((prevTodo) =>
                    prevTodo.id === todo.id
                      ? { ...prevTodo, title: prompt("Enter new title") }
                      : prevTodo
                  )
                );
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
