import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    {
      task: "sample-task",
      id: uuidv4(),
      done: false,
    },
  ]);

  let [newTodo, setNewTodo] = useState("");

  // Add New Task
  let addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          task: newTodo,
          id: uuidv4(),
          done: false,
        },
      ];
    });

    setNewTodo("");
  };

  // Update Input Value
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // Delete Task
  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  // Uppercase All Tasks
  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  // Uppercase One Task
  let upperCaseOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  // Mark Task Done
  let taskDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      })
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

      <h3>Task Todo</h3>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.task}
            </span>

            &nbsp;&nbsp;

            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => taskDone(todo.id)}
            />

            &nbsp;&nbsp;

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>

            &nbsp;&nbsp;

            <button onClick={() => upperCaseOne(todo.id)}>
              UpperCase One
            </button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>
        UpperCase All
      </button>
    </div>
  );
}