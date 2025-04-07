
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNews } from '@/context/NewsContext';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow, format } from 'date-fns';
import { Bookmark, Share2, ArrowLeft, ExternalLink, MessageSquare } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getArticleById, isLoading } = useNews();
  const { isAuthenticated, saveArticle, unsaveArticle, isSaved } = useAuth();
  const navigate = useNavigate();
  
  const article = id ? getArticleById(id) : undefined;
  const isArticleSaved = isAuthenticated && article ? isSaved(article.id) : false;
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const handleBookmark = () => {
    if (isAuthenticated && article) {
      if (isArticleSaved) {
        unsaveArticle(article.id);
      } else {
        saveArticle(article.id);
      }
    } else {
      // Redirect to login if not authenticated
      navigate('/login');
    }
  };
  
  const handleShare = async () => {
    if (article) {
      if (navigator.share) {
        try {
          await navigator.share({
            title: article.title,
            text: article.description,
            url: window.location.href,
          });
        } catch (error) {
          console.log('Error sharing:', error);
        }
      } else {
        // Fallback for browsers that don't support the Web Share API
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        
        {isLoading ? (
          <ArticleSkeleton />
        ) : article ? (
          <article className="max-w-4xl mx-auto">
            {/* Article header */}
            <header className="mb-8">
              {article.category && (
                <span className="inline-block bg-news-primary text-white text-xs px-3 py-1 rounded-full mb-4">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-3">
                <span className="font-medium">{article.source.name}</span>
                <span className="text-gray-400">•</span>
                <span>{format(new Date(article.publishedAt), 'MMMM d, yyyy')}</span>
                <span className="text-gray-400">•</span>
                <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
              </div>
              
              <div className="flex items-center text-sm mb-6">
                <span className="mr-2">By {article.author || 'Staff Reporter'}</span>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleBookmark}
                >
                  <Bookmark size={16} className={isArticleSaved ? "fill-news-primary text-news-primary" : ""} />
                  {isArticleSaved ? 'Saved' : 'Save Article'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleShare}
                >
                  <Share2 size={16} />
                  Share
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  asChild
                >
                  <a href="#comments">
                    <MessageSquare size={16} />
                    Comments
                  </a>
                </Button>
              </div>
            </header>
            
            {/* Article image */}
            <figure className="mb-8">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto rounded-lg object-cover"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              <figcaption className="text-sm text-gray-500 mt-2">
                Image: {article.source.name}
              </figcaption>
            </figure>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-xl font-medium leading-relaxed mb-6">
                {article.description}
              </p>
              
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {/* Source link */}
              <div className="flex justify-start mt-8">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-news-primary hover:underline"
                >
                  <span>Read the full article at {article.source.name}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            {/* Comments section */}
            <div id="comments" className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-2xl font-bold mb-6">Comments</h3>
              
              {isAuthenticated ? (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">Share your thoughts on this article</p>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md mb-3" 
                    rows={3}
                    placeholder="Write your comment..."
                  />
                  <Button>Post Comment</Button>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center">
                  <p className="text-gray-700 mb-4">Login to join the conversation</p>
                  <Button asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              )}
              
              <div className="text-center text-gray-500 py-6">
                No comments yet. Be the first to share your thoughts!
              </div>
            </div>
          </article>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Article not found</h2>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Back to Homepage</Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// Loading skeleton
const ArticleSkeleton: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <Skeleton className="h-8 w-24 mb-4" />
      <Skeleton className="h-12 w-full mb-4" />
      <Skeleton className="h-12 w-3/4 mb-6" />
      <div className="flex gap-3 mb-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-36" />
      </div>
      <div className="flex gap-3 mb-6">
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-28" />
      </div>
    </div>
    
    <Skeleton className="h-[400px] w-full mb-8" />
    
    <div className="space-y-4 mb-12">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  </div>
);

export default ArticleDetail;
