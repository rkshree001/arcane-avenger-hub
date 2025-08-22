import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, X, Scroll, Zap, Shield, Wand2 } from 'lucide-react';

interface Notification {
  id: string;
  type: 'magical' | 'superhero' | 'quest' | 'achievement';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'magical',
      title: 'New Spell Unlocked!',
      message: 'You have mastered the Patronus Charm. Well done, wizard!',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isRead: false
    },
    {
      id: '2',
      type: 'superhero',
      title: 'Mission Alert',
      message: 'Nick Fury needs your assistance in New York. Suit up!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: false
    },
    {
      id: '3',
      type: 'quest',
      title: 'Daily Quest Complete',
      message: 'You have completed today\'s Herbology challenge. +50 XP earned!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isRead: true
    },
    {
      id: '4',
      type: 'achievement',
      title: 'Achievement Unlocked',
      message: 'Master Duelist - Win 10 magical duels in a row!',
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      isRead: true
    }
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'magical': return <Scroll className="h-5 w-5 text-primary" />;
      case 'superhero': return <Shield className="h-5 w-5 text-hero-blue" />;
      case 'quest': return <Wand2 className="h-5 w-5 text-magic-green" />;
      case 'achievement': return <Zap className="h-5 w-5 text-accent" />;
      default: return <Bell className="h-5 w-5" />;
    }
  };

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'magical': return 'border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent';
      case 'superhero': return 'border-l-4 border-hero-blue bg-gradient-to-r from-hero-blue/10 to-transparent';
      case 'quest': return 'border-l-4 border-magic-green bg-gradient-to-r from-magic-green/10 to-transparent';
      case 'achievement': return 'border-l-4 border-accent bg-gradient-to-r from-accent/10 to-transparent';
      default: return 'border-l-4 border-muted';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative magical-glow"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-accent hover:bg-accent">
            {unreadCount}
          </Badge>
        )}
      </Button>

      {showNotifications && (
        <Card className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto z-50 magic-card">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Notifications</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-muted-foreground">
                No notifications yet
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-muted/50 transition-colors ${getNotificationStyle(notification.type)} ${!notification.isRead ? 'bg-muted/20' : ''}`}
                  onClick={() => !notification.isRead && markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium text-sm ${!notification.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification.id);
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">
                          {formatTime(notification.timestamp)}
                        </span>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default NotificationSystem;