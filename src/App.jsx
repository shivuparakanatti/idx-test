import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
 const[count,setCount] = useState(0) 
 const[isEven,setIsEven] = useState('no') 
  const handleChange = (e) => {
    if(count<100000000000){

      setCount(count+1)
    }
  };

  const handleMinus = ()=>{
    setCount(count-1)
  }

  const isEvenMemo = useMemo(()=>{
    if(count%2===0){
      setIsEven('yes')
    }
  })
 

  return (
    <div className="container">
      <h1>count : {count}</h1>
      <button onClick={handleChange}>+</button>
      isEven : {isEvenMemo}
      <button onClick={handleMinus}>-</button>

    </div>
  );
}

export default App;
