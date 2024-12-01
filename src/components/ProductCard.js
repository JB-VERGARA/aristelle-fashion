import React from 'react';
import { FaInfoCircle, FaFacebookMessenger } from 'react-icons/fa'; // Importing icons
import { useRouter } from 'next/router'; // Import useRouter


// Function to generate a color from the tag
const generateColor = (tag) => {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `#${((hash >> 0) & 0xFFFFFF).toString(16).padStart(6, "0")}`;
  return color;
};

// Hex to color name mapping
const hexToColorName = {
  "#FFFFFF": "White",
  "#000000": "Black",
  "#FF5733": "Red",
  "#33FF57": "Green",
  "#5733FF": "Blue",
  "#FF0000": "Bright Red",
  "#00FF00": "Lime Green",
  "#0000FF": "Blue",
  "#FFFF00": "Yellow",
  // Add more color mappings as needed
};

// Function to get a human-readable color name from hex code
const getColorName = (hex) => {
  return hexToColorName[hex]; // Return custom color name if not in mapping
};

// Helper function to determine if the color is light or dark
const isLightColor = (color) => {
  if (color.startsWith('rgb')) {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return brightness > 128;
    }
  } else if (color.startsWith('#')) {
    color = color.slice(1); // Remove the "#" symbol if present
    if (color.length === 6) {
      let r = parseInt(color.slice(0, 2), 16);
      let g = parseInt(color.slice(2, 4), 16);
      let b = parseInt(color.slice(4, 6), 16);
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return brightness > 128;
    }
  }
  return false;
};

const ProductCard = ({ product }) => {
  const { 
    fields: { 
      productName, 
      entryTitle, 
      location, 
      price, 
      colors, 
      productTags, 
      featuredImage 
    } 
  } = product;
  const router = useRouter();
  const handleViewDetails = () => {
    router.push(`/product/${product.sys.id}`); // Navigate to dynamic route
  };
  return (
    <div className="product-card">
      {/* Product Image */}
      {featuredImage && (
        <img
          src={featuredImage.fields.file.url}
          alt={productName}
          className="product-image"
        />
      )}

      {/* Product Name */}
      <h2 className="product-name">{productName}</h2>

      {/* Entry Title */}
      <p className="entry-title">{entryTitle}</p>

      {/* Location */}
      {location && (
        <p className="location">
          <span className="location-icon">📍</span>
          {location} {/* Displays the updated location string */}
        </p>
      )}

      {/* Price */}
      <p className="price">₱ {price}</p>

      {/* Colors */}
      <div className="colors">
        <span>Colors:</span>
        {colors.split(',').map((color, index) => { // Limit to 3 colors
          const colorName = getColorName(color.trim()); // Get the color name from hex
          return (
            <span
              key={index}
              className="color-tag"
              style={{
                backgroundColor: color.trim(),
                color: isLightColor(color.trim()) ? '#000' : '#fff', // Set text color based on brightness
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid black',
                margin: '5px',
                display: 'inline-block',
              }}
            >
              {colorName} {/* Display color name */}
            </span>
          );
        })}
      </div>

      {/* Tags */}
      <div className="tags">
        {productTags.split(',').map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{
              backgroundColor: generateColor(tag.trim()),
              color: '#000'
            }}
          >
            {tag.trim()}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        {/* View Details Button */}
        <button className="view-details-button" onClick={handleViewDetails}>
        <FaInfoCircle style={{ marginRight: '8px' }} /> View Details
      </button>

        {/* Add to Cart Button */}
        <button
            className="add-to-cart-button"
            onClick={() => {
              const encodedProductName = encodeURIComponent(productName);
              const preFilledMessage = encodeURIComponent(`Hi, I'm interested in the product: ${productName}`);
              const chatUrl = `https://m.me/61561870003784?ref=${encodedProductName}&message=${preFilledMessage}`;
              window.open(chatUrl, '_blank');
            }}
            >
             <FaFacebookMessenger style={{ marginRight: '8px' }}/> Chat With Us
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
