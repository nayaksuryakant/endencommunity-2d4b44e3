import { useState, useEffect } from 'react';
import { X, Heart, Send, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

interface StoryViewerProps {
  story: any;
  onClose: () => void;
}

const StoryViewer = ({ story, onClose }: StoryViewerProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Mock story content for each business
  const storyContent = {
    '1': [ // TechFlow Café
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=600&fit=crop',
        text: 'New espresso machine arrived! ☕',
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=600&fit=crop',
        text: 'Monthly revenue: ₹2.5L (+67% growth) 📈',
        timestamp: new Date()
      },
      {
        id: '3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=600&fit=crop',
        text: 'Team meeting with our growth advisors 🚀',
        timestamp: new Date()
      }
    ],
    '2': [ // Bistro Digital
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600&fit=crop',
        text: 'Fresh ingredients for today\'s special! 🥗',
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop',
        text: 'Customer satisfaction: 98% ⭐',
        timestamp: new Date()
      }
    ],
    '3': [ // Green Bakery
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=600&fit=crop',
        text: 'Fresh bread every morning! 🥖',
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1586985289906-406988974504?w=400&h=600&fit=crop',
        text: 'Expanding to 3 new locations 🌱',
        timestamp: new Date()
      }
    ],
    '4': [ // Urban Shop
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
        text: 'New collection arrived! 👕',
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=600&fit=crop',
        text: 'Sales up 28% this month 📊',
        timestamp: new Date()
      }
    ],
    '5': [ // Cozy Corner
      {
        id: '1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=600&fit=crop',
        text: 'Perfect study corner ☕📚',
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
        text: 'Customer loyalty program launched! 🎉',
        timestamp: new Date()
      }
    ]
  };

  const stories = storyContent[story.id as keyof typeof storyContent] || [];
  const currentStory = stories[currentStoryIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prev => prev + 1);
            return 0;
          } else {
            onClose();
            return 0;
          }
        }
        return prev + 1;
      });
    }, 50); // 5 seconds per story (100 * 50ms = 5000ms)

    return () => clearInterval(timer);
  }, [currentStoryIndex, stories.length, onClose]);

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    }
  };

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md h-screen bg-black overflow-hidden">
        {/* Progress bars */}
        <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
          {stories.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                style={{ 
                  width: index < currentStoryIndex ? '100%' : 
                         index === currentStoryIndex ? `${progress}%` : '0%' 
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-12 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={story.image} 
              alt={story.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div className="text-white">
              <p className="font-semibold text-sm">{story.name}</p>
              <p className="text-xs opacity-70">2h ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-white hover:opacity-70">
              <MoreHorizontal className="w-6 h-6" />
            </button>
            <button onClick={onClose} className="text-white hover:opacity-70">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Story Content */}
        <div className="relative w-full h-full">
          <img 
            src={currentStory.content} 
            alt="Story content"
            className="w-full h-full object-cover"
          />
          
          {/* Story Text Overlay */}
          {currentStory.text && (
            <div className="absolute bottom-32 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm font-medium">{currentStory.text}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation areas */}
        <button 
          onClick={prevStory}
          className="absolute left-0 top-0 w-1/3 h-full z-10"
          disabled={currentStoryIndex === 0}
        />
        <button 
          onClick={nextStory}
          className="absolute right-0 top-0 w-1/3 h-full z-10"
        />

        {/* Story Actions */}
        <div className="absolute bottom-6 left-4 right-4 z-20">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Send message"
              className="flex-1 bg-transparent border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white/50"
            />
            <button className="text-white hover:opacity-70">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-white hover:opacity-70">
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation indicators */}
        {currentStoryIndex > 0 && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
            <ChevronLeft className="w-8 h-8" />
          </div>
        )}
        {currentStoryIndex < stories.length - 1 && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
            <ChevronRight className="w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryViewer;