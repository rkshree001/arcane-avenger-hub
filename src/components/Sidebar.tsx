import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Home, 
  Wand2, 
  Scroll, 
  Shield, 
  Trophy, 
  Users, 
  Settings,
  LogOut,
  Sparkles,
  Swords,
  User,
  BookOpen,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'spells', label: 'Spells & Powers', icon: Wand2 },
    { id: 'quests', label: 'Quests & Missions', icon: Scroll },
    { id: 'sorting', label: 'House & Team', icon: Shield },
    { id: 'training', label: 'Training Arena', icon: Swords },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'guild', label: 'Guild Hall', icon: Users },
    { id: 'harry-potter', label: 'Harry Potter', icon: BookOpen },
    { id: 'marvel', label: 'Marvel Heroes', icon: Zap },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border magic-card">
      <div className="p-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Magical Heroes
            </h1>
          </div>
        </div>

        {/* User Profile */}
        <div className="mb-8 p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-primary">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                MH
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm">Magical Hero</div>
              <div className="text-xs text-muted-foreground">Level 42 Wizard</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'ghost'}
                className={`w-full justify-start gap-3 transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/50 text-primary-foreground font-semibold magical-glow' 
                    : 'hover:bg-muted/50 text-foreground'
                }`}
                onClick={() => setActiveModule(item.id)}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                <span className={`${isActive ? 'text-primary-foreground font-semibold' : 'text-foreground'}`}>
                  {item.label}
                </span>
              </Button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-6 left-6 right-6 space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 hover:bg-muted/50"
            onClick={() => setActiveModule('settings')}
          >
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span>Settings</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;