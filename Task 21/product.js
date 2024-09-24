import React, { useState } from 'react';

const Product = () => {
  const [product, setProduct] = useState({
    name: 'Example Product',
    price: 19.99
  });

  const updateProduct = (newName, newPrice) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      name: newName,
      price: newPrice
    }));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => updateProduct('New Product', 29.99)}>Update Product</button>
    </div>
  );
};

export default Product;