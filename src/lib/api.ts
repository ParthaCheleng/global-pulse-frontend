// src/lib/api.ts

// Fetch top headlines using Vercel Serverless Proxy
export const fetchNews = async (
  category: string = "general",
  country: string = "us"
): Promise<any[]> => {
  try {
    const url = `/api/news?country=${country}&category=${category}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[Proxy] Error ${response.status}: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (data.status !== "ok" || !data.articles) {
      console.warn("[Proxy] Unexpected response:", data);
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("[Proxy] Fetch failed:", error);
    return [];
  }
};

// 🔍 Search headlines using Vercel Serverless Proxy
export const searchNews = async (
  query: string,
  country: string = "us"
): Promise<any[]> => {
  try {
    const url = `/api/news?q=${encodeURIComponent(query)}&country=${country}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[Proxy] Error ${response.status}: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    if (data.status !== "ok" || !data.articles) {
      console.warn("[Proxy] Unexpected response:", data);
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("[Proxy] Search failed:", error);
    return [];
  }
};
