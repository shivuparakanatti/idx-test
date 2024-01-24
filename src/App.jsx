import { useState } from "react";
import "./App.css";

function App() {
  const list = ["name", "age", "photo", "photos"];
  const [filteredData, setFilteredData] = useState(false);

  const handleChange = (e) => {
    const data = list.filter((ele) => {
      if (ele.toLowerCase().includes(e.target.value.trim().toLowerCase())) {
        return ele;
      }
    });

    setFilteredData(data);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      {filteredData &&
        filteredData.map((ele, i) => {
          return <div key={i}>{ele}</div>;
        })}
    </>
  );
}

export default App;
