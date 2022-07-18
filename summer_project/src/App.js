import React from "react";
import Product from "./Product";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1> Hello World</h1>
      <h2 className={styles.error}> An Error has occured </h2>
      <Product
        name="Google Home"
        description="Your Ai Assistant"
        price={59.99}
      />
      <Product
        name="Alexa"
        description="The assistant that always listends"
        price={159.99}
      />
      <Product
        name="Siri"
        description="The all knowing apple assistant"
        price={19.99}
      />
    </div>
  );
}

export default App;
