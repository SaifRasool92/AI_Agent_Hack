import Header from '@/components/Header';
import AgentGrid from '@/components/AgentGrid';
import StatsSection from '@/components/StatsSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Header />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-6 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            AI Agents That Transform Your Workflow
          </h2>
          <p className="text-blue-100 text-lg">
            Discover intelligent agents that work while you sleep. Powered by blockchain and cutting-edge AI.
          </p>
          <p className="text-blue-200 text-sm mt-2">
            No code required. Instant results. Pay per execution.
          </p>
        </div>
      </div>
      
      <main>
        <AgentGrid />
        <StatsSection />
        <CategorySection />
      </main>
      
      <Footer />
    </div>
  );
}