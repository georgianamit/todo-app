import React from "react";
import AddTodo from "../AddTodo";
import ListTodo from "../ListTodo";
import "./style.css";
function Content(props) {
  return (
    <div className="content">
      <div className="todoarea">
        <AddTodo addTodo={props.addTodo} />
        <ListTodo
          todoList={props.todoList}
          doneTodo={props.doneTodo}
          removeTodo={props.removeTodo}
        />
      </div>
    </div>
  );
}

export default Content;
