export const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  };
  


