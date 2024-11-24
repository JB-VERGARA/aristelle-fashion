import { getProducts, getHomepage } from '@/lib/contentful'; // Import both functions
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header'; // Assuming we have a Header component
import Image from 'next/image';

export async function getStaticProps() {
  const products = await getProducts(); // Fetch product data
  const homepageData = await getHomepage(); // Fetch homepage data

  // Destructure homepage fields
  const { businessName, businessDescription, logo } = homepageData;

  return {
    props: {
      products,
      businessName,
      businessDescription,
      logo,
    },
  };
}

export default function Home({ products, businessName, businessDescription, logo }) {
  return (
    <div>
      {/* Header with business details */}
      <Header businessName={businessName} logo={logo} />

      {/* Main content */}
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
}
