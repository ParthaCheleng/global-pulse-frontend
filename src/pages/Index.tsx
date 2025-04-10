import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import ArticleCard from '@/components/ArticleCard';
import FeaturedArticle from '@/components/FeaturedArticle';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchNews, searchNews } from '@/lib/api';

const Index: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState<any[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const category = searchParams.get('category') || 'general';
  const country = searchParams.get('country') || 'us';
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      try {
        let data = [];

        if (query) {
          data = await searchNews(query, country);
        } else {
          data = await fetchNews(category, country);
        }

        setArticles(data);
        setFeaturedArticle(data.length > 0 ? data[0] : null);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, [category, country, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section with featured article */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          {isLoading ? (
            <div className="rounded-xl overflow-hidden">
              <Skeleton className="h-[400px] w-full" />
            </div>
          ) : featuredArticle ? (
            <FeaturedArticle article={featuredArticle} />
          ) : null}
        </section>

        {/* Category filters (hide if search is active) */}
        {!query && (
          <section className="container mx-auto px-4 md:px-6 py-4">
            <CategoryFilter />
          </section>
        )}

        {/* Articles grid */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {query ? `Search Results for "${query}"` : 'Latest News'}
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="article-card">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-3" />
                    <div className="flex justify-between">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No articles found matching your criteria</h3>
              <p className="text-gray-500 mt-2">Try a different keyword or filter</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
