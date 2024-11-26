// src/pages/product/[id].js
import { getProductById, getProducts } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: { id: product.sys.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const product = await getProductById(params.id);
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { notFound: true };
  }
}

const ProductDetails = ({ product }) => {
  if (!product) return <p>Loading...</p>;

  const {
    fields: {
      productName,
      productDescription,
      price,
      materials,
      colors,
      stockQuantity,
      productTags,
      productDiscount,
      location,
      featuredImage,
    },
  } = product;

  // Convert rich text to React components
  const productDescriptionRendered = documentToReactComponents(productDescription);

  return (
    <div className="product-detail-page">
      <div className="product-header">
        <h1 className="product-name">{productName}</h1>
        {featuredImage && (
          <img className="product-image" src={featuredImage.fields.file.url} alt={productName} />
        )}
      </div>

      <div className="product-info">
        <div className="product-description">{productDescriptionRendered}</div>

        <div className="product-details">
          <p className="price">₱{price}</p>
          {materials && <p className="materials">Materials: {materials}</p>}
          {colors && <p className="colors">Colors: {colors}</p>}
          {stockQuantity && <p className="stock-quantity">Stock: {stockQuantity}</p>}
          {location && <p className="location">Location: {location}</p>}
          {productTags && <p className="tags">Tags: {productTags}</p>}
          {productDiscount && <p className="discount">Discount: Available</p>}
        </div>

        <div className="action-buttons">
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="view-details-button">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
