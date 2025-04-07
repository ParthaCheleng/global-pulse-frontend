
export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  urlToImage: string;
  category?: string;
  country?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedArticles: string[];
}

export type Category = 
  | 'general'
  | 'business'
  | 'technology'
  | 'sports'
  | 'health'
  | 'science'
  | 'entertainment';

export type Country = 
  | 'us' 
  | 'gb' 
  | 'in' 
  | 'ca' 
  | 'au' 
  | 'jp' 
  | 'fr' 
  | 'de';

export interface CountryInfo {
  code: Country;
  name: string;
  flag: string;
}
