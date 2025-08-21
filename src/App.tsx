import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import SplashScreen from '@/components/SplashScreen';
import LoginPage from '@/components/LoginPage';
import AuthPage from '@/components/AuthPage';
import Dashboard from '@/components/Dashboard';
import { useAuth } from '@/hooks/useAuth';
import { useState, useEffect } from 'react';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen hero-bg flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>;
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

// Public Route Component (redirects to dashboard if already authenticated)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen hero-bg flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>;
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/auth" element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
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
