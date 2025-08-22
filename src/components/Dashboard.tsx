import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Wand2, 
  Shield, 
  Zap, 
  BookOpen, 
  Trophy, 
  Users, 
  Settings,
  Home,
  Scroll,
  Swords,
  User,
  Menu,
  Sparkles,
  Clock,
  Bell,
  Search
} from 'lucide-react';
import Sidebar from './Sidebar';
import SpellsLibrary from './SpellsLibrary';
import QuestsModule from './QuestsModule';
import HouseTeamModule from './HouseTeamModule';
import EnhancedTrainingModule from './EnhancedTrainingModule';
import LeaderboardModule from './LeaderboardModule';
import GuildModule from './GuildModule';
import ProfileModule from './ProfileModule';
import HarryPotterModule from './HarryPotterModule';
import MarvelModule from './MarvelModule';
import NewsSection from './NewsSection';
import WeatherWidget from './WeatherWidget';
import ActivityFeed from './ActivityFeed';
import NotificationSystem from './NotificationSystem';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickAccessCards = [
    {
      title: 'Profile',
      description: 'Manage your wizard and superhero identity',
      icon: User,
      color: 'from-primary to-accent',
      module: 'profile'
    },
    {
      title: 'Spells & Powers',
      description: 'Master magical spells and superhero abilities',
      icon: Wand2,
      color: 'from-primary to-accent',
      module: 'spells'
    },
    {
      title: 'Quests & Missions',
      description: 'Embark on legendary adventures',
      icon: Scroll,
      color: 'from-hero-blue to-magic-green',
      module: 'quests'
    },
    {
      title: 'House & Team',
      description: 'Discover your magical house and hero team',
      icon: Shield,
      color: 'from-accent to-destructive',
      module: 'sorting'
    },
    {
      title: 'Training Arena',
      description: 'Practice spells and powers',
      icon: Swords,
      color: 'from-destructive to-hero-blue',
      module: 'training'
    },
    {
      title: 'Leaderboard',
      description: 'See top wizards and heroes',
      icon: Trophy,
      color: 'from-magic-green to-primary',
      module: 'leaderboard'
    },
    {
      title: 'Guild Hall',
      description: 'Connect with other heroes',
      icon: Users,
      color: 'from-primary to-hero-blue',
      module: 'guild'
    },
    {
      title: 'Harry Potter',
      description: 'Explore the wizarding world',
      icon: BookOpen,
      color: 'from-primary to-magic-green',
      module: 'harry-potter'
    },
    {
      title: 'Marvel Heroes',
      description: 'Discover superhero adventures',
      icon: Zap,
      color: 'from-hero-blue to-accent',
      module: 'marvel'
    }
  ];

  const renderContent = () => {
    switch (activeModule) {
      case 'spells':
        return <SpellsLibrary />;
      case 'quests':
        return <QuestsModule />;
      case 'sorting':
        return <HouseTeamModule />;
      case 'training':
        return <EnhancedTrainingModule />;
      case 'leaderboard':
        return <LeaderboardModule />;
      case 'guild':
        return <GuildModule />;
      case 'profile':
        return <ProfileModule />;
      case 'harry-potter':
        return <HarryPotterModule />;
      case 'marvel':
        return <MarvelModule />;
      case 'home':
      default:
        return (
          <div className="space-y-6 lg:space-y-8">
            {/* Top Bar with Search and Notifications */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <SearchBar />
              <div className="flex items-center gap-2">
                <NotificationSystem />
                <Button variant="ghost" size="icon" className="magical-glow">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Enhanced Welcome Section */}
            <div className="magic-card particles">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 border-primary magical-glow levitate">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xl sm:text-2xl font-bold">
                    MH
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-glow">
                    Welcome back, Magical Hero!
                  </h1>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    Ready for your next legendary adventure?
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    <Badge variant="outline" className="border-primary text-primary shimmer">
                      <Wand2 className="h-3 w-3 mr-1" />
                      Level 42 Wizard
                    </Badge>
                    <Badge variant="outline" className="border-hero-blue text-hero-blue heroic-pulse">
                      <Shield className="h-3 w-3 mr-1" />
                      Avenger
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      <Clock className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:ml-auto">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Bell className="h-3 w-3 mr-1" />
                    3 New
                  </Button>
                  <Button size="sm" className="btn-magical text-xs">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Daily Bonus
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg hover-lift">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Spells Mastered</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg hover-lift">
                  <div className="text-2xl font-bold text-accent">89</div>
                  <div className="text-sm text-muted-foreground">Missions Complete</div>
                </div>
                <div className="text-center p-4 bg-hero-blue/10 rounded-lg hover-lift">
                  <div className="text-2xl font-bold text-hero-blue">156</div>
                  <div className="text-sm text-muted-foreground">Heroes Saved</div>
                </div>
                <div className="text-center p-4 bg-magic-green/10 rounded-lg hover-lift">
                  <div className="text-2xl font-bold text-magic-green">42</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-accent shimmer" />
                Quick Access Portal
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {quickAccessCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <Card 
                      key={card.title}
                      className="p-4 lg:p-6 magic-card cursor-pointer group hover-lift"
                      onClick={() => setActiveModule(card.module)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 magical-glow`}>
                        <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                      <p className="text-muted-foreground text-xs lg:text-sm">{card.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Info Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <NewsSection />
              </div>
              <div className="space-y-6">
                <WeatherWidget />
                <ActivityFeed />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      </div>
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Magical Heroes
          </h1>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <Sidebar 
                activeModule={activeModule} 
                setActiveModule={(module) => {
                  setActiveModule(module);
                  setMobileMenuOpen(false);
                }}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <main className="flex-1 w-full p-4 lg:p-6 lg:ml-72 pt-20 lg:pt-6 overflow-x-hidden overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;