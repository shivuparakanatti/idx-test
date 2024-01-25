import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef()

  useEffect(()=>{

    inputRef.current.focus()
  })
  const handleChange = (e) => {
  };

  return (
    <div className="container">
     <input type='text' onChange={handleChange} placeholder="ref"/>
     <input type='text' onChange={handleChange} ref={inputRef}  />
    </div>
  );
}

export default App;
