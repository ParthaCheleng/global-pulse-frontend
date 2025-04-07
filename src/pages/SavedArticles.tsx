
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useNews } from '@/context/NewsContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { BookmarkX } from 'lucide-react';

const SavedArticles: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { articles } = useNews();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  // Get saved articles
  const savedArticles = articles.filter(article => 
    user?.savedArticles.includes(article.id)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Saved Articles</h1>
        
        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <BookmarkX className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No saved articles yet</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              When you find articles you want to read later, save them to your list by clicking on the bookmark icon.
            </p>
            <Button onClick={() => navigate('/')}>
              Browse Articles
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedArticles;
