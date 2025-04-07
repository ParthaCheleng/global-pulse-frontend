
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="featured-article">
      {/* Background image */}
      <img 
        src={article.urlToImage} 
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // Fallback image if the article image fails to load
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
        }}
      />
      
      {/* Gradient overlay */}
      <div className="featured-gradient"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        {article.category && (
          <span className="inline-block bg-news-accent text-white text-xs px-3 py-1 rounded-full mb-3">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
        )}
        
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white leading-tight">
          {article.title}
        </h2>
        
        <p className="mb-4 text-white/90 line-clamp-2 md:line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/80">
            <span>{article.source.name}</span>
            <span className="mx-2">•</span>
            <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
          </div>
          
          <Link to={`/article/${article.id}`}>
            <Button variant="secondary" size="sm" className="gap-1">
              Read More
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
