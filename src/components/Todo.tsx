// toDo: create a function with userReducer

import TodoForm from "./TodoForm.tsx";
import {useEffect, useReducer} from "react";
import TodoList from "./TodoList.tsx";
import type  {TodoProps, Action} from "../types.ts";

const getInitialTodos = () => {
  const stored = localStorage.getItem("todos")
  return stored ? JSON.parse(stored) : [];
}

const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
  switch (action.type) {
    case "ADD":
      { const newTodo: TodoProps = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      return [...state, newTodo]; }
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    case "EDIT":
      return state.map(
        todo => todo.id === action.payload.id ? {...todo, text: action.payload.newText} : todo
      )
    case "COMPLETE":
      return state.map(
        todo => todo.id === action.payload ?
          {...todo, completed: !todo.completed } : todo
      )
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
}

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, getInitialTodos());  // εδώ βάζουμε optionally μια function που κανει κάτι που θέλουμε εμείς

  const handleClearAll = () => {
    dispatch({type: "CLEAR_ALL"});
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <div className={"max-w-sm mx-auto p-6"}>
        <h1 className={"text-center text-xl font-semibold"}>To-Do List</h1>
        <TodoForm dispatch={dispatch} />
        <TodoList todos ={todos} dispatch={dispatch}/>

        { todos.length > 0 ? (
          <>
            <div className="text-end mt-4">
              <button
                className={"py-2 px-4 bg-cf-dark-red text-white rounded mt-1"}
                onClick={handleClearAll}>
                Clear All
              </button>
            </div>
          </> ) : null }
          </div>

    </>
  )
}

export default Todo