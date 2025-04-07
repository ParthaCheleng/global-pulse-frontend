
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';
import { Menu, Search, User, Bookmark, LogOut, Globe } from 'lucide-react';
import SearchBar from './SearchBar';
import CountrySelector from './CountrySelector';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-news-primary" />
          <span className="text-xl font-bold text-news-primary">GlobalPulse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <button 
            onClick={() => setShowSearch(!showSearch)} 
            className="nav-link flex items-center gap-1"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
          <CountrySelector className="hidden lg:block" />
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/saved" className="flex items-center space-x-1 text-gray-700 hover:text-news-primary transition-colors">
                <Bookmark size={18} />
                <span>Saved</span>
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Hi, {user?.name.split(' ')[0]}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => logout()}
                  className="flex items-center space-x-1"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button onClick={() => navigate('/register')}>
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-lg font-medium py-2">Home</Link>
              <button className="flex items-center text-lg font-medium py-2" onClick={() => setShowSearch(!showSearch)}>
                <Search className="mr-2 h-5 w-5" />
                Search
              </button>
              <CountrySelector />
              <div className="border-t border-gray-200 my-2 pt-2">
                {isAuthenticated ? (
                  <>
                    <div className="py-2 text-lg">Hi, {user?.name.split(' ')[0]}</div>
                    <Link to="/saved" className="flex items-center text-lg font-medium py-2">
                      <Bookmark className="mr-2 h-5 w-5" />
                      Saved Articles
                    </Link>
                    <button 
                      onClick={() => logout()} 
                      className="flex items-center text-lg font-medium py-2 text-red-500"
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="flex items-center text-lg font-medium py-2">
                      <User className="mr-2 h-5 w-5" />
                      Login
                    </Link>
                    <Link to="/register" className="flex items-center text-lg font-medium py-2 text-news-primary">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Search bar overlay - conditionally rendered */}
      {showSearch && (
        <div className="absolute w-full bg-white border-b border-gray-200 shadow-md p-4 animate-fade-in">
          <SearchBar onClose={() => setShowSearch(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
