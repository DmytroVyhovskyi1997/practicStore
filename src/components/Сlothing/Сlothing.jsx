import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import { Box, Card } from "./Clothing.styled";

export const Clothing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
    <Card>
    {products.map((product) => (
        <Box key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt="product" width='200'/>
        </Box>
      ))}
    </Card>
     
    </>
  );
};