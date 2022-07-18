import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1> Hello World</h1>
      <Product
        name="Amazon Echo"
        description="Your Ai Assistant"
        price={59.99}
      />
    </div>
  );
}

export default App;
