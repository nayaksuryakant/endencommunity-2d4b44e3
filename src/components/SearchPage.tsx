import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('startups');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const startupPosts = [
    { id: '1', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=200&fit=crop', user: 'TechFlow Café', type: 'Coffee Shop' },
    { id: '2', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop', user: 'Bistro Digital', type: 'Restaurant' },
    { id: '3', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop', user: 'Green Bakery', type: 'Bakery' },
    { id: '4', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop', user: 'Urban Shop', type: 'Retail' },
    { id: '5', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200&h=200&fit=crop', user: 'Cozy Corner', type: 'Café' },
    { id: '6', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop', user: 'Pizza Palace', type: 'Restaurant' },
    { id: '7', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop', user: 'Fresh Market', type: 'Grocery' },
    { id: '8', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop', user: 'Book Corner', type: 'Bookstore' },
    { id: '9', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', user: 'Fashion Hub', type: 'Clothing' }
  ];

  const investorPosts = [
    { id: '1', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', user: 'John Investor', type: 'Angel Investor' },
    { id: '2', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop', user: 'Sarah Capital', type: 'VC Fund' },
    { id: '3', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', user: 'Mike Ventures', type: 'Seed Investor' },
    { id: '4', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', user: 'Lisa Fund', type: 'Growth Capital' },
    { id: '5', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', user: 'David Partners', type: 'Private Equity' },
    { id: '6', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=200&h=200&fit=crop', user: 'Emma Capital', type: 'Impact Investor' }
  ];

  const currentPosts = activeTab === 'startups' ? startupPosts : investorPosts;

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-6">
        <div 
          className="flex items-center bg-muted rounded-lg px-4 py-3 cursor-pointer"
          onClick={() => setShowSearchInput(!showSearchInput)}
        >
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          {showSearchInput ? (
            <input
              type="text"
              placeholder="Search startups, investors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground"
              autoFocus
            />
          ) : (
            <span className="text-muted-foreground">Search startups, investors...</span>
          )}
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('startups')}
          className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
            activeTab === 'startups'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Startups
        </button>
        <button
          onClick={() => setActiveTab('investors')}
          className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
            activeTab === 'investors'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Investors
        </button>
      </div>

      {/* Grid Feed */}
      <div className="grid grid-cols-3 gap-1">
        {currentPosts.map((post) => (
          <div key={post.id} className="aspect-square relative group cursor-pointer">
            <img
              src={post.image}
              alt={post.user}
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-sm flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-2">
                <p className="font-semibold text-xs">{post.user}</p>
                <p className="text-xs opacity-90">{post.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Suggestions */}
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Trending</h3>
        <div className="space-y-3">
          {[
            { name: 'Coffee Startups', count: '1,234 posts' },
            { name: 'Food Tech', count: '856 posts' },
            { name: 'Retail Innovation', count: '623 posts' },
            { name: 'Local Business', count: '445 posts' },
            { name: 'Growth Hacking', count: '378 posts' }
          ].map((trend, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">#{trend.name}</p>
                <p className="text-sm text-muted-foreground">{trend.count}</p>
              </div>
              <div className="w-2 h-2 rounded-full gradient-purple"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;