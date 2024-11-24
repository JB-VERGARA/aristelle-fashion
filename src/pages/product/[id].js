import { getProducts } from '@/lib/contentful';

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { id: product.sys.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getProducts();
  const product = products.find((p) => p.sys.id === params.id);

  return {
    props: { product },
  };
}

export default function ProductDetails({ product }) {
  const { productName, price, productDescription, featuredImage } = product.fields;

  return (
    <div>
      <h1>{productName}</h1>
      <img
        src={featuredImage?.fields?.file?.url}
        alt={featuredImage?.fields?.title || productName}
      />
      <p> ₱ {price}</p>
      <div dangerouslySetInnerHTML={{ __html: productDescription }} />
    </div>
  );
}
