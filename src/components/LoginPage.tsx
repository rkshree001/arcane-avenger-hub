import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Users, Wand2, Zap } from 'lucide-react';
import heroLogo from '@/assets/hero-logo.png';
import loginBg from '@/assets/login-bg.jpg';

const LoginPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wand2,
      title: 'Master Spells & Powers',
      description: 'Learn magical spells and superhero abilities from across the multiverse'
    },
    {
      icon: Shield,
      title: 'Join Houses & Teams',
      description: 'Get sorted into Hogwarts houses and join superhero teams like the Avengers'
    },
    {
      icon: Users,
      title: 'Epic Quests & Missions',
      description: 'Embark on legendary adventures and save both magical and normal worlds'
    },
    {
      icon: Zap,
      title: 'Training & Leaderboards',
      description: 'Train your abilities and compete with other heroes and wizards'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"></div>
      </div>

      {/* Magical Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Welcome Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img 
                    src={heroLogo} 
                    alt="Magical Heroes"
                    className="w-24 h-24 magical-glow rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary via-accent to-hero-blue bg-clip-text text-transparent">
                    Magical Heroes
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                  Where Magic Meets Power
                </p>
                <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                  Join the ultimate adventure combining the wizarding world of Harry Potter 
                  with the superhero universe of Marvel. Create your magical-superhero identity 
                  and embark on epic quests!
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-4 magic-card hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Side - Login Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md magic-card">
              <div className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Begin Your Journey
                  </h2>
                  <p className="text-muted-foreground">
                    Sign in to access your magical-superhero profile
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => navigate('/auth')}
                    className="w-full btn-magical"
                    size="lg"
                  >
                    <Shield className="h-5 w-5 mr-2" />
                    Sign In
                  </Button>
                  
                  <Button 
                    onClick={() => navigate('/auth')}
                    variant="outline" 
                    className="w-full"
                    size="lg"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Create Account
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    New to the magical-superhero world?{' '}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-accent"
                      onClick={() => navigate('/auth')}
                    >
                      Join now and discover your powers!
                    </Button>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;