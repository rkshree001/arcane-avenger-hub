import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Swords, 
  Target, 
  Zap, 
  Shield, 
  Heart, 
  Star,
  Play,
  Pause,
  RotateCcw,
  Trophy,
  Timer,
  TrendingUp
} from 'lucide-react';

const EnhancedTrainingModule = () => {
  const [activeTraining, setActiveTraining] = useState<string | null>(null);
  const [trainingProgress, setTrainingProgress] = useState<{[key: string]: number}>({
    'spell-combat': 65,
    'defensive-magic': 80,
    'superhero-combat': 45,
    'team-tactics': 70
  });

  const trainingSessions = [
    {
      id: 'spell-combat',
      title: 'Spell Combat Training',
      description: 'Master offensive magical spells and dueling techniques',
      type: 'Magic',
      difficulty: 'Intermediate',
      duration: '30 minutes',
      xpReward: 150,
      icon: Swords,
      color: 'from-primary to-accent',
      skills: ['Expelliarmus', 'Stupefy', 'Protego', 'Counter-jinxes']
    },
    {
      id: 'defensive-magic',
      title: 'Defensive Magic Mastery',
      description: 'Learn protective spells and magical barriers',
      type: 'Magic',
      difficulty: 'Advanced',
      duration: '45 minutes',
      xpReward: 200,
      icon: Shield,
      color: 'from-magic-green to-hero-blue',
      skills: ['Protego Maxima', 'Shield Charms', 'Healing Magic', 'Ward Creation']
    },
    {
      id: 'superhero-combat',
      title: 'Superhero Combat Training',
      description: 'Physical combat and superhero ability training',
      type: 'Physical',
      difficulty: 'Intermediate',
      duration: '60 minutes',
      xpReward: 180,
      icon: Target,
      color: 'from-hero-blue to-accent',
      skills: ['Hand-to-Hand Combat', 'Tactical Awareness', 'Power Control', 'Team Coordination']
    },
    {
      id: 'team-tactics',
      title: 'Team Strategy & Tactics',
      description: 'Coordinate with allies in complex missions',
      type: 'Strategy',
      difficulty: 'Advanced',
      duration: '90 minutes',
      xpReward: 250,
      icon: Trophy,
      color: 'from-accent to-destructive',
      skills: ['Leadership', 'Communication', 'Battle Formations', 'Resource Management']
    }
  ];

  const achievements = [
    { name: 'Spell Master', requirement: 'Complete 50 spell trainings', progress: 42, total: 50, unlocked: false },
    { name: 'Combat Expert', requirement: 'Master all combat skills', progress: 15, total: 20, unlocked: false },
    { name: 'Team Leader', requirement: 'Lead 25 team exercises', progress: 25, total: 25, unlocked: true },
    { name: 'Magic Scholar', requirement: 'Study for 100 hours', progress: 87, total: 100, unlocked: false }
  ];

  const startTraining = (sessionId: string) => {
    setActiveTraining(sessionId);
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        const current = prev[sessionId] || 0;
        if (current >= 100) {
          clearInterval(interval);
          setActiveTraining(null);
          return prev;
        }
        return { ...prev, [sessionId]: current + 2 };
      });
    }, 200);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-magic-green/20 text-magic-green border-magic-green';
      case 'Intermediate': return 'bg-hero-blue/20 text-hero-blue border-hero-blue';
      case 'Advanced': return 'bg-accent/20 text-accent border-accent';
      case 'Expert': return 'bg-primary/20 text-primary border-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card particles">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-hero-blue" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-hero-blue to-accent bg-clip-text text-transparent">
            Training Arena
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Hone your magical and superhero skills in our advanced training facility
        </p>
      </div>

      {/* Training Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 magic-card hover-lift">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">127</div>
            <div className="text-sm text-muted-foreground">Sessions Completed</div>
          </div>
        </Card>
        <Card className="p-4 magic-card hover-lift">
          <div className="text-center">
            <div className="text-2xl font-bold text-hero-blue">34</div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </div>
        </Card>
        <Card className="p-4 magic-card hover-lift">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">2,480</div>
            <div className="text-sm text-muted-foreground">Training XP</div>
          </div>
        </Card>
        <Card className="p-4 magic-card hover-lift">
          <div className="text-center">
            <div className="text-2xl font-bold text-magic-green">12</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </div>
        </Card>
      </div>

      {/* Training Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trainingSessions.map((session) => {
          const Icon = session.icon;
          const isActive = activeTraining === session.id;
          const progress = trainingProgress[session.id] || 0;
          
          return (
            <Card key={session.id} className="p-6 magic-card hover-lift">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${session.color} flex items-center justify-center magical-glow`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">{session.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getDifficultyColor(session.difficulty)}>
                      {session.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Timer className="h-3 w-3 mr-1" />
                      {session.duration}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{session.description}</p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Skills Trained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {session.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                {progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Training Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                {/* Rewards & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{session.xpReward} XP</span>
                  </div>
                  <div className="flex gap-2">
                    {!isActive && progress < 100 && (
                      <Button 
                        size="sm" 
                        className="btn-magical"
                        onClick={() => startTraining(session.id)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Start Training
                      </Button>
                    )}
                    {isActive && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setActiveTraining(null)}
                      >
                        <Pause className="h-4 w-4 mr-1" />
                        Pause
                      </Button>
                    )}
                    {progress === 100 && (
                      <Button 
                        size="sm" 
                        variant="secondary"
                        onClick={() => setTrainingProgress(prev => ({ ...prev, [session.id]: 0 }))}
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Reset
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Achievements Section */}
      <Card className="magic-card">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Training Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                achievement.unlocked 
                  ? 'bg-primary/10 border-primary/30 magical-glow' 
                  : 'bg-muted/20 border-muted'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-semibold ${achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}`}>
                  {achievement.name}
                </h4>
                {achievement.unlocked && (
                  <Badge className="bg-primary/20 text-primary border-primary">
                    Unlocked
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{achievement.requirement}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{achievement.progress}/{achievement.total}</span>
                </div>
                <Progress 
                  value={(achievement.progress / achievement.total) * 100} 
                  className="h-2" 
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EnhancedTrainingModule;