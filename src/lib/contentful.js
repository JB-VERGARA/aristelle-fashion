// src/lib/contentful.js
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Fetch products from Contentful
export async function getProducts() {
  const res = await client.getEntries({ content_type: 'product' });

  return res.items; // Return product items
}
