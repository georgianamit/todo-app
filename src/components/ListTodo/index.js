import React from "react";
import TodoItem from "../TodoItem";

function ListTodo(props) {
  return (
    <div>
      {props.todoList.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          doneTodo={props.doneTodo}
          removeTodo={props.removeTodo}
        />
      ))}
    </div>
  );
}

export default ListTodo;
