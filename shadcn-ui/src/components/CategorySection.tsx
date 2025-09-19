import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Code, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Image, 
  Database, 
  Bot 
} from 'lucide-react';

export default function CategorySection() {
  const categories = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      name: "SEO & Marketing",
      count: 45,
      description: "Content optimization, keyword research, and marketing automation"
    },
    {
      icon: <Code className="w-6 h-6 text-green-400" />,
      name: "Development",
      count: 78,
      description: "Code review, testing, debugging, and deployment automation"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      name: "Analytics",
      count: 32,
      description: "Data analysis, visualization, and business intelligence"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-yellow-400" />,
      name: "Social Media",
      count: 28,
      description: "Content creation, scheduling, and engagement automation"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-400" />,
      name: "Content Creation",
      count: 56,
      description: "Writing, summarization, and document generation"
    },
    {
      icon: <Image className="w-6 h-6 text-pink-400" />,
      name: "Media Processing",
      count: 23,
      description: "Image editing, video processing, and media optimization"
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      name: "Data Processing",
      count: 41,
      description: "ETL, data cleaning, and database management"
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      name: "AI Assistants",
      count: 67,
      description: "Virtual assistants, chatbots, and conversational AI"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
          <p className="text-gray-400 text-lg">
            Find the perfect AI agent for your specific needs across various domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    {category.count}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}