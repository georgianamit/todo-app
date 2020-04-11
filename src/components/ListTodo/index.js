import React from "react";
import TodoItem from "../TodoItem";
import "./style.css";

function ListTodo(props) {
  const uncheckedTodos = props.todoList.filter(todo => !todo.done);
  const checkedTodos = props.todoList.filter(todo => todo.done);
  console.log(uncheckedTodos, checkedTodos);
  return (
    <div className="list-todos">
      <div className="list-unchecked-todos">
        {uncheckedTodos.length ? (
          uncheckedTodos.map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleTodo={props.doneTodo}
              removeTodo={props.removeTodo}
            />
          ))
        ) : (
          <h2>You don't have any thing to do.</h2>
        )}
      </div>
      <div className="list-checked-todos">
        {checkedTodos.length ? (
          checkedTodos.map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleTodo={props.undoneTodo}
              removeTodo={props.removeTodo}
            />
          ))
        ) : (
          <h2>You haven't done any thing yet.</h2>
        )}
      </div>
    </div>
  );
}

export default ListTodo;
