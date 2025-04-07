
import React from 'react';
import { useNews } from '@/context/NewsContext';
import { categories } from '@/lib/mockData';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const CategoryFilter: React.FC = () => {
  const { currentCategory, setCurrentCategory } = useNews();

  return (
    <div className="w-full mb-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 py-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id as any)}
              className={`category-pill ${
                currentCategory === category.id ? 'active' : ''
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
