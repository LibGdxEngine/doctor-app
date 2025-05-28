import fs from 'fs';
import path from 'path';

// Construct the absolute path to content.json
// __dirname in API routes refers to the .next/server/pages/api directory in production builds,
// or pages/api in development. We need to go up to the project root.
const dataFilePath = path.resolve(process.cwd(), 'data', 'content.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Read the JSON file
      const fileContents = fs.readFileSync(dataFilePath, 'utf8');
      const data = JSON.parse(fileContents);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error reading content file:', error);
      // If the file doesn't exist, maybe return a default structure or an error
      if (error.code === 'ENOENT') {
        res.status(404).json({ message: 'Content file not found. Please create data/content.json' });
      } else {
        res.status(500).json({ message: 'Error reading content data' });
      }
    }
  } else if (req.method === 'POST') {
    // Basic security: In a real app, protect this endpoint!
    // For example, check for a secret key or use authentication.
    // const secret = req.headers['x-admin-secret'];
    // if (secret !== 'YOUR_SUPER_SECRET_KEY') {
    //   return res.status(401).json({ message: 'Unauthorized' });
    // }

    try {
      const newData = req.body;
      // Validate newData if necessary

      // Write the updated data to the JSON file
      fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2), 'utf8');
      res.status(200).json({ message: 'Content updated successfully' });
    } catch (error) {
      console.error('Error writing content file:', error);
      res.status(500).json({ message: 'Error updating content data' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}