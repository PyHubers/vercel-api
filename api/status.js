export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Clients');
  
    if (req.method === 'OPTIONS') return res.status(200).end();
    
    if (req.method === 'GET') {
      res.status(200).json({ status: "OK" });
    } else {
      res.status(405).json({ error: "Only GET allowed" });
    }
  }
