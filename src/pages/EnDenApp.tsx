import { useState } from 'react';
import { Home, Search, Plus, BarChart3, User, Heart, MessageCircle, Send } from 'lucide-react';
import HomePage from '@/components/HomePage';
import SearchPage from '@/components/SearchPage';
import CreatePage from '@/components/CreatePage';
import RankingPage from '@/components/RankingPage';
import ProfilePage from '@/components/ProfilePage';
import MessagingPage from '@/components/MessagingPage';
import NotificationsPage from '@/components/NotificationsPage';
import StoryViewer from '@/components/StoryViewer';

const EnDenApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showMessaging, setShowMessaging] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showStoryViewer, setShowStoryViewer] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);

  const handleStoryClick = (story: any) => {
    setCurrentStory(story);
    setShowStoryViewer(true);
  };

  const handleCloseStory = () => {
    setShowStoryViewer(false);
    setCurrentStory(null);
  };

  if (showMessaging) {
    return <MessagingPage onBack={() => setShowMessaging(false)} />;
  }

  if (showNotifications) {
    return <NotificationsPage onBack={() => setShowNotifications(false)} />;
  }

  if (showStoryViewer && currentStory) {
    return <StoryViewer story={currentStory} onClose={handleCloseStory} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onStoryClick={handleStoryClick} />;
      case 'search':
        return <SearchPage />;
      case 'create':
        return <CreatePage />;
      case 'ranking':
        return <RankingPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onStoryClick={handleStoryClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">EnDen</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowNotifications(true)}
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setShowMessaging(true)}
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto min-h-[calc(100vh-140px)] bg-background">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 z-50 bg-background border-t border-border px-4 py-2">
        <div className="max-w-md mx-auto flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-3 rounded-full transition-colors ${
              activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Home className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`p-3 rounded-full transition-colors ${
              activeTab === 'search' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`p-3 rounded-full transition-colors ${
              activeTab === 'create' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Plus className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`p-3 rounded-full transition-colors ${
              activeTab === 'ranking' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <BarChart3 className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`p-3 rounded-full transition-colors ${
              activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnDenApp;