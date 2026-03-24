import React from "react";
import { useState } from "react";

const Create = (props) => {

    const { todos, setTodos } = props;

  const [title, settitle] = useState("");
  const [isChecked, setisChecked] = useState(true);
  const [gender, setgender] = useState("female");

 

 const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: isChecked,
    };
   
  //  copy the existing todos and add the new todo to the array

  let copyTodos = [...todos];
  copyTodos.push(newTodo);
  setTodos(copyTodos);
   
   
    // setTodos([...todos, newTodo]);
    settitle("");
    setisChecked(false);
  };
  


      const inputStyle = {
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        boxSizing: "border-box",
      };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          style={inputStyle}
          className=" bg-amber-400"
        />
        <br />
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setisChecked(e.target.checked)}
        />{" "}
        Completed
        {/* <input type="radio" name="radio" id="radio" value="male" checked={gender === "male"} onChange={(e)=>setgender(e.target.value)} /> Male */}
        {/* <input type="radio" name="radio" id="radio" value="female" checked={gender === "female"} onChange={(e)=>setgender(e.target.value)} /> Female

        <select name="gender" id="gender" value={gender} onChange={(e)=>setgender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "lightblue",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;
