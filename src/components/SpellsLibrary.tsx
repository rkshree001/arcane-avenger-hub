import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Wand2, 
  Zap, 
  Shield, 
  Heart, 
  Search,
  Star,
  BookOpen,
  Sparkles
} from 'lucide-react';
import spellExpelliarmus from '@/assets/spell-expelliarmus.jpg';
import powerIronman from '@/assets/power-ironman.jpg';

const SpellsLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const spellsAndPowers = [
    {
      id: 'expelliarmus',
      name: 'Expelliarmus',
      type: 'spell',
      category: 'Defense',
      description: 'The Disarming Charm - forces an opponent to release whatever they are holding',
      power: 85,
      rarity: 'Common',
      image: spellExpelliarmus,
      details: 'A fundamental defensive spell taught at Hogwarts. Perfect for dueling and self-defense.',
      incantation: 'ex-PEL-ee-ARE-mus',
      wandMovement: 'Sharp flick'
    },
    {
      id: 'ironman-suit',
      name: 'Arc Reactor Power',
      type: 'power',
      category: 'Technology',
      description: 'Advanced arc reactor technology providing unlimited clean energy',
      power: 95,
      rarity: 'Legendary',
      image: powerIronman,
      details: 'Tony Stark\'s revolutionary arc reactor powers the Iron Man suit with incredible efficiency.',
      source: 'Stark Industries',
      energy: 'Clean Fusion'
    },
    {
      id: 'lumos',
      name: 'Lumos',
      type: 'spell',
      category: 'Utility',
      description: 'The Wand-Lighting Charm - creates light from the tip of the wand',
      power: 25,
      rarity: 'Common',
      image: null,
      details: 'One of the first spells learned by Hogwarts students. Extremely useful in dark situations.',
      incantation: 'LOO-mos',
      wandMovement: 'Gentle tap'
    },
    {
      id: 'web-slinging',
      name: 'Web-Slinging',
      type: 'power',
      category: 'Movement',
      description: 'Ability to swing through the city using bio-mechanical web shooters',
      power: 78,
      rarity: 'Rare',
      image: null,
      details: 'Spider-Man\'s signature ability allows for rapid traversal through urban environments.',
      source: 'Spider Powers',
      range: '500 feet'
    },
    {
      id: 'protego',
      name: 'Protego',
      type: 'spell',
      category: 'Defense',
      description: 'The Shield Charm - creates an invisible magical barrier',
      power: 70,
      rarity: 'Uncommon',
      image: null,
      details: 'Creates a protective barrier that deflects jinxes, hexes, and curses.',
      incantation: 'pro-TAY-go',
      wandMovement: 'Upward sweep'
    },
    {
      id: 'flight',
      name: 'Flight',
      type: 'power',
      category: 'Movement',
      description: 'Ability to fly through the air using advanced technology or mutation',
      power: 88,
      rarity: 'Rare',
      image: null,
      details: 'Various heroes possess flight capabilities through different means.',
      source: 'Multiple Origins',
      speed: 'Mach 3+'
    }
  ];

  const categories = ['all', 'Defense', 'Technology', 'Utility', 'Movement'];

  const filteredItems = spellsAndPowers.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-muted text-muted-foreground';
      case 'Uncommon': return 'bg-magic-green/20 text-magic-green border-magic-green';
      case 'Rare': return 'bg-hero-blue/20 text-hero-blue border-hero-blue';
      case 'Legendary': return 'bg-primary/20 text-primary border-primary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'spell' ? Wand2 : Zap;
  };

  const getTypeColor = (type: string) => {
    return type === 'spell' ? 'text-primary' : 'text-hero-blue';
  };

  const handleCardFlip = (id: string) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Spells & Powers Library
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Master magical spells and superhero abilities from across the multiverse
        </p>
      </div>

      {/* Search and Filters */}
      <div className="magic-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search spells and powers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'magical-glow' : ''}
              >
                {category === 'all' ? 'All' : category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type);
          const isFlipped = flippedCard === item.id;
          
          return (
            <Card 
              key={item.id} 
              className="relative h-96 magic-card cursor-pointer group perspective-1000"
              onClick={() => handleCardFlip(item.id)}
            >
              <div className={`absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden p-6 flex flex-col">
                  {item.image && (
                    <div 
                      className="h-32 bg-cover bg-center rounded-lg mb-4 relative overflow-hidden"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <TypeIcon className={`h-4 w-4 ${getTypeColor(item.type)}`} />
                        <span className="text-sm text-muted-foreground capitalize">{item.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge className={getRarityColor(item.rarity)}>
                        {item.rarity}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary fill-current" />
                        <span className="text-sm font-medium">{item.power}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-primary text-primary">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Sparkles className="h-3 w-3" />
                      Tap to flip
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-6 bg-gradient-to-br from-card to-muted/20">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <TypeIcon className={`h-5 w-5 ${getTypeColor(item.type)}`} />
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {item.details}
                    </p>

                    <div className="space-y-3 flex-1">
                      {item.type === 'spell' && (
                        <>
                          <div>
                            <span className="text-xs font-medium text-primary">Incantation:</span>
                            <p className="text-sm font-mono">{(item as any).incantation}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-primary">Wand Movement:</span>
                            <p className="text-sm">{(item as any).wandMovement}</p>
                          </div>
                        </>
                      )}
                      
                      {item.type === 'power' && (
                        <>
                          <div>
                            <span className="text-xs font-medium text-hero-blue">Source:</span>
                            <p className="text-sm">{(item as any).source}</p>
                          </div>
                          {(item as any).energy && (
                            <div>
                              <span className="text-xs font-medium text-hero-blue">Energy Type:</span>
                              <p className="text-sm">{(item as any).energy}</p>
                            </div>
                          )}
                          {(item as any).range && (
                            <div>
                              <span className="text-xs font-medium text-hero-blue">Range:</span>
                              <p className="text-sm">{(item as any).range}</p>
                            </div>
                          )}
                          {(item as any).speed && (
                            <div>
                              <span className="text-xs font-medium text-hero-blue">Speed:</span>
                              <p className="text-sm">{(item as any).speed}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Tap to flip back
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No spells or powers found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default SpellsLibrary;