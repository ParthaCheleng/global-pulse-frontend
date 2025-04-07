
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { User, Settings, Bell, Globe } from 'lucide-react';
import { countries } from '@/lib/mockData';

const Profile: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 bg-news-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {user?.name.charAt(0)}
                </div>
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full mt-6"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Log Out
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="account" className="bg-white rounded-lg shadow-md">
              <TabsList className="border-b w-full rounded-none p-0">
                <TabsTrigger value="account" className="rounded-none rounded-tl-lg data-[state=active]:border-b-2 data-[state=active]:border-news-primary">
                  Account Information
                </TabsTrigger>
                <TabsTrigger value="preferences" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-news-primary">
                  News Preferences
                </TabsTrigger>
                <TabsTrigger value="notifications" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-news-primary">
                  Notifications
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="p-6">
                <h3 className="text-xl font-semibold mb-6">Account Information</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue={user?.name} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue={user?.email} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" placeholder="••••••••" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  
                  <Button>Save Changes</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="preferences" className="p-6">
                <h3 className="text-xl font-semibold mb-6">News Preferences</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-medium mb-3">Default Country</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {countries.map(country => (
                        <div
                          key={country.code}
                          className="flex items-center p-3 border rounded-md cursor-pointer hover:border-news-primary transition-colors"
                        >
                          <span className="text-2xl mr-2">{country.flag}</span>
                          <span>{country.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium mb-3">Favorite Categories</h4>
                    <div className="space-y-3">
                      {['General', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health', 'Science'].map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Switch id={`category-${category.toLowerCase()}`} />
                          <Label htmlFor={`category-${category.toLowerCase()}`}>
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button>Save Preferences</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications" className="p-6">
                <h3 className="text-xl font-semibold mb-6">Notification Settings</h3>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Breaking News</h4>
                        <p className="text-sm text-gray-600">Receive notifications for major breaking stories</p>
                      </div>
                      <Switch id="breaking-news" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Daily Digest</h4>
                        <p className="text-sm text-gray-600">Receive a daily summary of top news</p>
                      </div>
                      <Switch id="daily-digest" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Saved Article Reminders</h4>
                        <p className="text-sm text-gray-600">Get reminded about articles you saved but haven't read</p>
                      </div>
                      <Switch id="saved-reminders" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-600">Receive news updates via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                  </div>
                  
                  <Button>Save Notification Settings</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
