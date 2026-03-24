import React from "react";
import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Add Task", isCompleted: false },
  ]);

 


  return (
    <div>
     
     <Create todos={todos} setTodos={setTodos}/>

      <hr />

      <Read todos={todos} setTodos={setTodos}/>

      

    </div>
  );
};

export default App;
