import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      navigate('/auth');
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-sidebar-background border-r border-sidebar-border magic-card shadow-xl z-30">
      <div className="flex flex-col h-full p-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-sidebar-border">
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
        <div className="mb-8 p-4 bg-sidebar-accent rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-primary">
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                MH
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm text-sidebar-foreground">Magical Hero</div>
              <div className="text-xs text-sidebar-foreground/70">Level 42 Wizard</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? 'default' : 'ghost'}
                className={`w-full justify-start gap-3 h-12 transition-all duration-200 ${
                  isActive 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold magical-glow shadow-md' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
                onClick={() => setActiveModule(item.id)}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-sidebar-primary-foreground' : 'text-sidebar-foreground/70'}`} />
                <span className={`${isActive ? 'text-sidebar-primary-foreground font-semibold' : 'text-sidebar-foreground'}`}>
                  {item.label}
                </span>
              </Button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-sidebar-border space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => setActiveModule('settings')}
          >
            <Settings className="h-5 w-5 text-sidebar-foreground/70" />
            <span>Settings</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 h-12 text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;