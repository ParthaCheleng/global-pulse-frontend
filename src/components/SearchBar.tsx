import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const defaultQuery = searchParams.get('q') || '';
  const [localQuery, setLocalQuery] = useState(defaultQuery);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = localQuery.trim();
    if (trimmed) {
      navigate(`/?q=${encodeURIComponent(trimmed)}`);
    } else {
      navigate(`/`);
    }
    if (onClose) onClose();
  };

  const handleClear = () => {
    setLocalQuery('');
    navigate(`/`);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search for news articles..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="pl-10 pr-16 py-6 text-base rounded-md w-full"
        />
        {localQuery && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-16"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
        <Button 
          type="submit"
          className="absolute right-2"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
