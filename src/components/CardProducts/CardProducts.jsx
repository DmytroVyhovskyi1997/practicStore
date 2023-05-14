export const CardProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2>Cart Items:</h2>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
    </div>
  );
};






