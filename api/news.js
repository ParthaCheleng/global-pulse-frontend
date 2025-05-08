export default async function handler(req, res) {
    const { category = "general", country = "us", q = "" } = req.query;
  
    const endpoint = `https://newsapi.org/v2/top-headlines`;
    const queryParams = new URLSearchParams({
      country,
      apiKey: process.env.VITE_NEWS_API_KEY,
    });
  
    // If a search term exists, add it
    if (q) {
      queryParams.append("q", q);
    } else {
      queryParams.append("category", category);
    }
  
    const url = `${endpoint}?${queryParams.toString()}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch news", details: err.message });
    }
  }
  