import React, { useState } from "react";
//import styles from "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // prevents referesh
    //console.log(object)
    setTodos([...todos, input]); // adds user input
    setInput(""); // resets input field
  };
  return (
    <div className="app">
      <h1> Welcome to my TODO List</h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} // keeps track of user input
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add to Do
        </button>
      </form>
      <h2> List of Todos</h2>
      {todos.map((todo) => {
        return <p> {todo}</p>;
      })}
    </div>
  );
}

export default App;
