import React, { useState } from "react";
//import styles from "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    //console.log(object)
    setTodos([...todos, input]);
  };
  return (
    <div className="app">
      <h1> Welcome to my TODO List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={addTodo}> Add to Do </button>
      <h2> List of Todos</h2>
      {todos.map((todo) => {
        return <p> {todo}</p>;
      })}
    </div>
  );
}

export default App;
