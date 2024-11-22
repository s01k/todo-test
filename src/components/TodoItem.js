import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
