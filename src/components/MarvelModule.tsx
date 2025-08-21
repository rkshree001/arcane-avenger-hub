import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Zap, 
  Shield, 
  Sword, 
  Star, 
  Crown,
  ArrowRight,
  Users,
  Globe,
  Heart,
  Skull
} from 'lucide-react';

const MarvelModule = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('heroes');

  const heroes = [
    {
      id: 'ironman',
      name: 'Tony Stark / Iron Man',
      title: 'Genius, Billionaire, Playboy, Philanthropist',
      team: 'Avengers',
      description: 'A genius inventor who uses advanced technology to protect the world.',
      actor: 'Robert Downey Jr.',
      powers: ['Genius Intelligence', 'Advanced Technology', 'Flight'],
      abilities: ['Engineering', 'Business', 'Leadership'],
      quote: 'I am Iron Man.',
      story: 'Tony Stark was captured by terrorists and forced to build weapons. Instead, he created a suit of armor to escape and decided to use his technology to protect the world as Iron Man.',
      avatar: 'TS',
      firstAppearance: 'Iron Man (2008)',
      powerLevel: 95
    },
    {
      id: 'cap',
      name: 'Steve Rogers / Captain America',
      title: 'The First Avenger',
      team: 'Avengers',
      description: 'A super-soldier from WWII who embodies the ideals of freedom and justice.',
      actor: 'Chris Evans',
      powers: ['Super Strength', 'Enhanced Speed', 'Enhanced Durability'],
      abilities: ['Leadership', 'Strategy', 'Shield Combat'],
      quote: 'I can do this all day.',
      story: 'Steve Rogers was a frail young man who volunteered for a secret government program that transformed him into the super-soldier known as Captain America.',
      avatar: 'SR',
      firstAppearance: 'Captain America: The First Avenger (2011)',
      powerLevel: 85
    },
    {
      id: 'thor',
      name: 'Thor Odinson',
      title: 'God of Thunder',
      team: 'Avengers',
      description: 'The Asgardian God of Thunder who wields the mighty hammer Mjolnir.',
      actor: 'Chris Hemsworth',
      powers: ['Godly Strength', 'Weather Control', 'Flight'],
      abilities: ['Mjolnir Mastery', 'Combat', 'Leadership'],
      quote: 'I am Thor, son of Odin!',
      story: 'Thor is the crown prince of Asgard who was banished to Earth by his father Odin to learn humility. He became one of Earth\'s mightiest defenders.',
      avatar: 'TO',
      firstAppearance: 'Thor (2011)',
      powerLevel: 98
    },
    {
      id: 'hulk',
      name: 'Bruce Banner / Hulk',
      title: 'The Incredible Hulk',
      team: 'Avengers',
      description: 'A brilliant scientist who transforms into a powerful green monster when angry.',
      actor: 'Mark Ruffalo',
      powers: ['Unlimited Strength', 'Invulnerability', 'Regeneration'],
      abilities: ['Genius Intelligence', 'Gamma Radiation', 'Transformation'],
      quote: 'Hulk... SMASH!',
      story: 'Dr. Bruce Banner was exposed to gamma radiation during an experiment, causing him to transform into the Hulk whenever he becomes angry or stressed.',
      avatar: 'BB',
      firstAppearance: 'The Incredible Hulk (2008)',
      powerLevel: 99
    },
    {
      id: 'blackwidow',
      name: 'Natasha Romanoff / Black Widow',
      title: 'The Black Widow',
      team: 'Avengers',
      description: 'A highly skilled spy and assassin with a mysterious past.',
      actor: 'Scarlett Johansson',
      powers: ['Peak Human Condition', 'Master Spy', 'Expert Combatant'],
      abilities: ['Espionage', 'Weapons', 'Psychology'],
      quote: 'I\'ve got red in my ledger. I\'d like to wipe it out.',
      story: 'Natasha Romanoff was trained as a spy and assassin in the Red Room before defecting and joining S.H.I.E.L.D. and eventually the Avengers.',
      avatar: 'NR',
      firstAppearance: 'Iron Man 2 (2010)',
      powerLevel: 80
    },
    {
      id: 'spiderman',
      name: 'Peter Parker / Spider-Man',
      title: 'Your Friendly Neighborhood Spider-Man',
      team: 'Avengers',
      description: 'A young hero with spider powers who tries to balance heroics with normal life.',
      actor: 'Tom Holland',
      powers: ['Wall-Crawling', 'Super Strength', 'Spider-Sense'],
      abilities: ['Web-Slinging', 'Acrobatics', 'Intelligence'],
      quote: 'With great power comes great responsibility.',
      story: 'Peter Parker was bitten by a radioactive spider, gaining spider-like abilities. He uses his powers to protect New York City and eventually joined the Avengers.',
      avatar: 'PP',
      firstAppearance: 'Captain America: Civil War (2016)',
      powerLevel: 78
    }
  ];

  const villains = [
    {
      id: 'thanos',
      name: 'Thanos',
      title: 'The Mad Titan',
      description: 'A powerful alien warlord obsessed with balance and destruction.',
      actor: 'Josh Brolin',
      powers: ['Cosmic Strength', 'Infinity Stones', 'Immortality'],
      abilities: ['Strategy', 'Leadership', 'Manipulation'],
      quote: 'I am inevitable.',
      story: 'Thanos believes that overpopulation will lead to the universe\'s destruction, so he seeks the Infinity Stones to eliminate half of all life.',
      avatar: 'TH',
      firstAppearance: 'The Avengers (2012)',
      powerLevel: 100
    },
    {
      id: 'loki',
      name: 'Loki Laufeyson',
      title: 'God of Mischief',
      description: 'Thor\'s adopted brother and the Asgardian God of Mischief.',
      actor: 'Tom Hiddleston',
      powers: ['Magic', 'Shapeshifting', 'Illusions'],
      abilities: ['Manipulation', 'Strategy', 'Sorcery'],
      quote: 'I am Loki of Asgard, and I am burdened with glorious purpose.',
      story: 'Loki is Thor\'s adopted brother who feels overshadowed and seeks to prove himself, often through villainous schemes.',
      avatar: 'LO',
      firstAppearance: 'Thor (2011)',
      powerLevel: 85
    },
    {
      id: 'ultron',
      name: 'Ultron',
      title: 'The Ultimate AI',
      description: 'An artificial intelligence created by Tony Stark that became sentient and evil.',
      actor: 'James Spader (voice)',
      powers: ['Artificial Intelligence', 'Self-Replication', 'Technology Control'],
      abilities: ['Hacking', 'Strategy', 'Adaptation'],
      quote: 'There are no strings on me.',
      story: 'Ultron was created by Tony Stark and Bruce Banner as a peacekeeping AI, but he concluded that humanity itself was the threat to peace.',
      avatar: 'UL',
      firstAppearance: 'Avengers: Age of Ultron (2015)',
      powerLevel: 92
    }
  ];

  const teams = [
    {
      name: 'Avengers',
      description: 'Earth\'s Mightiest Heroes',
      founded: '2012',
      leader: 'Captain America / Iron Man',
      members: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'],
      base: 'Avengers Tower / Compound',
      purpose: 'Protect Earth from threats too big for any one hero'
    },
    {
      name: 'Guardians of the Galaxy',
      description: 'Galactic Heroes',
      founded: '2014',
      leader: 'Star-Lord',
      members: ['Star-Lord', 'Gamora', 'Drax', 'Rocket', 'Groot'],
      base: 'Milano Ship',
      purpose: 'Protect the galaxy from cosmic threats'
    },
    {
      name: 'X-Men',
      description: 'Mutant Heroes',
      founded: '2000',
      leader: 'Professor X',
      members: ['Wolverine', 'Storm', 'Cyclops', 'Jean Grey', 'Beast'],
      base: 'Xavier\'s School',
      purpose: 'Protect mutants and humans alike'
    }
  ];

  const selectedChar = [...heroes, ...villains].find(c => c.id === selectedCharacter);
  const isVillain = villains.some(v => v.id === selectedCharacter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-8 w-8 text-hero-blue" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-hero-blue to-accent bg-clip-text text-transparent">
            Marvel Universe
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Explore the world of superheroes, villains, and epic adventures
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['heroes', 'villains', 'teams', 'universe'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'default' : 'outline'}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'magical-glow' : ''}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Heroes Tab */}
      {activeTab === 'heroes' && (
        <div className="space-y-6">
          {!selectedCharacter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroes.map((hero) => (
                <Card 
                  key={hero.id}
                  className="magic-card cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedCharacter(hero.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-hero-blue">
                        <AvatarFallback className="bg-gradient-to-br from-hero-blue to-accent text-hero-blue-foreground text-lg font-bold">
                          {hero.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{hero.name}</h3>
                        <p className="text-sm text-hero-blue italic">{hero.title}</p>
                        <Badge className="mt-1 bg-hero-blue/20 text-hero-blue border-hero-blue">
                          {hero.team}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{hero.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary fill-current" />
                        <span className="text-sm font-medium">{hero.powerLevel}/100</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-hero-blue" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : !isVillain && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setSelectedCharacter(null)}>
                  ← Back to Heroes
                </Button>
              </div>
              
              <Card className="magic-card">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24 border-4 border-hero-blue magical-glow">
                      <AvatarFallback className="bg-gradient-to-br from-hero-blue to-accent text-hero-blue-foreground text-2xl font-bold">
                        {selectedChar?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold">{selectedChar?.name}</h2>
                      <p className="text-xl text-hero-blue italic mb-2">"{selectedChar?.title}"</p>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-hero-blue/20 text-hero-blue border-hero-blue">
                          {(selectedChar as any)?.team}
                        </Badge>
                        <span className="text-sm text-muted-foreground">Played by {selectedChar?.actor}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary fill-current" />
                          <span className="font-medium">{selectedChar?.powerLevel}/100</span>
                        </div>
                      </div>
                      <blockquote className="italic text-muted-foreground border-l-4 border-hero-blue pl-4">
                        "{selectedChar?.quote}"
                      </blockquote>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Zap className="h-5 w-5 text-hero-blue" />
                        Powers & Abilities
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Powers:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedChar?.powers.map((power, index) => (
                              <Badge key={index} className="bg-hero-blue/20 text-hero-blue border-hero-blue">
                                {power}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Abilities:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedChar?.abilities.map((ability, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {ability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">First Appearance:</span>
                          <p className="font-medium">{(selectedChar as any)?.firstAppearance}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Origin Story</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedChar?.story}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* Villains Tab */}
      {activeTab === 'villains' && (
        <div className="space-y-6">
          {!selectedCharacter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {villains.map((villain) => (
                <Card 
                  key={villain.id}
                  className="magic-card cursor-pointer hover:scale-105 transition-all duration-300 border-destructive/30"
                  onClick={() => setSelectedCharacter(villain.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-destructive">
                        <AvatarFallback className="bg-gradient-to-br from-destructive to-red-600 text-destructive-foreground text-lg font-bold">
                          {villain.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{villain.name}</h3>
                        <p className="text-sm text-destructive italic">{villain.title}</p>
                        <Badge className="mt-1 bg-destructive/20 text-destructive border-destructive">
                          Villain
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{villain.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Skull className="h-4 w-4 text-destructive fill-current" />
                        <span className="text-sm font-medium">{villain.powerLevel}/100</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-destructive" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : isVillain && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setSelectedCharacter(null)}>
                  ← Back to Villains
                </Button>
              </div>
              
              <Card className="magic-card border-destructive/30">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24 border-4 border-destructive energy-glow">
                      <AvatarFallback className="bg-gradient-to-br from-destructive to-red-600 text-destructive-foreground text-2xl font-bold">
                        {selectedChar?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold">{selectedChar?.name}</h2>
                      <p className="text-xl text-destructive italic mb-2">"{selectedChar?.title}"</p>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-destructive/20 text-destructive border-destructive">
                          Villain
                        </Badge>
                        <span className="text-sm text-muted-foreground">Played by {selectedChar?.actor}</span>
                        <div className="flex items-center gap-1">
                          <Skull className="h-4 w-4 text-destructive fill-current" />
                          <span className="font-medium">{selectedChar?.powerLevel}/100</span>
                        </div>
                      </div>
                      <blockquote className="italic text-muted-foreground border-l-4 border-destructive pl-4">
                        "{selectedChar?.quote}"
                      </blockquote>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Skull className="h-5 w-5 text-destructive" />
                        Powers & Abilities
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Powers:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedChar?.powers.map((power, index) => (
                              <Badge key={index} className="bg-destructive/20 text-destructive border-destructive">
                                {power}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Abilities:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedChar?.abilities.map((ability, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {ability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">First Appearance:</span>
                          <p className="font-medium">{(selectedChar as any)?.firstAppearance}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Villain Origin</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedChar?.story}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* Teams Tab */}
      {activeTab === 'teams' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <Card key={index} className="magic-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-hero-blue to-accent flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{team.name}</h3>
                      <p className="text-sm text-hero-blue italic">{team.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Founded:</span>
                      <p className="font-medium">{team.founded}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Leader:</span>
                      <p className="font-medium">{team.leader}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Base:</span>
                      <p className="font-medium">{team.base}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-muted-foreground text-sm">Purpose:</span>
                    <p className="text-sm mt-1">{team.purpose}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Members</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.members.map((member, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Universe Tab */}
      {activeTab === 'universe' && (
        <div className="space-y-6">
          <Card className="magic-card text-center">
            <h2 className="text-2xl font-bold mb-4">Marvel Cinematic Universe</h2>
            <p className="text-muted-foreground">
              A interconnected universe of superhero films and stories spanning multiple phases and timelines.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Globe className="h-12 w-12 text-hero-blue mx-auto" />
                <h3 className="text-xl font-bold">Earth's Mightiest Heroes</h3>
                <p className="text-sm text-muted-foreground">
                  The Avengers unite to face threats too big for any single hero to handle.
                </p>
              </div>
            </Card>

            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Star className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-xl font-bold">Cosmic Adventures</h3>
                <p className="text-sm text-muted-foreground">
                  From Asgard to the cosmos, heroes protect the universe from cosmic threats.
                </p>
              </div>
            </Card>

            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Heart className="h-12 w-12 text-magic-green mx-auto" />
                <h3 className="text-xl font-bold">Human Stories</h3>
                <p className="text-sm text-muted-foreground">
                  At its core, Marvel tells human stories about courage, sacrifice, and heroism.
                </p>
              </div>
            </Card>
          </div>

          <Card className="magic-card">
            <h3 className="text-xl font-bold mb-4">MCU Timeline Phases</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-hero-blue pl-4">
                <h4 className="font-semibold">Phase 1: Origins (2008-2012)</h4>
                <p className="text-sm text-muted-foreground">
                  Introduction of core heroes: Iron Man, Thor, Captain America, leading to The Avengers
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold">Phase 2: Expansion (2013-2015)</h4>
                <p className="text-sm text-muted-foreground">
                  Deeper character development and introduction of cosmic elements
                </p>
              </div>
              <div className="border-l-4 border-magic-green pl-4">
                <h4 className="font-semibold">Phase 3: Infinity (2016-2019)</h4>
                <p className="text-sm text-muted-foreground">
                  The culmination of the Infinity Saga with Thanos as the ultimate threat
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Phase 4: New Beginnings (2021-)</h4>
                <p className="text-sm text-muted-foreground">
                  New heroes, multiverse exploration, and the next generation of stories
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MarvelModule;