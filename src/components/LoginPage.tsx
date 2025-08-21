import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Wand2, Shield, Sparkles } from 'lucide-react';
import loginBg from '@/assets/login-bg.jpg';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in a real app, you'd handle proper authentication
    if (credentials.username && credentials.password) {
      navigate('/dashboard');
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <Card className="relative z-10 w-full max-w-md p-8 magic-card">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Wand2 className="h-8 w-8 text-primary" />
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
            <Shield className="h-8 w-8 text-hero-blue" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-hero-blue bg-clip-text text-transparent">
            Enter the Realm
          </h1>
          <p className="text-muted-foreground mt-2">
            Where wizards and heroes unite
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground">
              Wizard Name / Hero Alias
            </Label>
            <div className="relative">
              <Input
                id="username"
                type="text"
                placeholder="Enter your magical identity..."
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                required
              />
              <Wand2 className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">
              Secret Spell / Access Code
            </Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Your magical password..."
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="bg-input/50 border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                required
              />
              <Shield className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full btn-magical text-lg py-6 relative overflow-hidden group"
          >
            <span className="relative z-10">Begin Your Adventure</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            New to our realm?{' '}
            <span className="text-primary cursor-pointer hover:underline">
              Request magical access
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;