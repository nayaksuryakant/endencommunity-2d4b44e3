import { useState } from 'react';
import { Camera, Image, MapPin, Tag, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreatePage = () => {
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    // Here you would handle the actual post creation
    alert('Post created successfully! 🎉');
    setCaption('');
    setLocation('');
    setSelectedImage(null);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gradient mb-2">Share Your Story</h2>
          <p className="text-muted-foreground">Show your business growth to the community</p>
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
          {selectedImage ? (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="w-full aspect-square object-cover rounded-lg"
              />
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setSelectedImage(null)}
              >
                Change
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent transition-colors">
                      <Camera className="w-8 h-8 text-primary" />
                      <span className="text-sm font-medium">Camera</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent transition-colors">
                      <Image className="w-8 h-8 text-secondary" />
                      <span className="text-sm font-medium">Gallery</span>
                    </div>
                  </label>
                </div>
                <p className="text-muted-foreground text-sm">Add photos of your business, products, or achievements</p>
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Tell your story... Share your growth metrics, achievements, or business updates! 📈"
            className="w-full h-24 p-3 border border-input rounded-lg resize-none focus:ring-2 focus:ring-ring focus:border-transparent"
          />
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{caption.length}/500</span>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Tag className="w-4 h-4" />
              <span>Add tags</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Add location"
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Business Metrics */}
        <div className="bg-muted rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-medium">Business Metrics (Optional)</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Monthly Revenue</label>
              <input
                type="text"
                placeholder="₹50,000"
                className="w-full mt-1 p-2 text-sm border border-input rounded focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Growth %</label>
              <input
                type="text"
                placeholder="23%"
                className="w-full mt-1 p-2 text-sm border border-input rounded focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Share with</span>
          </label>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              Startups
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Investors
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Everyone
            </Button>
          </div>
        </div>

        {/* Post Button */}
        <Button 
          onClick={handlePost}
          className="w-full gradient-purple text-white font-semibold py-3 text-lg"
          disabled={!selectedImage && !caption}
        >
          Share Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePage;