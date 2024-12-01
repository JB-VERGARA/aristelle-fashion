// pages/api/revalidate.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Verify webhook from Contentful if necessary (e.g., by checking headers)
        // Trigger page revalidation
        await res.revalidate('/home'); // Adjust this path as needed (e.g., '/products', '/home')
        return res.json({ revalidated: true });
      } catch (err) {
        return res.status(500).json({ message: 'Error revalidating', error: err.message });
      }
    } else {
      // Handle any non-POST request
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  