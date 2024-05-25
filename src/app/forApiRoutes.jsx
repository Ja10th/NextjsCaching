export default async function handler(req, res) {
    const data = await fetch('https://api.example.com/data');
  
    res.status(200).json(data).setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
  }  