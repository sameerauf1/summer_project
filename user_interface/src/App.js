import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [sectors, setSectors] = useState(["Capital Goods", "Basic Industries"]);

  return (
    <div className="dropDown">
      <h1> User Interface</h1>
    
          <select>
            <option >  Select Industries </option>
            {

            }
          
          </select>
        
    </div>
  );
}

export default App;
