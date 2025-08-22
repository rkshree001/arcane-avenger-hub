import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Wand2, Shield, Skull, BookOpen } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  category: 'wizard' | 'hero' | 'villain' | 'spell' | 'story';
  description: string;
  icon: string;
}

const searchData: SearchResult[] = [
  { id: '1', title: 'Harry Potter', category: 'wizard', description: 'The Boy Who Lived', icon: '⚡' },
  { id: '2', title: 'Hermione Granger', category: 'wizard', description: 'Brightest witch of her age', icon: '📚' },
  { id: '3', title: 'Iron Man', category: 'hero', description: 'Tony Stark, genius billionaire', icon: '🦾' },
  { id: '4', title: 'Captain America', category: 'hero', description: 'Super soldier with vibranium shield', icon: '🛡️' },
  { id: '5', title: 'Voldemort', category: 'villain', description: 'The Dark Lord', icon: '💀' },
  { id: '6', title: 'Thanos', category: 'villain', description: 'The Mad Titan', icon: '👊' },
  { id: '7', title: 'Expelliarmus', category: 'spell', description: 'Disarming spell', icon: '✨' },
  { id: '8', title: 'Avada Kedavra', category: 'spell', description: 'Killing curse', icon: '💚' },
  { id: '9', title: 'The Philosopher\'s Stone', category: 'story', description: 'Harry\'s first adventure', icon: '💎' },
  { id: '10', title: 'The Avengers', category: 'story', description: 'Earth\'s Mightiest Heroes', icon: '🌍' },
  { id: '11', title: 'Hagrid', category: 'wizard', description: 'Keeper of Keys and Grounds', icon: '🗝️' },
  { id: '12', title: 'Hawkeye', category: 'hero', description: 'Master archer and marksman', icon: '🏹' },
  { id: '13', title: 'Thor', category: 'hero', description: 'God of Thunder', icon: '🔨' },
  { id: '14', title: 'Loki', category: 'villain', description: 'God of Mischief', icon: '🐍' },
  { id: '15', title: 'Patronus', category: 'spell', description: 'Protective charm against Dementors', icon: '🦌' }
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const searchRef = useRef<HTMLDivElement>(null);

  const categories = [
    { value: 'all', label: 'All', icon: Search },
    { value: 'wizard', label: 'Wizards', icon: Wand2 },
    { value: 'hero', label: 'Heroes', icon: Shield },
    { value: 'villain', label: 'Villains', icon: Skull },
    { value: 'spell', label: 'Spells', icon: BookOpen },
    { value: 'story', label: 'Stories', icon: BookOpen }
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = searchData.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                           item.description.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesQuery && matchesCategory;
      });
      setResults(filteredResults.slice(0, 8));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query, selectedCategory]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'wizard': return 'bg-primary/20 text-primary border-primary/30';
      case 'hero': return 'bg-hero-blue/20 text-hero-blue border-hero-blue/30';
      case 'villain': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'spell': return 'bg-magic-green/20 text-magic-green border-magic-green/30';
      case 'story': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setShowResults(false);
    // Here you would typically navigate to the result or perform an action
    console.log('Selected:', result);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search spells, heroes, or stories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setShowResults(true)}
          className="pl-10 pr-4 magical-glow"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mt-3">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-medium transition-all hover:scale-105 ${
                selectedCategory === category.value
                  ? getCategoryColor(category.value)
                  : 'bg-muted/10 text-muted-foreground border-muted/30 hover:bg-muted/20'
              }`}
            >
              <IconComponent className="h-3 w-3" />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Search Results */}
      {showResults && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 magic-card max-h-80 overflow-y-auto">
          <div className="p-2">
            {results.map((result) => (
              <div
                key={result.id}
                onClick={() => handleResultClick(result)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <span className="text-xl">{result.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm truncate">{result.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(result.category)}`}
                    >
                      {result.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {showResults && query.length > 0 && results.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 magic-card">
          <div className="p-4 text-center text-muted-foreground">
            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No results found for "{query}"</p>
            <p className="text-xs mt-1">Try adjusting your search or category filter</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;