import React, { useState } from "react";
import "./style.css";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addtodo"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add Todo...."
        />
      </form>
    </div>
  );
}

export default AddTodo;
