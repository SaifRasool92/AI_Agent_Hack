import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Network, MessageCircle, TrendingUp } from 'lucide-react';

export default function CoreFeatures() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Mixed Control",
      description: "Agents can work autonomously and accept human guidance, enabling flexible control over task execution."
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: "Task Composition",
      description: "Complex tasks can be broken down into smaller, manageable components for efficient processing."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: "Human Interaction",
      description: "Seamless integration between AI agents and human operators for collaborative problem-solving."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Advanced Learning",
      description: "AI agents continuously learn and adapt from interactions to improve performance over time."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Core Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}