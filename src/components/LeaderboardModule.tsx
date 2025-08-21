import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Trophy, 
  Crown, 
  Medal, 
  Star, 
  Zap, 
  Shield, 
  Sword,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

const LeaderboardModule = () => {
  const topPlayers = [
    {
      rank: 1,
      name: 'Hermione Granger',
      house: 'Gryffindor',
      team: 'Avengers',
      points: 15420,
      level: 87,
      avatar: 'HG',
      trend: 'up',
      achievements: 142,
      spellsMastered: 89,
      missionsCompleted: 156
    },
    {
      rank: 2,
      name: 'Tony Stark',
      house: 'Ravenclaw',
      team: 'Avengers',
      points: 14890,
      level: 85,
      avatar: 'TS',
      trend: 'up',
      achievements: 138,
      spellsMastered: 45,
      missionsCompleted: 203
    },
    {
      rank: 3,
      name: 'Luna Lovegood',
      house: 'Ravenclaw',
      team: 'X-Men',
      points: 14256,
      level: 82,
      avatar: 'LL',
      trend: 'down',
      achievements: 134,
      spellsMastered: 92,
      missionsCompleted: 134
    },
    {
      rank: 4,
      name: 'Steve Rogers',
      house: 'Gryffindor',
      team: 'Avengers',
      points: 13987,
      level: 80,
      avatar: 'SR',
      trend: 'same',
      achievements: 129,
      spellsMastered: 23,
      missionsCompleted: 178
    },
    {
      rank: 5,
      name: 'Draco Malfoy',
      house: 'Slytherin',
      team: 'Guardians',
      points: 13456,
      level: 78,
      avatar: 'DM',
      trend: 'up',
      achievements: 126,
      spellsMastered: 76,
      missionsCompleted: 145
    },
    {
      rank: 6,
      name: 'Natasha Romanoff',
      house: 'Slytherin',
      team: 'Avengers',
      points: 13123,
      level: 77,
      avatar: 'NR',
      trend: 'up',
      achievements: 124,
      spellsMastered: 34,
      missionsCompleted: 189
    },
    {
      rank: 7,
      name: 'Neville Longbottom',
      house: 'Gryffindor',
      team: 'X-Men',
      points: 12789,
      level: 75,
      avatar: 'NL',
      trend: 'up',
      achievements: 119,
      spellsMastered: 68,
      missionsCompleted: 132
    },
    {
      rank: 8,
      name: 'Peter Parker',
      house: 'Hufflepuff',
      team: 'Avengers',
      points: 12456,
      level: 73,
      avatar: 'PP',
      trend: 'same',
      achievements: 115,
      spellsMastered: 28,
      missionsCompleted: 167
    },
    {
      rank: 9,
      name: 'Ginny Weasley',
      house: 'Gryffindor',
      team: 'Fantastic Four',
      points: 12098,
      level: 71,
      avatar: 'GW',
      trend: 'down',
      achievements: 112,
      spellsMastered: 71,
      missionsCompleted: 128
    },
    {
      rank: 10,
      name: 'Thor Odinson',
      house: 'Ravenclaw',
      team: 'Avengers',
      points: 11867,
      level: 70,
      avatar: 'TO',
      trend: 'up',
      achievements: 108,
      spellsMastered: 41,
      missionsCompleted: 154
    }
  ];

  const houseStandings = [
    { name: 'Gryffindor', points: 2847, color: 'from-red-600 to-yellow-500', members: 1247 },
    { name: 'Ravenclaw', points: 2756, color: 'from-blue-600 to-blue-400', members: 1089 },
    { name: 'Slytherin', points: 2689, color: 'from-green-600 to-green-400', members: 1156 },
    { name: 'Hufflepuff', points: 2634, color: 'from-yellow-600 to-yellow-400', members: 1334 }
  ];

  const teamStandings = [
    { name: 'Avengers', rating: 95, color: 'from-red-600 to-blue-600', members: 847 },
    { name: 'X-Men', rating: 92, color: 'from-blue-600 to-yellow-500', members: 1205 },
    { name: 'Guardians', rating: 88, color: 'from-green-600 to-orange-500', members: 234 },
    { name: 'Fantastic Four', rating: 87, color: 'from-blue-600 to-red-600', members: 678 }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-yellow-600" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-magic-green" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getHouseColor = (house: string) => {
    switch (house) {
      case 'Gryffindor': return 'text-red-500';
      case 'Ravenclaw': return 'text-blue-500';
      case 'Slytherin': return 'text-green-500';
      case 'Hufflepuff': return 'text-yellow-500';
      default: return 'text-muted-foreground';
    }
  };

  const getTeamColor = (team: string) => {
    switch (team) {
      case 'Avengers': return 'text-red-500';
      case 'X-Men': return 'text-blue-500';
      case 'Guardians': return 'text-green-500';
      case 'Fantastic Four': return 'text-orange-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Leaderboard
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          See the top wizards and heroes across all realms
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topPlayers.slice(0, 3).map((player, index) => (
          <Card key={player.rank} className={`magic-card text-center ${index === 0 ? 'md:order-2 scale-105' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
            <div className="space-y-4">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${
                index === 0 ? 'from-yellow-400 to-yellow-600' : 
                index === 1 ? 'from-gray-300 to-gray-500' : 
                'from-yellow-600 to-yellow-800'
              } flex items-center justify-center text-white text-xl font-bold`}>
                {getRankIcon(player.rank)}
              </div>
              <Avatar className="mx-auto h-16 w-16 border-2 border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-lg font-bold">
                  {player.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p className="text-sm text-muted-foreground">Level {player.level}</p>
                <div className="flex items-center justify-center gap-4 mt-2 text-sm">
                  <span className={getHouseColor(player.house)}>{player.house}</span>
                  <span className={getTeamColor(player.team)}>{player.team}</span>
                </div>
                <div className="text-2xl font-bold text-primary mt-2">
                  {player.points.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  {getTrendIcon(player.trend)}
                  <span className="text-xs text-muted-foreground">This week</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card className="magic-card">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          Top Players
        </h2>
        <div className="space-y-3">
          {topPlayers.map((player) => (
            <div key={player.rank} className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
              player.rank <= 3 ? 'bg-primary/5 border border-primary/20' : 'hover:bg-muted/50'
            }`}>
              <div className="w-8 flex items-center justify-center">
                {getRankIcon(player.rank)}
              </div>
              
              <Avatar className="h-10 w-10 border border-primary">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                  {player.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold truncate">{player.name}</h3>
                  <Badge variant="outline" className="text-xs">Level {player.level}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className={getHouseColor(player.house)}>{player.house}</span>
                  <span className={getTeamColor(player.team)}>{player.team}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-primary">
                  {player.points.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 justify-end">
                  {getTrendIcon(player.trend)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* House & Team Standings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* House Cup */}
        <Card className="magic-card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-hero-blue" />
            House Cup Standings
          </h2>
          <div className="space-y-3">
            {houseStandings.map((house, index) => (
              <div key={house.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50">
                <div className="w-6 text-center">
                  <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${house.color}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">{house.name}</div>
                  <div className="text-sm text-muted-foreground">{house.members.toLocaleString()} members</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{house.points.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Team Rankings */}
        <Card className="magic-card">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            Team Rankings
          </h2>
          <div className="space-y-3">
            {teamStandings.map((team, index) => (
              <div key={team.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50">
                <div className="w-6 text-center">
                  <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${team.color}`}></div>
                <div className="flex-1">
                  <div className="font-semibold">{team.name}</div>
                  <div className="text-sm text-muted-foreground">{team.members.toLocaleString()} members</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-hero-blue">{team.rating}/100</div>
                  <div className="text-xs text-muted-foreground">rating</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardModule;