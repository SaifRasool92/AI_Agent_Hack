import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      value: "10,000+",
      label: "Active Users",
      description: "Trusted by developers worldwide"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      value: "1M+",
      label: "Executions",
      description: "AI tasks completed successfully"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable blockchain infrastructure"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      value: "500+",
      label: "AI Agents",
      description: "Growing marketplace ecosystem"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Powering the Future of AI</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of developers leveraging decentralized AI agents to automate their workflows and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}