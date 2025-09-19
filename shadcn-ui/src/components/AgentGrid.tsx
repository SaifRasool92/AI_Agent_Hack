import AgentCard from './AgentCard';

const agents = [
  {
    name: "SEO Optimizer",
    description: "Optimizes content for search engines",
    executionCost: "0.7 SOL/execution",
    runs: "100+ runs",
    uptime: "99.9%",
    walletAddress: "@wallet_002"
  },
  {
    name: "Code Reviewer",
    description: "Reviews code and suggests improvements",
    executionCost: "1.5 SOL/execution", 
    runs: "100+ runs",
    uptime: "99.9%",
    walletAddress: "@wallet_001"
  },
  {
    name: "Data Analyzer Pro",
    description: "Analyzes datasets and creates visualizations",
    executionCost: "1.8 SOL/execution",
    runs: "100+ runs", 
    uptime: "99.9%",
    walletAddress: "@wallet_456"
  },
  {
    name: "Social Media Assistant",
    description: "Schedules & manages social media posts",
    executionCost: "0.5 SOL/execution",
    runs: "100+ runs",
    uptime: "99.9%", 
    walletAddress: "@wallet_123"
  },
  {
    name: "Web Summarizer Pro",
    description: "Summarizes any page or article into key points",
    executionCost: "0.8 SOL/execution",
    runs: "100+ runs",
    uptime: "99.9%",
    walletAddress: "@wallet_321"
  },
  {
    name: "Image Generator AI",
    description: "Creates stunning images from text descriptions",
    executionCost: "2.1 SOL/execution",
    runs: "50+ runs",
    uptime: "99.8%",
    walletAddress: "@wallet_789"
  }
];

export default function AgentGrid() {
  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Featured AI Agents</h2>
          <p className="text-gray-400">Discover intelligent agents that work while you sleep. Powered by blockchain and cutting-edge AI.</p>
          <p className="text-gray-400 text-sm mt-1">No code required. Instant results.</p>
        </div>
        
        {/* Grid Layout - 3 agents per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              name={agent.name}
              description={agent.description}
              executionCost={agent.executionCost}
              runs={agent.runs}
              uptime={agent.uptime}
              walletAddress={agent.walletAddress}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <span>🔗 Built with</span>
            <span className="text-red-400">❤️</span>
            <span>using Solana + AI + Coral Protocol</span>
          </p>
        </div>
      </div>
    </div>
  );
}