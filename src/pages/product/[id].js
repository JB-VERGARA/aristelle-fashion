import { getProductById, getProducts, getHomepage } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {FaShoppingCart } from 'react-icons/fa'; // Importing icons

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: { id: product.sys.id }, // Using Contentful's system ID for the path
  }));

  return { paths, fallback: false }; // Use `false` for no fallback; adjust as needed
}

export async function getStaticProps({ params }) {
  try {
    // Fetch product data by ID
    const product = await getProductById(params.id);

    // Fetch homepage data for business details (logo, businessName)
    const homepageData = await getHomepage();
    const { businessName, logo } = homepageData;

    return { props: { product, businessName, logo } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { notFound: true }; // Return 404 if fetching fails
  }
}

const ProductDetails = ({ product, businessName, logo }) => {
  const router = useRouter();

  if (!product) return <p className="loading-message">Loading...</p>;

  const {
    fields: {
      productName,
      productDescription,
      price,
      materials,
      colors,
      stockQuantity,
      location,
      featuredImage,
    },
  } = product;

  const productDescriptionRendered = documentToReactComponents(productDescription);

  return (
    <div>
      {/* Header */}
      <Header businessName={businessName} logo={logo} />

      {/* Product Details */}
      <div className="product-details-container">
        <div className="product-details-layout">
          {/* Left Column: Product Image */}
          <div className="product-image-section">
            {featuredImage?.fields?.file?.url ? (
              <Image
                src={`https:${featuredImage.fields.file.url}`}
                alt={productName}
                width={500}
                height={500}
                className="product-image"
              />
            ) : (
              <p className="no-image-message">No image available</p>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className="product-info-section">
            <h1 className="product-title">{productName}</h1>
            <p className="product-price">₱{price.toLocaleString()}</p>
            <div className="product-description">{productDescriptionRendered}</div>
            <p className="product-meta">
              <strong>Materials:</strong> {materials}
            </p>
            <p className="product-meta">
              <strong>Colors:</strong> {colors}
            </p>
            <p className="product-meta">
              <strong>Stock Quantity:</strong> {stockQuantity}
            </p>
            <p className="product-meta">
              <strong>Location:</strong> {location}
            </p>
            <div className="product-action-buttons">
              <button className="product-add-to-cart-button"><FaShoppingCart style={{ marginRight: '7px' }} /> Add to Cart</button>
              <button
                className="product-back-to-shop-button"
                onClick={() => router.push('/')}
              >
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
