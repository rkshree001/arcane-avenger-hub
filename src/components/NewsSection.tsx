import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ExternalLink, TrendingUp } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "New Spell Discovered in Ancient Grimoire",
      excerpt: "Archaeologists at Hogwarts have uncovered a powerful new spell that could revolutionize magical combat.",
      category: "Magic",
      timeAgo: "2 hours ago",
      trending: true,
      image: "bg-gradient-to-r from-primary to-magic-green"
    },
    {
      id: 2,
      title: "Avengers Assemble for Multiverse Crisis",
      excerpt: "Earth's Mightiest Heroes unite to face an unprecedented threat from parallel dimensions.",
      category: "Heroes",
      timeAgo: "4 hours ago",
      trending: true,
      image: "bg-gradient-to-r from-hero-blue to-accent"
    },
    {
      id: 3,
      title: "Quidditch World Cup Finals Announced",
      excerpt: "The most anticipated magical sporting event of the year is set to begin next month.",
      category: "Sports",
      timeAgo: "6 hours ago",
      trending: false,
      image: "bg-gradient-to-r from-accent to-destructive"
    },
    {
      id: 4,
      title: "Tony Stark Develops New Arc Reactor",
      excerpt: "The latest innovation promises to power entire cities with clean, sustainable energy.",
      category: "Technology",
      timeAgo: "8 hours ago",
      trending: false,
      image: "bg-gradient-to-r from-primary to-hero-blue"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Latest News</h3>
        <Badge variant="outline" className="border-primary text-primary">
          <TrendingUp className="h-3 w-3 mr-1" />
          Live Updates
        </Badge>
      </div>
      
      <div className="space-y-3">
        {news.map((article) => (
          <Card key={article.id} className="p-4 magic-card hover-lift cursor-pointer group">
            <div className="flex gap-4">
              <div className={`w-16 h-16 rounded-lg ${article.image} flex-shrink-0 shimmer`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  {article.trending && (
                    <Badge className="bg-destructive/20 text-destructive border-destructive text-xs">
                      Trending
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.timeAgo}
                  </div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;