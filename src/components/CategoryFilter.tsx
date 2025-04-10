import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '@/lib/mockData';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const CategoryFilter: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentCategory = searchParams.get('category') || 'general';

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams();
    if (categoryId !== 'all') {
      params.set('category', categoryId);
    }
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="w-full mb-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 py-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`category-pill ${
                currentCategory === category.id ||
                (category.id === 'all' && !searchParams.get('category'))
                  ? 'active'
                  : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
