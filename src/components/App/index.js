import React, { useState } from "react";
import "./style.css";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Content from "../Content";

function App() {
  const todoList = [
    {
      id: 1,
      item: "go to market",
      done: false
    },
    {
      id: 2,
      item: "do the dishes",
      done: false
    }
  ];
  const [todos, setTodo] = useState(todoList);

  function addTodo(value) {
    setTodo(prevState => [
      ...prevState,
      {
        id: prevState.length + 1,
        item: value,
        done: false
      }
    ]);
  }

  function removeTodo(id) {
    setTodo(prevState => prevState.filter(todo => todo.id !== id));
  }
  function doneTodo(id) {
    setTodo(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      })
    );
  }
  return (
    <div className="wrapper">
      <Header />
      <Content
        todoList={todos}
        addTodo={addTodo}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
