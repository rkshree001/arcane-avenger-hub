import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Scroll, 
  Clock, 
  Star, 
  Trophy, 
  Zap, 
  Shield, 
  Sword,
  Crown,
  Target,
  CheckCircle
} from 'lucide-react';

const QuestsModule = () => {
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null);

  const quests = [
    {
      id: 'defeat-voldemort',
      title: 'Defeat the Dark Lord',
      description: 'Face Voldemort in the final battle for the wizarding world',
      type: 'Main Quest',
      difficulty: 'Legendary',
      progress: 75,
      timeRemaining: '2 days',
      rewards: ['1000 XP', 'Elder Wand Fragment', 'Hero Badge'],
      status: 'active',
      icon: Crown,
      bgColor: 'from-destructive to-red-600'
    },
    {
      id: 'stop-loki',
      title: 'Stop Loki\'s Invasion',
      description: 'Prevent Loki from conquering Midgard with the Chitauri army',
      type: 'Main Quest',
      difficulty: 'Epic',
      progress: 60,
      timeRemaining: '4 hours',
      rewards: ['800 XP', 'Tesseract Shard', 'Avenger Status'],
      status: 'active',
      icon: Shield,
      bgColor: 'from-hero-blue to-blue-600'
    },
    {
      id: 'potions-master',
      title: 'Potions Master Challenge',
      description: 'Brew 10 perfect potions without any mistakes',
      type: 'Daily Quest',
      difficulty: 'Rare',
      progress: 30,
      timeRemaining: '18 hours',
      rewards: ['200 XP', 'Rare Ingredients', 'Potions Badge'],
      status: 'active',
      icon: Zap,
      bgColor: 'from-magic-green to-green-600'
    },
    {
      id: 'training-complete',
      title: 'Complete Training Course',
      description: 'Master basic spells and combat techniques',
      type: 'Tutorial',
      difficulty: 'Common',
      progress: 100,
      timeRemaining: 'Complete',
      rewards: ['100 XP', 'Training Certificate'],
      status: 'completed',
      icon: CheckCircle,
      bgColor: 'from-muted to-muted-foreground'
    },
    {
      id: 'artifact-hunt',
      title: 'Hunt for Ancient Artifacts',
      description: 'Discover 5 magical artifacts hidden across the realm',
      type: 'Side Quest',
      difficulty: 'Uncommon',
      progress: 0,
      timeRemaining: '7 days',
      rewards: ['400 XP', 'Magical Artifacts', 'Explorer Badge'],
      status: 'available',
      icon: Target,
      bgColor: 'from-accent to-orange-600'
    },
    {
      id: 'team-mission',
      title: 'Assemble Your Team',
      description: 'Form a team of 5 heroes for multiplayer missions',
      type: 'Social Quest',
      difficulty: 'Rare',
      progress: 40,
      timeRemaining: '3 days',
      rewards: ['300 XP', 'Team Leader Badge', 'Special Emotes'],
      status: 'active',
      icon: Trophy,
      bgColor: 'from-primary to-yellow-600'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Common': return 'bg-muted text-muted-foreground';
      case 'Uncommon': return 'bg-magic-green/20 text-magic-green border-magic-green';
      case 'Rare': return 'bg-hero-blue/20 text-hero-blue border-hero-blue';
      case 'Epic': return 'bg-accent/20 text-accent border-accent';
      case 'Legendary': return 'bg-primary/20 text-primary border-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-hero-blue/20 text-hero-blue';
      case 'completed': return 'bg-magic-green/20 text-magic-green';
      case 'available': return 'bg-accent/20 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Scroll className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Quests & Missions
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Embark on legendary adventures across magical and heroic realms
        </p>
      </div>

      {/* Quest Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Active Quests</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-magic-green">47</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-hero-blue">8,240</div>
            <div className="text-sm text-muted-foreground">Total XP</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">15</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </div>
        </Card>
      </div>

      {/* Quests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quests.map((quest) => {
          const Icon = quest.icon;
          const isSelected = selectedQuest === quest.id;
          
          return (
            <Card 
              key={quest.id}
              className={`p-6 magic-card cursor-pointer transition-all duration-300 ${
                isSelected ? 'scale-105 magical-glow' : ''
              }`}
              onClick={() => setSelectedQuest(isSelected ? null : quest.id)}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${quest.bgColor} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{quest.title}</h3>
                      <p className="text-sm text-muted-foreground">{quest.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getDifficultyColor(quest.difficulty)}>
                      {quest.difficulty}
                    </Badge>
                    <Badge className={getStatusColor(quest.status)}>
                      {quest.status}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{quest.description}</p>

                {/* Progress */}
                {quest.status !== 'available' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{quest.progress}%</span>
                    </div>
                    <Progress value={quest.progress} className="h-2" />
                  </div>
                )}

                {/* Time Remaining */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{quest.timeRemaining}</span>
                </div>

                {/* Rewards */}
                {isSelected && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-semibold text-sm">Rewards:</h4>
                    <div className="flex flex-wrap gap-2">
                      {quest.rewards.map((reward, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {reward}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      {quest.status === 'available' && (
                        <Button size="sm" className="btn-magical">
                          Start Quest
                        </Button>
                      )}
                      {quest.status === 'active' && (
                        <>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="secondary">
                            Pause
                          </Button>
                        </>
                      )}
                      {quest.status === 'completed' && (
                        <Button size="sm" variant="secondary" disabled>
                          Completed
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default QuestsModule;