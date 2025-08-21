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
      <div className="text-center sparkle">
        <div className="relative mb-8">
          <img 
            src={heroLogo} 
            alt="Magical Heroes Logo"
            className="w-32 h-32 mx-auto float magical-glow rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse"></div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-hero-blue bg-clip-text text-transparent">
            Magical Heroes
          </h1>
          <p className="text-xl text-muted-foreground font-light tracking-wide">
            Where Magic Meets Power
          </p>
          
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 rounded-full bg-hero-blue animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;