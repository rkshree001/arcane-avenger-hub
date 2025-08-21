import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import AuthPage from '@/components/AuthPage';
import { useAuth } from '@/hooks/useAuth';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

// Public Route Component
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

// Simple Dashboard
const SimpleDashboard = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg border">
          <h1 className="text-4xl font-bold text-primary mb-4">Magical Heroes Dashboard</h1>
          <p className="text-muted-foreground mb-6">Welcome back, {user?.email}!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary">42</h3>
              <p className="text-muted-foreground">Spells Mastered</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-accent">15</h3>
              <p className="text-muted-foreground">Missions Complete</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-primary">8</h3>
              <p className="text-muted-foreground">Level</p>
            </div>
          </div>
          
          <button 
            onClick={signOut}
            className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Navigate to="/auth" replace />
            </PublicRoute>
          } />
          <Route path="/auth" element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <SimpleDashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;