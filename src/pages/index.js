// src/pages/index.js

import Head from 'next/head';
import { getProducts, getHomepage } from '@/lib/contentful';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const products = await getProducts();
  const homepageData = await getHomepage();
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
      <Footer />
    </div>
  );
}
