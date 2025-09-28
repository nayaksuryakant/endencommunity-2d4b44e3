import { TrendingUp, TrendingDown, Award, Target, DollarSign, Users, Star } from 'lucide-react';

const RankingPage = () => {
  const rankings = [
    {
      id: 1,
      rank: 1,
      name: 'TechFlow Café',
      type: 'Coffee Shop',
      avatar: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=50&h=50&fit=crop&crop=center',
      growth: '+67%',
      revenue: '₹2.5L',
      score: 98,
      trend: 'up',
      customers: '1.2K'
    },
    {
      id: 2,
      rank: 2,
      name: 'Green Bakery',
      type: 'Bakery',
      avatar: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop&crop=center',
      growth: '+45%',
      revenue: '₹1.8L',
      score: 95,
      trend: 'up',
      customers: '890'
    },
    {
      id: 3,
      rank: 3,
      name: 'Bistro Digital',
      type: 'Restaurant',
      avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=50&h=50&fit=crop&crop=center',
      growth: '+34%',
      revenue: '₹1.5L',
      score: 92,
      trend: 'up',
      customers: '756'
    },
    {
      id: 4,
      rank: 4,
      name: 'Urban Shop',
      type: 'Retail Store',
      avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=50&h=50&fit=crop&crop=center',
      growth: '+28%',
      revenue: '₹1.2L',
      score: 88,
      trend: 'up',
      customers: '623'
    },
    {
      id: 5,
      rank: 5,
      name: 'Cozy Corner',
      type: 'Café',
      avatar: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=50&h=50&fit=crop&crop=center',
      growth: '+23%',
      revenue: '₹95K',
      score: 85,
      trend: 'up',
      customers: '445'
    }
  ];

  const marketStats = [
    { label: 'Total MSME Growth', value: '+42%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Active Startups', value: '1,234', icon: Target, color: 'text-blue-500' },
    { label: 'Monthly Revenue', value: '₹12.5Cr', icon: DollarSign, color: 'text-purple-500' },
    { label: 'Customer Base', value: '45K+', icon: Users, color: 'text-orange-500' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">🥇</div>;
      case 2:
        return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center text-white font-bold text-sm">🥈</div>;
      case 3:
        return <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold text-sm">🥉</div>;
      default:
        return <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-sm">{rank}</div>;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gradient mb-2">Growth Rankings</h2>
        <p className="text-muted-foreground">Top performing MSME startups this month</p>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-2 gap-4">
        {marketStats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Growth Chart Preview */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Market Trend</h3>
          <TrendingUp className="w-5 h-5 text-green-500" />
        </div>
        <div className="h-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/20 rounded-lg flex items-end justify-between p-4">
          {[65, 78, 82, 89, 95, 88, 92].map((height, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-t from-primary to-secondary w-8 rounded-t transition-all duration-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>

      {/* Rankings List */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg flex items-center space-x-2">
          <Award className="w-5 h-5 text-primary" />
          <span>Top Performers</span>
        </h3>
        
        {rankings.map((business) => (
          <div 
            key={business.id} 
            className={`bg-card border border-border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${
              business.rank <= 3 ? 'ring-2 ring-primary/20' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              {/* Rank */}
              <div className="flex-shrink-0">
                {getRankIcon(business.rank)}
              </div>

              {/* Business Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <img 
                    src={business.avatar} 
                    alt={business.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-sm truncate">{business.name}</h4>
                    <p className="text-xs text-muted-foreground">{business.type}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="text-right space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold text-green-600">{business.growth}</span>
                  <TrendingUp className="w-3 h-3 text-green-500" />
                </div>
                <div className="text-xs text-muted-foreground">{business.revenue}</div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{business.customers}</span>
                </div>
              </div>

              {/* Score */}
              <div className="flex-shrink-0 text-center">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span className="font-bold text-sm">{business.score}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Growth Tips */}
      <div className="bg-accent rounded-lg p-4 space-y-2">
        <h3 className="font-semibold text-accent-foreground">💡 Growth Tips</h3>
        <ul className="text-sm text-accent-foreground/80 space-y-1">
          <li>• Engage regularly with your audience</li>
          <li>• Share authentic business updates</li>
          <li>• Connect with investors and mentors</li>
          <li>• Track and share your key metrics</li>
        </ul>
      </div>
    </div>
  );
};

export default RankingPage;