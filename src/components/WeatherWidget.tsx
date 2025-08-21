import { Card } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, Zap } from 'lucide-react';

const WeatherWidget = () => {
  const locations = [
    {
      name: "Hogwarts Castle",
      condition: "Partly Magical",
      temperature: "12°C",
      icon: Cloud,
      description: "Perfect for outdoor spells",
      color: "text-primary"
    },
    {
      name: "Avengers Tower",
      condition: "Clear Skies",
      temperature: "24°C", 
      icon: Sun,
      description: "Ideal for hero patrol",
      color: "text-hero-blue"
    },
    {
      name: "Diagon Alley",
      condition: "Light Rain",
      temperature: "8°C",
      icon: CloudRain,
      description: "Good day for shopping",
      color: "text-accent"
    }
  ];

  return (
    <Card className="p-4 magic-card">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-primary" />
        Magical Weather
      </h3>
      
      <div className="space-y-3">
        {locations.map((location, index) => {
          const Icon = location.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${location.color}`} />
                <div>
                  <div className="font-medium text-sm">{location.name}</div>
                  <div className="text-xs text-muted-foreground">{location.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold">{location.temperature}</div>
                <div className="text-xs text-muted-foreground">{location.condition}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default WeatherWidget;