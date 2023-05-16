import { Box, Button, Card } from '../Сlothing/Clothing.styled';

export const CardProducts = ({ products, setProducts }) => {
  const deleteCard = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <>
      <Card>
        {products.map((product) => (
          <Box key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt="product" width="200" />
            <Button onClick={() => deleteCard(product.id)}>Delete Card</Button>
          </Box>
        ))}
      </Card>
    </>
  );
};
