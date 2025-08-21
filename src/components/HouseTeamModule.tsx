import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  Crown, 
  Star, 
  Sword,
  Heart,
  Zap,
  Book,
  Trophy,
  Shuffle
} from 'lucide-react';

const HouseTeamModule = () => {
  const [currentHouse, setCurrentHouse] = useState('gryffindor');
  const [currentTeam, setCurrentTeam] = useState('avengers');
  const [isRandomizing, setIsRandomizing] = useState(false);

  const houses = [
    {
      id: 'gryffindor',
      name: 'Gryffindor',
      motto: 'Courage, Nerve, and Chivalry',
      colors: ['#7C2D12', '#DC2626'],
      traits: ['Brave', 'Daring', 'Chivalrous', 'Bold'],
      founder: 'Godric Gryffindor',
      element: 'Fire',
      animal: 'Lion',
      points: 450,
      members: 1247
    },
    {
      id: 'slytherin',
      name: 'Slytherin',
      motto: 'Cunning, Ambition, and Resourcefulness',
      colors: ['#065F46', '#10B981'],
      traits: ['Ambitious', 'Cunning', 'Resourceful', 'Determined'],
      founder: 'Salazar Slytherin',
      element: 'Water',
      animal: 'Serpent',
      points: 432,
      members: 1156
    },
    {
      id: 'ravenclaw',
      name: 'Ravenclaw',
      motto: 'Wit, Learning, and Wisdom',
      colors: ['#1E40AF', '#3B82F6'],
      traits: ['Intelligent', 'Wise', 'Witty', 'Creative'],
      founder: 'Rowena Ravenclaw',
      element: 'Air',
      animal: 'Eagle',
      points: 421,
      members: 1089
    },
    {
      id: 'hufflepuff',
      name: 'Hufflepuff',
      motto: 'Loyalty, Fair Play, and Patience',
      colors: ['#92400E', '#F59E0B'],
      traits: ['Loyal', 'Patient', 'Fair', 'Kind'],
      founder: 'Helga Hufflepuff',
      element: 'Earth',
      animal: 'Badger',
      points: 398,
      members: 1334
    }
  ];

  const teams = [
    {
      id: 'avengers',
      name: 'Avengers',
      motto: 'Earth\'s Mightiest Heroes',
      colors: ['#DC2626', '#1E40AF'],
      specialties: ['Teamwork', 'Protection', 'Justice', 'Sacrifice'],
      leader: 'Captain America',
      founded: '2012',
      base: 'Avengers Tower',
      rating: 95,
      missions: 847
    },
    {
      id: 'xmen',
      name: 'X-Men',
      motto: 'Fighting for Peace Between Humans and Mutants',
      colors: ['#1E40AF', '#F59E0B'],
      specialties: ['Diversity', 'Acceptance', 'Evolution', 'Unity'],
      leader: 'Professor X',
      founded: '1963',
      base: 'Xavier\'s School',
      rating: 92,
      missions: 1205
    },
    {
      id: 'guardians',
      name: 'Guardians of the Galaxy',
      motto: 'We Are Groot',
      colors: ['#7C2D12', '#10B981'],
      specialties: ['Space', 'Adventure', 'Humor', 'Family'],
      leader: 'Star-Lord',
      founded: '2014',
      base: 'Milano Ship',
      rating: 88,
      missions: 234
    },
    {
      id: 'fantastic4',
      name: 'Fantastic Four',
      motto: 'The First Family of Superheroes',
      colors: ['#1E40AF', '#DC2626'],
      specialties: ['Science', 'Exploration', 'Innovation', 'Family'],
      leader: 'Mr. Fantastic',
      founded: '1961',
      base: 'Baxter Building',
      rating: 87,
      missions: 678
    }
  ];

  const handleRandomSort = () => {
    setIsRandomizing(true);
    
    // Simulate randomization animation
    const randomHouses = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
    const randomTeams = ['avengers', 'xmen', 'guardians', 'fantastic4'];
    
    let counter = 0;
    const interval = setInterval(() => {
      setCurrentHouse(randomHouses[Math.floor(Math.random() * randomHouses.length)]);
      setCurrentTeam(randomTeams[Math.floor(Math.random() * randomTeams.length)]);
      counter++;
      
      if (counter > 10) {
        clearInterval(interval);
        setIsRandomizing(false);
      }
    }, 200);
  };

  const selectedHouse = houses.find(h => h.id === currentHouse)!;
  const selectedTeam = teams.find(t => t.id === currentTeam)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-8 w-8 text-hero-blue" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-hero-blue to-magic-green bg-clip-text text-transparent">
            House & Team Assignment
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Discover your Hogwarts House and Superhero Team affiliation
        </p>
      </div>

      {/* Random Sorting */}
      <div className="magic-card text-center">
        <h2 className="text-xl font-bold mb-4">Magical Sorting</h2>
        <p className="text-muted-foreground mb-6">
          Let the Sorting Hat and S.H.I.E.L.D. algorithm determine your destiny
        </p>
        <Button 
          onClick={handleRandomSort}
          disabled={isRandomizing}
          className="btn-magical"
          size="lg"
        >
          <Shuffle className="h-5 w-5 mr-2" />
          {isRandomizing ? 'Sorting...' : 'Random Sort'}
        </Button>
      </div>

      {/* Current Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hogwarts House */}
        <Card className="magic-card">
          <div className="text-center space-y-4">
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${selectedHouse.colors[0]}, ${selectedHouse.colors[1]})` 
              }}
            >
              <Crown className="h-8 w-8" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold">{selectedHouse.name}</h3>
              <p className="text-sm text-muted-foreground italic">"{selectedHouse.motto}"</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Founder:</span>
                <p className="font-medium">{selectedHouse.founder}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Element:</span>
                <p className="font-medium">{selectedHouse.element}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Animal:</span>
                <p className="font-medium">{selectedHouse.animal}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Points:</span>
                <p className="font-medium">{selectedHouse.points}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">House Traits</h4>
              <div className="flex flex-wrap gap-2">
                {selectedHouse.traits.map((trait, index) => (
                  <Badge key={index} variant="outline" className="border-primary text-primary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{selectedHouse.members.toLocaleString()} members</span>
            </div>
          </div>
        </Card>

        {/* Superhero Team */}
        <Card className="magic-card">
          <div className="text-center space-y-4">
            <div 
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${selectedTeam.colors[0]}, ${selectedTeam.colors[1]})` 
              }}
            >
              <Star className="h-8 w-8" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold">{selectedTeam.name}</h3>
              <p className="text-sm text-muted-foreground italic">"{selectedTeam.motto}"</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Leader:</span>
                <p className="font-medium">{selectedTeam.leader}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Founded:</span>
                <p className="font-medium">{selectedTeam.founded}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Base:</span>
                <p className="font-medium">{selectedTeam.base}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Rating:</span>
                <p className="font-medium">{selectedTeam.rating}/100</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Team Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTeam.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="border-hero-blue text-hero-blue">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Trophy className="h-4 w-4" />
              <span>{selectedTeam.missions.toLocaleString()} missions completed</span>
            </div>
          </div>
        </Card>
      </div>

      {/* All Houses & Teams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* All Houses */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Hogwarts Houses
          </h3>
          <div className="space-y-3">
            {houses.map((house) => (
              <Card 
                key={house.id}
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  house.id === currentHouse ? 'border-primary magical-glow' : 'hover:bg-muted/50'
                }`}
                onClick={() => setCurrentHouse(house.id)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${house.colors[0]}, ${house.colors[1]})` 
                    }}
                  >
                    <Crown className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{house.name}</h4>
                    <p className="text-sm text-muted-foreground">{house.points} points</p>
                  </div>
                  {house.id === currentHouse && (
                    <Badge className="bg-primary text-primary-foreground">Selected</Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Teams */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Zap className="h-5 w-5 text-hero-blue" />
            Superhero Teams
          </h3>
          <div className="space-y-3">
            {teams.map((team) => (
              <Card 
                key={team.id}
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  team.id === currentTeam ? 'border-hero-blue magical-glow' : 'hover:bg-muted/50'
                }`}
                onClick={() => setCurrentTeam(team.id)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})` 
                    }}
                  >
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{team.name}</h4>
                    <p className="text-sm text-muted-foreground">Rating: {team.rating}/100</p>
                  </div>
                  {team.id === currentTeam && (
                    <Badge className="bg-hero-blue text-hero-blue-foreground">Selected</Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseTeamModule;