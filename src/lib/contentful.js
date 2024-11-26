// contentful.js
import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("Missing Contentful environment variables");
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getProducts = async () => {
  const response = await client.getEntries({ content_type: 'product' });
  return response.items;
};

// New function to fetch homepage data
export const getHomepage = async () => {
  const response = await client.getEntries({
    content_type: 'homepage',
    include: 2, // Ensures nested references like `banner` are included
  });

  return response.items[0]?.fields; // Return the fields of the first homepage entry
};

export const getProductById = async (id) => {
  const response = await client.getEntry(id); // Fetch product by ID
  return response; // Return product entry
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                `q`