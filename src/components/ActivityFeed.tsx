import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Wand2, 
  Shield, 
  Trophy, 
  Star, 
  Users, 
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: "Harry Potter",
      action: "mastered a new spell",
      item: "Expecto Patronum",
      time: "5 minutes ago",
      type: "spell",
      icon: Wand2,
      color: "text-primary"
    },
    {
      id: 2,
      user: "Tony Stark",
      action: "completed mission",
      item: "Save New York",
      time: "12 minutes ago",
      type: "mission",
      icon: Shield,
      color: "text-hero-blue"
    },
    {
      id: 3,
      user: "Hermione Granger",
      action: "achieved rank",
      item: "Potions Master",
      time: "1 hour ago",
      type: "achievement",
      icon: Trophy,
      color: "text-accent"
    },
    {
      id: 4,
      user: "Captain America",
      action: "joined team",
      item: "Avengers Initiative",
      time: "2 hours ago",
      type: "social",
      icon: Users,
      color: "text-magic-green"
    },
    {
      id: 5,
      user: "Luna Lovegood",
      action: "discovered artifact",
      item: "Ancient Rune Stone",
      time: "3 hours ago",
      type: "discovery",
      icon: Star,
      color: "text-primary"
    }
  ];

  return (
    <Card className="p-4 magic-card">
      <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3 group">
              <Avatar className="h-8 w-8 border border-border">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs font-bold">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{activity.user}</span>
                  <Icon className={`h-3 w-3 ${activity.color}`} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {activity.action} <span className="font-medium text-foreground">"{activity.item}"</span>
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-3 w-3 text-muted-foreground hover:text-destructive cursor-pointer" />
                    <MessageCircle className="h-3 w-3 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Share2 className="h-3 w-3 text-muted-foreground hover:text-hero-blue cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ActivityFeed;