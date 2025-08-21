import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroLogo from '@/assets/hero-logo.png';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => navigate('/login'), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center hero-bg transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center sparkle relative">
        {/* Magical Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative mb-12">
          <div className="relative">
            <img 
              src={heroLogo} 
              alt="Magical Heroes Logo"
              className="w-40 h-40 mx-auto float magical-glow rounded-full border-4 border-primary/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-accent opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -inset-8 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        
        <div className="space-y-6 relative z-10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent animate-pulse">
            Magical Heroes
          </h1>
          <div className="relative">
            <p className="text-2xl text-foreground/80 font-light tracking-wide">
              Where Magic Meets Power
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div className="flex justify-center space-x-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-muted-foreground animate-pulse">
              Initializing magical systems...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;