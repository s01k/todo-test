import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the data if the request is successful
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
};

const TodoPage = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
