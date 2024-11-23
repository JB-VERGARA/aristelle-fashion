// src/components/ProductDescription.js
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ProductDescription = ({ description }) => {
  const options = {
    renderNode: {
      // Customize rendering for specific nodes if needed
      'embedded-entry-block': (node) => (
        <div>{node.data.target.fields.title}</div> // Example customization for embedded entries
      ),
    },
  };

  if (description) {
    return <div>{documentToReactComponents(description, options)}</div>;
  }

  return null;
};

export default ProductDescription;
