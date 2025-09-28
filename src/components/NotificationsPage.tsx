import { ArrowLeft, Heart, MessageCircle, UserPlus, TrendingUp, Award, DollarSign } from 'lucide-react';

interface NotificationsPageProps {
  onBack: () => void;
}

const NotificationsPage = ({ onBack }: NotificationsPageProps) => {
  const notifications = [
    {
      id: '1',
      type: 'like',
      user: 'TechFlow Café',
      avatar: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=50&h=50&fit=crop&crop=center',
      action: 'liked your post',
      time: '2m ago',
      icon: Heart,
      iconColor: 'text-red-500',
      unread: true
    },
    {
      id: '2',
      type: 'investment',
      user: 'Sarah Capital',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=center',
      action: 'is interested in investing in your business',
      time: '15m ago',
      icon: DollarSign,
      iconColor: 'text-green-500',
      unread: true
    },
    {
      id: '3',
      type: 'follow',
      user: 'Green Bakery',
      avatar: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop&crop=center',
      action: 'started following you',
      time: '1h ago',
      icon: UserPlus,
      iconColor: 'text-blue-500',
      unread: true
    },
    {
      id: '4',
      type: 'ranking',
      user: 'EnDen',
      avatar: null,
      action: 'You moved up to #3 in the growth rankings! 🎉',
      time: '2h ago',
      icon: Award,
      iconColor: 'text-yellow-500',
      unread: false
    },
    {
      id: '5',
      type: 'comment',
      user: 'Bistro Digital',
      avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=50&h=50&fit=crop&crop=center',
      action: 'commented on your post: "Great progress!"',
      time: '3h ago',
      icon: MessageCircle,
      iconColor: 'text-purple-500',
      unread: false
    },
    {
      id: '6',
      type: 'growth',
      user: 'EnDen Analytics',
      avatar: null,
      action: 'Your monthly growth increased by 23%',
      time: '1d ago',
      icon: TrendingUp,
      iconColor: 'text-green-500',
      unread: false
    }
  ];

  const getNotificationIcon = (notification: any) => {
    if (notification.avatar) {
      return (
        <div className="relative">
          <img 
            src={notification.avatar} 
            alt={notification.user}
            className="w-10 h-10 rounded-full"
          />
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-background flex items-center justify-center ${notification.iconColor}`}>
            <notification.icon className="w-3 h-3" />
          </div>
        </div>
      );
    }
    
    return (
      <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${notification.iconColor}`}>
        <notification.icon className="w-5 h-5" />
      </div>
    );
  };

  return (
    <div className="h-screen bg-background max-w-md mx-auto">
      {/* Header */}
      <div className="bg-background border-b border-border px-4 py-3 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="text-primary text-sm font-medium hover:opacity-70">
          Mark all read
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`flex items-start space-x-3 px-4 py-3 hover:bg-accent cursor-pointer transition-colors ${
              notification.unread ? 'bg-accent/50' : ''
            }`}
          >
            {/* Icon/Avatar */}
            <div className="flex-shrink-0 mt-1">
              {getNotificationIcon(notification)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{notification.user}</span>{' '}
                    <span className="text-muted-foreground">{notification.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {notification.unread && (
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-2 flex-shrink-0"></div>
                )}
              </div>

              {/* Special content for certain notification types */}
              {notification.type === 'investment' && (
                <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-green-700">💰 Investment opportunity available</p>
                </div>
              )}

              {notification.type === 'ranking' && (
                <div className="mt-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xs text-yellow-700">🏆 Keep up the great work!</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Empty state or load more */}
        <div className="p-4 text-center">
          <p className="text-sm text-muted-foreground">You're all caught up! 🎉</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-background border-t border-border p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center space-x-2 py-2 px-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">View Analytics</span>
          </button>
          <button className="flex items-center justify-center space-x-2 py-2 px-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
            <DollarSign className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">Connect Investors</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;