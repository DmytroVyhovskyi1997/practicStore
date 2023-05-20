import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Box, Button, Card } from './Clothing.styled';

export const Clothing = ({ setProduct }) => {
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    setProduct((prevItems) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
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
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Box>
        ))}
      </Card>
    </>
  );
};

