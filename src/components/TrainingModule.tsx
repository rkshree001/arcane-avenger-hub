import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Swords, 
  Target, 
  Zap, 
  Shield, 
  Trophy, 
  Play,
  Pause,
  RotateCcw,
  Clock,
  Star,
  Flame,
  Snowflake,
  Wind
} from 'lucide-react';

const TrainingModule = () => {
  const [activeTraining, setActiveTraining] = useState<string | null>(null);
  const [trainingSessions, setTrainingSessions] = useState(new Map());

  const trainingPrograms = [
    {
      id: 'spell-combat',
      title: 'Spell Combat Training',
      description: 'Master offensive and defensive spells in dueling scenarios',
      type: 'Magic',
      difficulty: 'Intermediate',
      duration: '30 minutes',
      exercises: 8,
      progress: 65,
      icon: Zap,
      bgColor: 'from-primary to-accent',
      skills: ['Expelliarmus', 'Protego', 'Stupefy', 'Expecto Patronum'],
      instructor: 'Professor McGonagall'
    },
    {
      id: 'superhero-basics',
      title: 'Superhero Combat Basics',
      description: 'Learn fundamental combat techniques and teamwork',
      type: 'Hero',
      difficulty: 'Beginner',
      duration: '45 minutes',
      exercises: 12,
      progress: 80,
      icon: Shield,
      bgColor: 'from-hero-blue to-blue-600',
      skills: ['Hand-to-Hand Combat', 'Team Coordination', 'Strategy', 'First Aid'],
      instructor: 'Captain America'
    },
    {
      id: 'flight-training',
      title: 'Aerial Combat Training',
      description: 'Master flying techniques and aerial maneuvers',
      type: 'Movement',
      difficulty: 'Advanced',
      duration: '60 minutes',
      exercises: 15,
      progress: 45,
      icon: Wind,
      bgColor: 'from-hero-blue to-cyan-500',
      skills: ['Basic Flight', 'Combat Maneuvers', 'Speed Control', 'Landing'],
      instructor: 'Iron Man'
    },
    {
      id: 'elemental-mastery',
      title: 'Elemental Magic Mastery',
      description: 'Control fire, water, earth, and air elements',
      type: 'Magic',
      difficulty: 'Advanced',
      duration: '75 minutes',
      exercises: 20,
      progress: 30,
      icon: Flame,
      bgColor: 'from-destructive to-orange-600',
      skills: ['Fire Control', 'Water Manipulation', 'Earth Shaping', 'Air Mastery'],
      instructor: 'Doctor Strange'
    },
    {
      id: 'stealth-ops',
      title: 'Stealth Operations',
      description: 'Learn infiltration and reconnaissance techniques',
      type: 'Tactical',
      difficulty: 'Expert',
      duration: '90 minutes',
      exercises: 10,
      progress: 15,
      icon: Target,
      bgColor: 'from-muted to-slate-600',
      skills: ['Invisibility', 'Silent Movement', 'Lock Picking', 'Surveillance'],
      instructor: 'Black Widow'
    },
    {
      id: 'tech-mastery',
      title: 'Technology Mastery',
      description: 'Master high-tech gadgets and equipment',
      type: 'Technology',
      difficulty: 'Intermediate',
      duration: '50 minutes',
      exercises: 14,
      progress: 55,
      icon: Snowflake,
      bgColor: 'from-hero-blue to-purple-600',
      skills: ['Gadget Operation', 'System Hacking', 'Drone Control', 'AI Interface'],
      instructor: 'Tony Stark'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-magic-green/20 text-magic-green border-magic-green';
      case 'Intermediate': return 'bg-hero-blue/20 text-hero-blue border-hero-blue';
      case 'Advanced': return 'bg-accent/20 text-accent border-accent';
      case 'Expert': return 'bg-destructive/20 text-destructive border-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Magic': return 'bg-primary/20 text-primary';
      case 'Hero': return 'bg-hero-blue/20 text-hero-blue';
      case 'Movement': return 'bg-cyan-500/20 text-cyan-500';
      case 'Tactical': return 'bg-muted/20 text-muted-foreground';
      case 'Technology': return 'bg-purple-500/20 text-purple-500';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const startTraining = (id: string) => {
    setActiveTraining(id);
    setTrainingSessions(new Map(trainingSessions.set(id, { started: true, paused: false })));
  };

  const pauseTraining = (id: string) => {
    const session = trainingSessions.get(id) || {};
    setTrainingSessions(new Map(trainingSessions.set(id, { ...session, paused: true })));
  };

  const resumeTraining = (id: string) => {
    const session = trainingSessions.get(id) || {};
    setTrainingSessions(new Map(trainingSessions.set(id, { ...session, paused: false })));
  };

  const resetTraining = (id: string) => {
    setTrainingSessions(new Map(trainingSessions.set(id, { started: false, paused: false })));
    if (activeTraining === id) {
      setActiveTraining(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Swords className="h-8 w-8 text-destructive" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-destructive to-hero-blue bg-clip-text text-transparent">
            Training Arena
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Master your magical and heroic abilities through structured training
        </p>
      </div>

      {/* Training Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Active Programs</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-hero-blue">142</div>
            <div className="text-sm text-muted-foreground">Hours Trained</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">23</div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </div>
        </Card>
        <Card className="p-4 magic-card">
          <div className="text-center">
            <div className="text-2xl font-bold text-magic-green">89%</div>
            <div className="text-sm text-muted-foreground">Overall Progress</div>
          </div>
        </Card>
      </div>

      {/* Training Programs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trainingPrograms.map((program) => {
          const Icon = program.icon;
          const session = trainingSessions.get(program.id) || { started: false, paused: false };
          const isActive = activeTraining === program.id;
          
          return (
            <Card 
              key={program.id}
              className={`p-6 magic-card transition-all duration-300 ${
                isActive ? 'scale-105 magical-glow' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.bgColor} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">by {program.instructor}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getDifficultyColor(program.difficulty)}>
                      {program.difficulty}
                    </Badge>
                    <Badge className={getTypeColor(program.type)}>
                      {program.type}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{program.description}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{program.progress}%</span>
                  </div>
                  <Progress value={program.progress} className="h-2" />
                </div>

                {/* Training Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>{program.exercises} exercises</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {!session.started ? (
                    <Button 
                      onClick={() => startTraining(program.id)}
                      className="btn-magical flex-1"
                      size="sm"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start Training
                    </Button>
                  ) : (
                    <>
                      {session.paused ? (
                        <Button 
                          onClick={() => resumeTraining(program.id)}
                          variant="default"
                          size="sm"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Resume
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => pauseTraining(program.id)}
                          variant="secondary"
                          size="sm"
                        >
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </Button>
                      )}
                      <Button 
                        onClick={() => resetTraining(program.id)}
                        variant="outline"
                        size="sm"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                    </>
                  )}
                </div>

                {/* Active Training Indicator */}
                {isActive && !session.paused && (
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Training in progress...
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Achievement Preview */}
      <Card className="magic-card">
        <div className="text-center space-y-4">
          <Trophy className="h-12 w-12 text-primary mx-auto" />
          <h3 className="text-xl font-bold">Next Achievement</h3>
          <p className="text-muted-foreground">
            Complete 3 more training sessions to unlock the "Master Trainee" badge
          </p>
          <Progress value={70} className="max-w-md mx-auto" />
          <p className="text-sm text-muted-foreground">7 of 10 sessions completed</p>
        </div>
      </Card>
    </div>
  );
};

export default TrainingModule;