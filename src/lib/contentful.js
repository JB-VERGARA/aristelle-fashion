import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getProducts = async () => {
  const response = await client.getEntries({ content_type: 'product' });
  return response.items;
};

export const getProductById = async (id) => {
  const response = await client.getEntry(id);
  return response;
};
