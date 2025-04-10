import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
  };
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="featured-article relative h-[400px] rounded-xl overflow-hidden">
      {/* Background image */}
      <img
        src={article.urlToImage}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop';
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          {article.title}
        </h2>

        <p className="mb-4 text-white/90 line-clamp-2 md:line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-white/80">
            <span>{article.source.name}</span>
            <span className="mx-2">•</span>
            <span>
              {formatDistanceToNow(new Date(article.publishedAt), {
                addSuffix: true,
              })}
            </span>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="gap-1">
              Read More
              <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
