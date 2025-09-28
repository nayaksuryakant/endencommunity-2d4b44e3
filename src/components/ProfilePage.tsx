import { useState } from 'react';
import { Settings, Grid, Bookmark, Tag, MoreHorizontal, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    { id: '1', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=200&fit=crop', likes: 45 },
    { id: '2', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=200&h=200&fit=crop', likes: 67 },
    { id: '3', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop', likes: 89 }
  ];

  const businessMetrics = [
    { label: 'Monthly Revenue', value: '₹1.2L', change: '+23%', icon: DollarSign, color: 'text-green-500' },
    { label: 'Customers', value: '456', change: '+15%', icon: Users, color: 'text-blue-500' },
    { label: 'Growth Rate', value: '34%', change: '+8%', icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Market Reach', value: '2.3K', change: '+45%', icon: Target, color: 'text-orange-500' }
  ];

  return (
    <div className="pb-4">
      {/* Profile Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full gradient-purple p-0.5">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">
                  Y
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Your Business</h2>
              <p className="text-muted-foreground text-sm">@yourbusiness</p>
              <p className="text-sm mt-1">Coffee Shop • Startup Enthusiast ☕</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-around text-center mb-4">
          <div>
            <div className="font-bold text-lg">0</div>
            <div className="text-sm text-muted-foreground">Posts</div>
          </div>
          <div>
            <div className="font-bold text-lg">0</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div>
            <div className="font-bold text-lg">0</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full gradient-purple text-white font-semibold">
            Share Your First Post
          </Button>
        </div>
      </div>

      {/* Business Dashboard */}
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span>Your Business Dashboard</span>
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {businessMetrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-4 h-4 ${metric.color}`} />
                <span className={`text-xs font-medium ${metric.color}`}>{metric.change}</span>
              </div>
              <div className="text-lg font-bold">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>View Analytics</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Find Investors</span>
          </Button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex-1 py-3 flex items-center justify-center space-x-2 transition-colors ${
            activeTab === 'posts'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Grid className="w-4 h-4" />
          <span className="text-sm font-medium">Posts</span>
        </button>
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex-1 py-3 flex items-center justify-center space-x-2 transition-colors ${
            activeTab === 'saved'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span className="text-sm font-medium">Saved</span>
        </button>
        <button
          onClick={() => setActiveTab('tagged')}
          className={`flex-1 py-3 flex items-center justify-center space-x-2 transition-colors ${
            activeTab === 'tagged'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Tag className="w-4 h-4" />
          <span className="text-sm font-medium">Tagged</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'posts' && (
          <div>
            {posts.length > 0 ? (
              <div className="grid grid-cols-3 gap-1">
                {posts.map((post) => (
                  <div key={post.id} className="aspect-square relative group">
                    <img
                      src={post.image}
                      alt={`Post ${post.id}`}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-sm flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {post.likes} likes
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted mx-auto mb-4 flex items-center justify-center">
                  <Grid className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Share Your First Post</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  When you share photos and videos, they'll appear on your profile.
                </p>
                <Button variant="ghost" className="text-primary font-semibold">
                  Share your first post
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted mx-auto mb-4 flex items-center justify-center">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No Saved Posts</h3>
            <p className="text-muted-foreground text-sm">
              Save posts you want to see again.
            </p>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted mx-auto mb-4 flex items-center justify-center">
              <Tag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No Tagged Posts</h3>
            <p className="text-muted-foreground text-sm">
              When people tag your business, you'll see the posts here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;