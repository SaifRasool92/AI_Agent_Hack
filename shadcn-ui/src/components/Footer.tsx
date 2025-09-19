import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  ExternalLink,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="text-white text-xl font-bold">Agent Marketplace</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's first decentralized marketplace for AI agents. Discover, rent, and deploy intelligent automation powered by blockchain technology.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Marketplace</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Browse Agents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Top Rated</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Trending</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Developers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-1">
                  <span>API Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">SDK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Submit Agent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest updates on new agents, features, and blockchain innovations.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white text-sm"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Agent Marketplace. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using</span>
              <span className="text-purple-400 font-semibold">Solana</span>
              <span>+</span>
              <span className="text-blue-400 font-semibold">AI</span>
              <span>+</span>
              <span className="text-green-400 font-semibold">Coral Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}