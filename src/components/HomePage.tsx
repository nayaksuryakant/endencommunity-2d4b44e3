import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Plus } from 'lucide-react';

interface HomePageProps {
  onStoryClick: (story: any) => void;
}

const HomePage = ({ onStoryClick }: HomePageProps) => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());

  const stories = [
    { id: 'user', name: 'Your Story', image: null, isUser: true },
    { id: '1', name: 'TechFlow Café', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100&h=100&fit=crop&crop=center' },
    { id: '2', name: 'Bistro Digital', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop&crop=center' },
    { id: '3', name: 'Green Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&crop=center' },
    { id: '4', name: 'Urban Shop', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center' },
    { id: '5', name: 'Cozy Corner', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=100&h=100&fit=crop&crop=center' }
  ];

  const posts = [
    {
      id: '1',
      user: { name: 'TechFlow Café', avatar: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=50&h=50&fit=crop&crop=center', verified: true },
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop&crop=center',
      caption: 'New coffee blend is here! 🚀 Boosting productivity one cup at a time. Our monthly growth: 23% ↗️ #TechStartup #Coffee',
      likes: 234,
      comments: 18,
      timeAgo: '2h'
    },
    {
      id: '2',
      user: { name: 'Bistro Digital', avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=50&h=50&fit=crop&crop=center', verified: true },
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&crop=center',
      caption: 'Celebrating our 50th customer today! 🎉 Thank you for supporting local business. Revenue up 45% this quarter 📈',
      likes: 189,
      comments: 32,
      timeAgo: '4h'
    },
    {
      id: '3',
      user: { name: 'Green Bakery', avatar: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop&crop=center', verified: false },
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&crop=center',
      caption: 'Fresh organic bread every morning 🥖 Expanding to 3 new locations next month! Growth: 67% YoY 🌱',
      likes: 156,
      comments: 24,
      timeAgo: '6h'
    }
  ];

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId: string) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="pb-4">
      {/* Stories */}
      <div className="flex space-x-4 p-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div 
              className={`w-16 h-16 rounded-full p-0.5 cursor-pointer ${
                story.isUser ? 'bg-gray-300' : 'gradient-purple'
              }`}
              onClick={() => !story.isUser && onStoryClick(story)}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                {story.isUser ? (
                  <Plus className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <p className="text-xs mt-1 truncate w-16">{story.name}</p>
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-background">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4 pb-3">
              <div className="flex items-center space-x-3">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-sm">{post.user.name}</span>
                    {post.user.verified && (
                      <div className="w-4 h-4 rounded-full gradient-blue flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-accent rounded-full">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Post Image */}
            <div className="aspect-square bg-muted">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Heart 
                      className={`w-6 h-6 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <Send className="w-6 h-6" />
                  </button>
                </div>
                <button 
                  onClick={() => handleSave(post.id)}
                  className="hover:opacity-70 transition-opacity"
                >
                  <Bookmark 
                    className={`w-6 h-6 ${savedPosts.has(post.id) ? 'fill-current' : ''}`} 
                  />
                </button>
              </div>

              {/* Likes Count */}
              <p className="font-semibold text-sm mb-2">
                {post.likes + (likedPosts.has(post.id) ? 1 : 0)} likes
              </p>

              {/* Caption */}
              <div className="text-sm">
                <span className="font-semibold">{post.user.name}</span>
                <span className="ml-2">{post.caption}</span>
              </div>

              {/* View Comments */}
              <button className="text-sm text-muted-foreground mt-2 hover:opacity-70">
                View all {post.comments} comments
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;