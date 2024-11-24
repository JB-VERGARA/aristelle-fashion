// contentful.js
import { createClient } from 'contentful';

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
  const response = await client.getEntry(id);
  return response;
};
