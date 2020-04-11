import React, { useState, useEffect } from "react";
import "./style.css";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Content from "../Content";
import { Firebase_Config } from "../../config/config";
import firebase from "firebase/app";
import "firebase/database";

function App() {
  const todoList = [];
  const [todos, setTodo] = useState(todoList);

  const [app, setApp] = useState(() => firebase.initializeApp(Firebase_Config));
  const [database, setDatabase] = useState(() =>
    app.database().ref().child("todos")
  );

  useEffect(() => {
    database.on("child_added", (snap) => {
      setTodo((prevState) => {
        return [
          ...prevState,
          {
            id: snap.key,
            item: snap.val().item,
            done: snap.val().done,
          },
        ];
      });
    });
    database.on("child_removed", (snap) => {
      setTodo((prevState) => prevState.filter((todo) => todo.id !== snap.key));
    });

    database.on("child_changed", (snap) => {
      setTodo((prevState) =>
        prevState.map((todo) => {
          if (todo.id === snap.key) {
            todo.done = !todo.done;
          }
          return todo;
        })
      );
    });
  }, []);

  function addTodo(value) {
    database.push().set({ item: value, done: false });
  }

  function removeTodo(id) {
    database.child(id).remove();
  }

  function doneTodo(id) {
    database.child(id).update({ done: true });
  }

  function undoneTodo(id) {
    database.child(id).update({ done: false });
  }

  return (
    <div className="wrapper">
      <Header />
      <Content
        todoList={todos}
        addTodo={addTodo}
        doneTodo={doneTodo}
        undoneTodo={undoneTodo}
        removeTodo={removeTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
