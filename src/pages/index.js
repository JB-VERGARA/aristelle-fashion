// src/pages/index.js (or wherever you're displaying the products)
import { useEffect, useState } from 'react';
import { getProducts } from '../lib/contentful';
import ProductDescription from '../components/ProductDescription';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => (
        <div key={product.sys.id}>
          <h2>{product.fields.productName}</h2>
          <ProductDescription description={product.fields.productDescription} />
        </div>
      ))}
    </div>
  );
};

export default Home;
