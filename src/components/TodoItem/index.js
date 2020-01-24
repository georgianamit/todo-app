import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.todo.id} - {props.todo.item}{" "}
      <button
        onClick={e => {
          props.doneTodo(props.todo.id);
        }}
      >
        Completed
      </button>
      <button
        onClick={e => {
          props.removeTodo(props.todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
