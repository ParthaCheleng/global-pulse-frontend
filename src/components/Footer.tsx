
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-news-primary" />
              <span className="text-xl font-bold text-news-primary">GlobalPulse</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your source for real-time news from around the world. Stay informed with the latest headlines and in-depth reporting.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/?category=general" className="hover:text-news-primary">General</Link></li>
              <li><Link to="/?category=business" className="hover:text-news-primary">Business</Link></li>
              <li><Link to="/?category=technology" className="hover:text-news-primary">Technology</Link></li>
              <li><Link to="/?category=sports" className="hover:text-news-primary">Sports</Link></li>
              <li><Link to="/?category=health" className="hover:text-news-primary">Health</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="#" className="hover:text-news-primary">About Us</Link></li>
              <li><Link to="#" className="hover:text-news-primary">Contact</Link></li>
              <li><Link to="#" className="hover:text-news-primary">Careers</Link></li>
              <li><Link to="#" className="hover:text-news-primary">Advertise</Link></li>
              <li><Link to="#" className="hover:text-news-primary">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-news-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-news-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-news-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-news-primary">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for weekly updates on the latest news.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} GlobalPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
