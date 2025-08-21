import { useState } from 'react';
import { Card } from '@/components/ui/card';
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
  Swords
} from 'lucide-react';
import Sidebar from './Sidebar';
import SpellsLibrary from './SpellsLibrary';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('home');

  const quickAccessCards = [
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
      title: 'Leaderboard',
      description: 'See top wizards and heroes',
      icon: Trophy,
      color: 'from-magic-green to-primary',
      module: 'leaderboard'
    },
    {
      title: 'Training Arena',
      description: 'Practice spells and powers',
      icon: Swords,
      color: 'from-destructive to-hero-blue',
      module: 'training'
    },
    {
      title: 'Guild Hall',
      description: 'Connect with other heroes',
      icon: Users,
      color: 'from-primary to-hero-blue',
      module: 'guild'
    }
  ];

  const renderContent = () => {
    switch (activeModule) {
      case 'spells':
        return <SpellsLibrary />;
      case 'home':
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="magic-card">
              <div className="flex items-center gap-6 mb-6">
                <Avatar className="h-20 w-20 border-2 border-primary magical-glow">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                    MH
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Welcome back, Magical Hero!
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Ready for your next adventure?
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      <Wand2 className="h-3 w-3 mr-1" />
                      Level 42 Wizard
                    </Badge>
                    <Badge variant="outline" className="border-hero-blue text-hero-blue">
                      <Shield className="h-3 w-3 mr-1" />
                      Avenger
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Spells Mastered</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">89</div>
                  <div className="text-sm text-muted-foreground">Missions Complete</div>
                </div>
                <div className="text-center p-4 bg-hero-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-hero-blue">156</div>
                  <div className="text-sm text-muted-foreground">Heroes Saved</div>
                </div>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-accent" />
                Quick Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickAccessCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <Card 
                      key={card.title}
                      className="p-6 magic-card cursor-pointer group"
                      onClick={() => setActiveModule(card.module)}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="flex-1 p-6 ml-64">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;