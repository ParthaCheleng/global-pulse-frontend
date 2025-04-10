import { Article, CountryInfo } from "./types";

// ✅ Mock articles (you can keep this for dev/test mode)
export const mockArticles: Article[] = [
  // ... (keep all your original mock articles here)
];

// ✅ Country List for Dropdowns / Filters
export const countries: CountryInfo[] = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
  { code: 'de', name: 'Germany', flag: '🇩🇪' }
];

// ✅ News Categories Supported by NewsAPI
export const categories = [
  { id: 'all', name: 'All' },
  { id: 'general', name: 'General' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'science', name: 'Science' }
];
