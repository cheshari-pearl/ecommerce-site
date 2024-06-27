import React, { useState, useEffect } from "react";
import { getProducts } from "./utils";
import "./index.css";

const Clothing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("This product was not found", error);
        setError("did not fetch");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading"> Loading...</div>;
  }
  if (error) {
    return <div className="error"> Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Product</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} id="products" />
            <h2>{product.title}</h2>
            {/* <p>{product.category}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Clothing;
