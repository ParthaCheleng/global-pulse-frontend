
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Article } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { isAuthenticated, saveArticle, unsaveArticle, isSaved } = useAuth();
  
  const isArticleSaved = isAuthenticated && isSaved(article.id);
  
  const handleBookmark = () => {
    if (isAuthenticated) {
      if (isArticleSaved) {
        unsaveArticle(article.id);
      } else {
        saveArticle(article.id);
      }
    }
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.origin + `/article/${article.id}`,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.origin + `/article/${article.id}`)}`, '_blank');
    }
  };

  return (
    <div className="article-card flex flex-col h-full">
      <div className="relative">
        <Link to={`/article/${article.id}`}>
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="article-image"
            onError={(e) => {
              // Fallback image if the article image fails to load
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
            }}
          />
        </Link>
        {article.category && (
          <span className="absolute top-3 left-3 bg-news-primary text-white text-xs px-2 py-1 rounded-full">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/article/${article.id}`}>
          <h3 className="article-title mb-2">{article.title}</h3>
        </Link>
        
        <p className="article-excerpt mb-4">{article.description}</p>
        
        <div className="mt-auto">
          <div className="article-meta mb-3">
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
            </span>
            <span>•</span>
            <span>{article.source.name}</span>
          </div>
          
          <div className="flex justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 hover:text-news-primary"
              onClick={handleBookmark}
            >
              <Bookmark size={16} className={isArticleSaved ? "fill-news-primary text-news-primary" : ""} />
              {isArticleSaved ? 'Saved' : 'Save'}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 hover:text-news-primary"
              onClick={handleShare}
            >
              <Share2 size={16} />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
