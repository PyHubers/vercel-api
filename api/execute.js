export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Clients');
  
    if (req.method === 'OPTIONS') return res.status(200).end();
  
    if (req.method === 'POST') {
      const clients = req.headers['clients'] || '[]';
      console.log("Received clients:", clients);
      
      res.status(200).json({ 
        success: true,
        clients: JSON.parse(clients) 
      });
    } else {
      res.status(405).json({ error: "Only POST allowed" });
    }
  }
