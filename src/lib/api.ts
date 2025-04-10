// src/lib/api.ts
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

// Fetch top headlines
export const fetchNews = async (
  category: string = "general",
  country: string = "us"
): Promise<any[]> => {
  try {
    const url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[NewsAPI] Error ${response.status}: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (data.status !== "ok" || !data.articles) {
      console.warn("[NewsAPI] Unexpected response:", data);
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("[NewsAPI] Fetch failed:", error);
    return [];
  }
};

// 🔧 Fix: Add country as second parameter
export const searchNews = async (
  query: string,
  country: string = "us"
): Promise<any[]> => {
  try {
    const url = `${BASE_URL}/top-headlines?q=${encodeURIComponent(query)}&country=${country}&apiKey=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[NewsAPI] Error ${response.status}: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (data.status !== "ok" || !data.articles) {
      console.warn("[NewsAPI] Unexpected response:", data);
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("[NewsAPI] Search failed:", error);
    return [];
  }
};
