import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, Activity, Wallet } from 'lucide-react';

interface AgentCardProps {
  name: string;
  description: string;
  executionCost: string;
  runs: string;
  uptime: string;
  walletAddress: string;
  isSecure?: boolean;
}

export default function AgentCard({ 
  name, 
  description, 
  executionCost, 
  runs, 
  uptime, 
  walletAddress,
  isSecure = true 
}: AgentCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white hover:bg-gray-750 transition-all duration-300 hover:scale-105 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-white">{name}</CardTitle>
          <Badge variant="secondary" className="bg-green-600 text-white text-xs">
            Rent Agent
          </Badge>
        </div>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="w-4 h-4 text-orange-400" />
          <span className="text-gray-300">{executionCost}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Activity className="w-4 h-4 text-blue-400" />
          <span className="text-gray-300">{runs}</span>
        </div>
        
        {isSecure && (
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-gray-300">Blockchain secure</span>
          </div>
        )}
        
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-gray-300">{uptime} uptime</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Wallet className="w-4 h-4 text-purple-400" />
          <span className="text-gray-400 font-mono text-xs">{walletAddress}</span>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
          Rent Agent
        </Button>
      </CardContent>
    </Card>
  );
}