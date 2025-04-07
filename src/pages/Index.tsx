
import React, { useEffect } from 'react';
import { useNews } from '@/context/NewsContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import ArticleCard from '@/components/ArticleCard';
import FeaturedArticle from '@/components/FeaturedArticle';
import { useSearchParams } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

const Index: React.FC = () => {
  const { featuredArticles, filteredArticles, isLoading, setCurrentCategory } = useNews();
  const [searchParams] = useSearchParams();
  
  // Update category based on URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCurrentCategory(categoryParam as any);
    }
  }, [searchParams, setCurrentCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section with featured articles */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          {isLoading ? (
            <div className="rounded-xl overflow-hidden">
              <Skeleton className="h-[400px] w-full" />
            </div>
          ) : featuredArticles.length > 0 ? (
            <FeaturedArticle article={featuredArticles[0]} />
          ) : null}
        </section>
        
        {/* Category filters */}
        <section className="container mx-auto px-4 md:px-6 py-4">
          <CategoryFilter />
        </section>
        
        {/* Articles grid */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          
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
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No articles found matching your criteria</h3>
              <p className="text-gray-500 mt-2">Try changing your search or filter settings</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
