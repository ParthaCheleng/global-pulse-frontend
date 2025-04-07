
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, Category, Country } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

// Mock data for our demo
import { mockArticles } from '@/lib/mockData';

interface NewsContextType {
  articles: Article[];
  featuredArticles: Article[];
  isLoading: boolean;
  error: string | null;
  currentCategory: Category | 'all';
  currentCountry: Country;
  searchQuery: string;
  setCurrentCategory: (category: Category | 'all') => void;
  setCurrentCountry: (country: Country) => void;
  setSearchQuery: (query: string) => void;
  getArticleById: (id: string) => Article | undefined;
  filteredArticles: Article[];
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | 'all'>('all');
  const [currentCountry, setCurrentCountry] = useState<Country>('us');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock fetching articles
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call to your backend or directly to a news API
        // For demo purposes, we're using mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        
        setArticles(mockArticles);
        setFeaturedArticles(mockArticles.slice(0, 5));
        setError(null);
      } catch (error) {
        setError('Failed to fetch news articles');
        toast({
          title: "Error",
          description: "Failed to load news articles",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [currentCountry]); // Refetch when country changes

  // Filter articles based on category and search query
  const filteredArticles = articles
    .filter(article => {
      // Filter by category if not 'all'
      if (currentCategory !== 'all' && article.category !== currentCategory) {
        return false;
      }
      
      // Filter by search query if present
      if (searchQuery && !article.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !article.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });

  const getArticleById = (id: string) => {
    return articles.find(article => article.id === id);
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        featuredArticles,
        isLoading,
        error,
        currentCategory,
        currentCountry,
        searchQuery,
        setCurrentCategory,
        setCurrentCountry,
        setSearchQuery,
        getArticleById,
        filteredArticles
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
