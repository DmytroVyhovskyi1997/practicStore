
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Box, Card } from './Clothing.styled';




export const Clothing = ({setProduct}) => {
  const [products, setProducts] = useState([]);
 

  const addToCart = (product) => {
    setProduct(prevState => [...prevState, product]);
  
  };
  
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
            <img src={product.image} alt="product" width="200" />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </Box>
        ))}
      </Card>
      
    </>
  );
};
