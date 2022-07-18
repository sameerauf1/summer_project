import React from "react";
import ItemDescription from "./ItemDescription";
import styles from "./Product.modules.css";

function Product({ name, description, price }) {
  return (
    <div className="product">
      <ItemDescription name={name} description={description} />
      <h2 className="product__error"> An error occured</h2>
      <h3 className="product__price"> ${price}</h3>
    </div>
  );
}
export default Product;
