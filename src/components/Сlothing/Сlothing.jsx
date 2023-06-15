import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Box, Button, Card } from './Clothing.styled';

export const Clothing = ({ setProduct }) => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const addToCart = (product) => {
    setProduct((prevItems) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setDisplayedProducts(data.slice(0, visibleCount));
    });
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <>
      <Card>
        {displayedProducts.map((product) => (
          <Box key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt="product" width="200" />
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Box>
        ))}
        {visibleCount < products.length && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </Card>
    </>
  );
};

