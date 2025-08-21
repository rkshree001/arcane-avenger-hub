import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Wand2, 
  Crown, 
  Star, 
  Heart,
  Shield,
  Scroll,
  ArrowRight,
  Users,
  MapPin
} from 'lucide-react';

const HarryPotterModule = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('story');

  const mainStory = {
    title: "The Boy Who Lived",
    description: "Follow Harry Potter's magical journey from discovering he's a wizard to defeating the dark lord Voldemort and saving the wizarding world.",
    books: [
      { title: "Philosopher's Stone", year: "Year 1", description: "Harry discovers he's a wizard and starts at Hogwarts" },
      { title: "Chamber of Secrets", year: "Year 2", description: "The heir of Slytherin opens the Chamber of Secrets" },
      { title: "Prisoner of Azkaban", year: "Year 3", description: "Sirius Black escapes from Azkaban prison" },
      { title: "Goblet of Fire", year: "Year 4", description: "Harry competes in the dangerous Triwizard Tournament" },
      { title: "Order of the Phoenix", year: "Year 5", description: "The wizarding world denies Voldemort's return" },
      { title: "Half-Blood Prince", year: "Year 6", description: "Harry learns about Voldemort's past and Horcruxes" },
      { title: "Deathly Hallows", year: "Year 7", description: "The final battle between good and evil" }
    ]
  };

  const characters = [
    {
      id: 'harry',
      name: 'Harry Potter',
      title: 'The Boy Who Lived',
      house: 'Gryffindor',
      description: 'The main protagonist who survived Voldemort\'s killing curse as a baby.',
      actor: 'Daniel Radcliffe',
      patronus: 'Stag',
      wand: '11" Holly, Phoenix feather core',
      abilities: ['Parseltongue', 'Flying', 'Defense Against Dark Arts'],
      quote: 'I don\'t think you\'re a waste of space.',
      story: 'Harry Potter was born to James and Lily Potter on July 31, 1980. He became famous in the wizarding world as "The Boy Who Lived" after surviving Lord Voldemort\'s killing curse as a baby, which also led to Voldemort\'s temporary downfall.',
      avatar: 'HP'
    },
    {
      id: 'hermione',
      name: 'Hermione Granger',
      title: 'The Brightest Witch of Her Age',
      house: 'Gryffindor',
      description: 'Harry\'s brilliant best friend, known for her intelligence and vast magical knowledge.',
      actor: 'Emma Watson',
      patronus: 'Otter',
      wand: '10¾" Vine, Dragon heartstring core',
      abilities: ['Exceptional Magic', 'Research', 'Leadership'],
      quote: 'Books! And cleverness! There are more important things, but friendship and bravery.',
      story: 'Born to Muggle parents, Hermione discovered she was a witch when she received her Hogwarts letter. Despite being Muggle-born, she became one of the most talented witches of her generation.',
      avatar: 'HG'
    },
    {
      id: 'ron',
      name: 'Ron Weasley',
      title: 'The Loyal Friend',
      house: 'Gryffindor',
      description: 'Harry\'s loyal best friend from a pure-blood wizarding family.',
      actor: 'Rupert Grint',
      patronus: 'Jack Russell Terrier',
      wand: '14" Willow, Unicorn hair core',
      abilities: ['Chess Strategy', 'Loyalty', 'Courage'],
      quote: 'Don\'t let it worry you. It\'s me. I\'m extremely famous.',
      story: 'The sixth of seven children in the Weasley family, Ron grew up in the wizarding world but was amazed by Harry\'s fame and Hermione\'s brilliance. His loyalty and bravery proved crucial in their adventures.',
      avatar: 'RW'
    },
    {
      id: 'dumbledore',
      name: 'Albus Dumbledore',
      title: 'Headmaster of Hogwarts',
      house: 'Gryffindor',
      description: 'The wise and powerful headmaster who guided Harry throughout his journey.',
      actor: 'Richard Harris / Michael Gambon',
      patronus: 'Phoenix',
      wand: '15" Elder Wand, Thestral tail hair core',
      abilities: ['Master of Death', 'Powerful Magic', 'Wisdom'],
      quote: 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
      story: 'Considered the greatest wizard of his time, Dumbledore was the only wizard Voldemort ever feared. He played a crucial role in both Voldemort\'s first defeat and his final destruction.',
      avatar: 'AD'
    },
    {
      id: 'voldemort',
      name: 'Lord Voldemort',
      title: 'The Dark Lord',
      house: 'Slytherin',
      description: 'The most dangerous dark wizard of all time, feared throughout the wizarding world.',
      actor: 'Ralph Fiennes',
      patronus: 'Cannot produce (no happy memories)',
      wand: '13½" Yew, Phoenix feather core',
      abilities: ['Dark Magic', 'Legilimency', 'Flight'],
      quote: 'There is no good and evil, there is only power and those too weak to seek it.',
      story: 'Born Tom Marvolo Riddle, he became the most feared dark wizard in history. His fear of death led him to split his soul into Horcruxes, but this ultimately led to his downfall.',
      avatar: 'TV'
    },
    {
      id: 'snape',
      name: 'Severus Snape',
      title: 'The Half-Blood Prince',
      house: 'Slytherin',
      description: 'The complex Potions Master with divided loyalties and a tragic past.',
      actor: 'Alan Rickman',
      patronus: 'Doe (same as Lily Potter)',
      wand: '13¼" Birch, Unknown core',
      abilities: ['Potions', 'Occlumency', 'Double Agent'],
      quote: 'Always.',
      story: 'A complex character who served as a double agent during the war. His love for Lily Potter ultimately made him one of the most important figures in Voldemort\'s defeat.',
      avatar: 'SS'
    }
  ];

  const hogwartsHouses = [
    {
      name: 'Gryffindor',
      colors: ['#7C2D12', '#DC2626'],
      traits: ['Courage', 'Bravery', 'Nerve', 'Chivalry'],
      founder: 'Godric Gryffindor',
      element: 'Fire',
      animal: 'Lion',
      ghost: 'Nearly Headless Nick',
      headOfHouse: 'Professor McGonagall',
      commonRoom: 'Gryffindor Tower'
    },
    {
      name: 'Slytherin',
      colors: ['#065F46', '#10B981'],
      traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
      founder: 'Salazar Slytherin',
      element: 'Water',
      animal: 'Serpent',
      ghost: 'Bloody Baron',
      headOfHouse: 'Professor Snape',
      commonRoom: 'Slytherin Dungeon'
    },
    {
      name: 'Ravenclaw',
      colors: ['#1E40AF', '#3B82F6'],
      traits: ['Intelligence', 'Wisdom', 'Wit', 'Learning'],
      founder: 'Rowena Ravenclaw',
      element: 'Air',
      animal: 'Eagle',
      ghost: 'Grey Lady',
      headOfHouse: 'Professor Flitwick',
      commonRoom: 'Ravenclaw Tower'
    },
    {
      name: 'Hufflepuff',
      colors: ['#92400E', '#F59E0B'],
      traits: ['Loyalty', 'Patience', 'Hard Work', 'Dedication'],
      founder: 'Helga Hufflepuff',
      element: 'Earth',
      animal: 'Badger',
      ghost: 'Fat Friar',
      headOfHouse: 'Professor Sprout',
      commonRoom: 'Near the Kitchens'
    }
  ];

  const selectedChar = characters.find(c => c.id === selectedCharacter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="magic-card">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Harry Potter Universe
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Explore the magical world of witchcraft and wizardry
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['story', 'characters', 'houses', 'magic'].map((tab) => (
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

      {/* Main Story Tab */}
      {activeTab === 'story' && (
        <div className="space-y-6">
          <Card className="magic-card">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {mainStory.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {mainStory.description}
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainStory.books.map((book, index) => (
              <Card key={index} className="magic-card hover:scale-105 transition-transform duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/20 text-primary border-primary">
                      {book.year}
                    </Badge>
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Characters Tab */}
      {activeTab === 'characters' && (
        <div className="space-y-6">
          {!selectedCharacter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => (
                <Card 
                  key={character.id}
                  className="magic-card cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedCharacter(character.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-primary">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-lg font-bold">
                          {character.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{character.name}</h3>
                        <p className="text-sm text-primary italic">{character.title}</p>
                        <Badge className="mt-1 bg-primary/20 text-primary border-primary">
                          {character.house}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{character.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Played by {character.actor}</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setSelectedCharacter(null)}>
                  ← Back to Characters
                </Button>
              </div>
              
              <Card className="magic-card">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-24 w-24 border-4 border-primary magical-glow">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
                        {selectedChar?.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold">{selectedChar?.name}</h2>
                      <p className="text-xl text-primary italic mb-2">"{selectedChar?.title}"</p>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-primary/20 text-primary border-primary">
                          {selectedChar?.house}
                        </Badge>
                        <span className="text-sm text-muted-foreground">Played by {selectedChar?.actor}</span>
                      </div>
                      <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                        "{selectedChar?.quote}"
                      </blockquote>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Wand2 className="h-5 w-5 text-primary" />
                        Magical Details
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-muted-foreground">Patronus:</span>
                          <p className="font-medium">{selectedChar?.patronus}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Wand:</span>
                          <p className="font-medium">{selectedChar?.wand}</p>
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
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Story</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedChar?.story}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* Houses Tab */}
      {activeTab === 'houses' && (
        <div className="space-y-6">
          <Card className="magic-card text-center">
            <h2 className="text-2xl font-bold mb-4">Hogwarts Houses</h2>
            <p className="text-muted-foreground">
              The four houses of Hogwarts School of Witchcraft and Wizardry, each with unique traits and traditions.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hogwartsHouses.map((house, index) => (
              <Card key={index} className="magic-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                      style={{ 
                        background: `linear-gradient(135deg, ${house.colors[0]}, ${house.colors[1]})` 
                      }}
                    >
                      <Crown className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{house.name}</h3>
                      <p className="text-sm text-muted-foreground">Founded by {house.founder}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Element:</span>
                      <p className="font-medium">{house.element}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Animal:</span>
                      <p className="font-medium">{house.animal}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Ghost:</span>
                      <p className="font-medium">{house.ghost}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Head:</span>
                      <p className="font-medium">{house.headOfHouse}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">House Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {house.traits.map((trait, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="border-primary text-primary"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Common Room: {house.commonRoom}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Magic Tab */}
      {activeTab === 'magic' && (
        <div className="space-y-6">
          <Card className="magic-card text-center">
            <h2 className="text-2xl font-bold mb-4">The World of Magic</h2>
            <p className="text-muted-foreground">
              Discover the spells, creatures, and magical objects that make the wizarding world extraordinary.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Wand2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Spells & Charms</h3>
                <p className="text-sm text-muted-foreground">
                  From simple Lumos to powerful Patronus charms, master the art of magic.
                </p>
                <div className="space-y-2">
                  {['Expelliarmus', 'Protego', 'Expecto Patronum', 'Avada Kedavra'].map((spell, index) => (
                    <Badge key={index} variant="outline" className="mr-2">
                      {spell}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Crown className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-xl font-bold">Magical Objects</h3>
                <p className="text-sm text-muted-foreground">
                  Powerful artifacts that have shaped wizarding history.
                </p>
                <div className="space-y-2">
                  {['Elder Wand', 'Invisibility Cloak', 'Resurrection Stone', 'Time Turner'].map((object, index) => (
                    <Badge key={index} variant="outline" className="mr-2">
                      {object}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="magic-card">
              <div className="text-center space-y-4">
                <Users className="h-12 w-12 text-hero-blue mx-auto" />
                <h3 className="text-xl font-bold">Magical Creatures</h3>
                <p className="text-sm text-muted-foreground">
                  Fantastic beasts and where to find them in the wizarding world.
                </p>
                <div className="space-y-2">
                  {['Dragons', 'Hippogriffs', 'Dementors', 'House Elves'].map((creature, index) => (
                    <Badge key={index} variant="outline" className="mr-2">
                      {creature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default HarryPotterModule;