import React from "react";
import "./style.css";
import { FaRedo, FaCheck, FaTimes } from "react-icons/fa";
function TodoItem(props) {
  return (
    <div className="todo-item">
      <span>{props.todo.item} </span>
      <div className="btn-group">
        <button
          className="check-btn"
          onClick={(e) => {
            props.toggleTodo(props.todo.id);
          }}
        >
          {!props.todo.done ? <FaCheck /> : <FaRedo />}
        </button>
        <button
          className="delete-btn"
          onClick={(e) => {
            props.removeTodo(props.todo.id);
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
