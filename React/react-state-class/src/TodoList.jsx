import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
let deleteTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.filter((todo) => todo.id !== id)
  );
};
  
  return (
    <div className="container">
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />

      <button onClick={addNewTask}>Add Task</button>

      <h4>Task Todo</h4>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
