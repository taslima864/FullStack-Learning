import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
   setNewTodo(event.target.value);
  };

  return (
    <div className="container">
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <hr />
      <br />

      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
