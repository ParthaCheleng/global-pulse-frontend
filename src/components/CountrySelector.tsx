import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { countries } from '@/lib/mockData';

interface CountrySelectorProps {
  className?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ className = '' }) => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentCountry = searchParams.get('country') || 'us';
  const selectedCountry = countries.find((c) => c.code === currentCountry);

  const handleSelect = (countryCode: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('country', countryCode);
    navigate(`/?${params.toString()}`);
    setOpen(false);
  };

  return (
    <div className={className}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-white">
            <span className="text-xl">{selectedCountry?.flag}</span>
            <span className="hidden md:inline">{selectedCountry?.name}</span>
            <Globe className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white">
          {countries.map((country) => (
            <DropdownMenuItem
              key={country.code}
              onClick={() => handleSelect(country.code)}
              className={`flex items-center gap-2 ${
                currentCountry === country.code ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              <span className="text-xl">{country.flag}</span>
              <span>{country.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CountrySelector;
