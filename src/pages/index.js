// src/pages/index.js

import Head from 'next/head';
import { getProducts, getHomepage, } from '@/lib/contentful';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

export async function getStaticProps() {
  const products = await getProducts();
  const homepageData = await getHomepage();
  const { businessName, businessDescription, logo, banner } = homepageData;

  return {
    props: {
      products,
      businessName,
      businessDescription,
      logo,
      banner, // Ensure the banner field is passed correctly
    },
    revalidate: 60,
  };
}

export default function Home({ products, businessName, businessDescription, logo, banner }) {
  return (
    <div>
      {/* Header with business details */}
      <Header businessName={businessName} logo={logo} />

      {/* Banner Section */}
      <Banner banner={banner} /> {/* Use the Banner component */}

      {/* Main content */}
      <h1 className="products-heading">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
