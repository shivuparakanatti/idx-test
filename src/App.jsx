import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
 const[count,setCount] = useState(0) 

 

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
