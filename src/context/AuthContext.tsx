
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  saveArticle: (articleId: string) => Promise<void>;
  unsaveArticle: (articleId: string) => Promise<void>;
  isSaved: (articleId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock authenticated state with local storage for demo purposes
  useEffect(() => {
    const storedUser = localStorage.getItem('globalPulse_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock implementation - in a real app, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user login for demo
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email,
        savedArticles: []
      };
      
      setUser(mockUser);
      localStorage.setItem('globalPulse_user', JSON.stringify(mockUser));
      toast({
        title: "Logged in successfully",
        description: `Welcome back, ${mockUser.name}!`,
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock implementation - in a real app, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user registration
      const mockUser: User = {
        id: '1',
        name,
        email,
        savedArticles: []
      };
      
      setUser(mockUser);
      localStorage.setItem('globalPulse_user', JSON.stringify(mockUser));
      toast({
        title: "Account created",
        description: `Welcome to Global Pulse, ${name}!`,
      });
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Could not create your account",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('globalPulse_user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const saveArticle = async (articleId: string) => {
    if (!user) return;
    
    try {
      // In a real app, this would be an API call
      const updatedSavedArticles = [...user.savedArticles, articleId];
      const updatedUser = { ...user, savedArticles: updatedSavedArticles };
      
      setUser(updatedUser);
      localStorage.setItem('globalPulse_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Article saved",
        description: "Article has been added to your saved items",
      });
    } catch (error) {
      toast({
        title: "Failed to save",
        description: "Could not save the article",
        variant: "destructive",
      });
    }
  };

  const unsaveArticle = async (articleId: string) => {
    if (!user) return;
    
    try {
      // In a real app, this would be an API call
      const updatedSavedArticles = user.savedArticles.filter(id => id !== articleId);
      const updatedUser = { ...user, savedArticles: updatedSavedArticles };
      
      setUser(updatedUser);
      localStorage.setItem('globalPulse_user', JSON.stringify(updatedUser));
      
      toast({
        title: "Article removed",
        description: "Article has been removed from your saved items",
      });
    } catch (error) {
      toast({
        title: "Failed to remove",
        description: "Could not remove the article",
        variant: "destructive",
      });
    }
  };

  const isSaved = (articleId: string) => {
    return user?.savedArticles.includes(articleId) ?? false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        saveArticle,
        unsaveArticle,
        isSaved
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
