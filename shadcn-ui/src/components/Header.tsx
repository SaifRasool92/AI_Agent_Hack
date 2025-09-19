import { Button } from '@/components/ui/button';
import { Wallet, Search, Menu, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🤖</span>
            </div>
            <h1 className="text-white text-2xl font-bold">Agent Marketplace</h1>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Browse Agents</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">My Agents</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search agents..." 
              className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
            />
          </div>
          
          {/* Action Buttons */}
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}