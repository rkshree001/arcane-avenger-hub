import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  Sparkles,
  Shield,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import heroLogo from '@/assets/hero-logo.png';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });
  
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInData.email,
        password: signInData.password,
      });

      if (error) {
        if (error.message === 'Invalid login credentials') {
          setMessage({ type: 'error', text: 'Invalid email or password. Please try again.' });
        } else {
          setMessage({ type: 'error', text: error.message });
        }
        return;
      }

      if (data.user) {
        setMessage({ type: 'success', text: 'Welcome back, magical hero!' });
        setTimeout(() => navigate('/dashboard'), 1000);
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (signUpData.password !== signUpData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match!' });
      setIsLoading(false);
      return;
    }

    if (signUpData.password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters long.' });
      setIsLoading(false);
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      
      const { data, error } = await supabase.auth.signUp({
        email: signUpData.email,
        password: signUpData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: signUpData.displayName
          }
        }
      });

      if (error) {
        if (error.message === 'User already registered') {
          setMessage({ type: 'error', text: 'An account with this email already exists. Please sign in instead.' });
        } else {
          setMessage({ type: 'error', text: error.message });
        }
        return;
      }

      if (data.user) {
        // Create profile entry
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              user_id: data.user.id,
              display_name: signUpData.displayName || 'Magical Hero',
              house: 'unassigned',
              team: 'unassigned',
              level: 1,
              total_points: 0,
              spells_mastered: 0,
              missions_completed: 0
            }
          ]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
        }

        setMessage({ 
          type: 'success', 
          text: 'Account created successfully! Please check your email to verify your account, then you can sign in.' 
        });
        
        // Clear form
        setSignUpData({
          email: '',
          password: '',
          confirmPassword: '',
          displayName: ''
        });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen hero-bg flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      <Card className="w-full max-w-md magic-card relative z-10">
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={heroLogo} 
                  alt="Magical Heroes"
                  className="w-20 h-20 magical-glow rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-lg animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Magical Heroes
              </h1>
              <p className="text-muted-foreground">Where Magic Meets Power</p>
            </div>
          </div>

          {/* Message Alert */}
          {message && (
            <Alert className={`${
              message.type === 'error' ? 'border-destructive bg-destructive/10' :
              message.type === 'success' ? 'border-magic-green bg-magic-green/10' :
              'border-hero-blue bg-hero-blue/10'
            }`}>
              {message.type === 'error' ? <AlertCircle className="h-4 w-4" /> :
               message.type === 'success' ? <CheckCircle className="h-4 w-4" /> :
               <AlertCircle className="h-4 w-4" />}
              <AlertDescription className={
                message.type === 'error' ? 'text-destructive' :
                message.type === 'success' ? 'text-magic-green' :
                'text-hero-blue'
              }>
                {message.text}
              </AlertDescription>
            </Alert>
          )}

          {/* Auth Tabs */}
          <Tabs defaultValue="signin" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Sign In Form */}
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="wizard@hogwarts.edu"
                      value={signInData.email}
                      onChange={(e) => setSignInData({...signInData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your magical password"
                      value={signInData.password}
                      onChange={(e) => setSignInData({...signInData, password: e.target.value})}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-magical"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Display Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Your wizard/hero name"
                      value={signUpData.displayName}
                      onChange={(e) => setSignUpData({...signUpData, displayName: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="wizard@hogwarts.edu"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a magical password"
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                      className="pl-10 pr-10"
                      required
                      minLength={6}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-confirm"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={signUpData.confirmPassword}
                      onChange={(e) => setSignUpData({...signUpData, confirmPassword: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-superhero"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuthPage;