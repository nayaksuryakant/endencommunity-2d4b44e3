import { useState } from 'react';
import { ArrowLeft, Search, Send, Phone, Video, Info } from 'lucide-react';

interface MessagingPageProps {
  onBack: () => void;
}

const MessagingPage = ({ onBack }: MessagingPageProps) => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: '1',
      name: 'TechFlow Café',
      avatar: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=50&h=50&fit=crop&crop=center',
      lastMessage: 'Great collaboration opportunity! 🚀',
      time: '2m',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Sarah Capital (Investor)',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=center',
      lastMessage: 'I\'d like to discuss your business plan',
      time: '1h',
      unread: 0,
      online: false
    },
    {
      id: '3',
      name: 'Green Bakery',
      avatar: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=50&h=50&fit=crop&crop=center',
      lastMessage: 'Thanks for the growth tips!',
      time: '3h',
      unread: 1,
      online: true
    },
    {
      id: '4',
      name: 'Mike Ventures (Investor)',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=center',
      lastMessage: 'Your revenue growth looks impressive',
      time: '1d',
      unread: 0,
      online: false
    },
    {
      id: '5',
      name: 'Bistro Digital',
      avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=50&h=50&fit=crop&crop=center',
      lastMessage: 'Let\'s connect for a partnership!',
      time: '2d',
      unread: 0,
      online: true
    }
  ];

  const messages = [
    { id: '1', sender: 'TechFlow Café', message: 'Hey! I saw your growth metrics. Amazing work! 🎉', time: '2:45 PM', isMe: false },
    { id: '2', sender: 'Me', message: 'Thank you! It\'s been quite a journey', time: '2:47 PM', isMe: true },
    { id: '3', sender: 'TechFlow Café', message: 'Would love to collaborate on some marketing initiatives', time: '2:48 PM', isMe: false },
    { id: '4', sender: 'TechFlow Café', message: 'Great collaboration opportunity! 🚀', time: '2:50 PM', isMe: false },
    { id: '5', sender: 'Me', message: 'That sounds interesting! Let\'s discuss this further', time: '2:52 PM', isMe: true }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending here
      setMessage('');
    }
  };

  if (selectedChat) {
    const currentChat = chats.find(chat => chat.id === selectedChat);
    return (
      <div className="h-screen bg-background flex flex-col max-w-md mx-auto">
        {/* Chat Header */}
        <div className="bg-background border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSelectedChat(null)}
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={currentChat?.avatar} 
                  alt={currentChat?.name}
                  className="w-10 h-10 rounded-full"
                />
                {currentChat?.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{currentChat?.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {currentChat?.online ? 'Online' : 'Last seen 1h ago'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.isMe 
                  ? 'gradient-purple text-white' 
                  : 'bg-muted text-foreground'
              }`}>
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isMe ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-background border-t border-border px-4 py-3">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              className="p-2 rounded-full gradient-purple text-white hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background max-w-md mx-auto">
      {/* Header */}
      <div className="bg-background border-b border-border px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold">Messages</h2>
          <div></div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-accent cursor-pointer transition-colors"
          >
            <div className="relative">
              <img 
                src={chat.avatar} 
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <div className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagingPage;