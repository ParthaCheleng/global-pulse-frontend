import React from 'react';
import { Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface ArticleCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: article.url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(article.url)}`,
        '_blank'
      );
    }
  };

  return (
    <div className="article-card flex flex-col h-full rounded-lg shadow-sm border bg-white overflow-hidden">
      <div className="relative">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="article-image w-full h-48 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop';
            }}
          />
        </a>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="article-title mb-2 font-semibold text-lg leading-tight">
            {article.title}
          </h3>
        </a>

        <p className="article-excerpt mb-4 text-sm text-gray-600">
          {article.description}
        </p>

        <div className="mt-auto">
          <div className="article-meta mb-3 text-xs text-gray-500 flex gap-2 items-center">
            <Clock size={14} className="mr-1" />
            {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
            <span>•</span>
            <span>{article.source.name}</span>
          </div>

          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
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
