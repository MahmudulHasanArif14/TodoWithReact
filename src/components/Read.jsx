import React from 'react'
import { useState } from "react";
import "./Read.css";

// to use module css we have to import it like this
import anyName from "./Read.module.css";


// in module css className are used like this className={anyName.className} and in normal css we can use it like this className="className" 

const Read = (props) => {

  const { todos, setTodos } = props;


  const items=["a","b","c","d"];
  const randomFilter=items.filter(item=>item==="b");
  console.log(randomFilter);


    const handleDelete = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        
        setTodos(filteredTodos);
       
    }




  return (
    <div>


        <h2>Show Data</h2>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3 className='read'>{todo.title}</h3> <span onClick={() => handleDelete(todo.id)}>Delete</span>
          <p className={todo.isCompleted ? anyName.completed : anyName.notCompleted}>
            {todo.isCompleted ? "Completed" : "Not Completed"}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Read