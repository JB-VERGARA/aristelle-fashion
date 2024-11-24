import { getProducts } from '@/lib/contentful';
import ProductCard from '@/components/ProductCard';

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
}
