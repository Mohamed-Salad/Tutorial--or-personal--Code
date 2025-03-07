import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { AuthModal } from '../components/auth/AuthModal';
import { Snackbar, Alert } from '@mui/material';
import { signInWithGoogle } from '../services/authService';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'login' | 'signup' }>({
    open: false,
    mode: 'login'
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithGoogle();
      if (result.user) {
        setSuccess('Successfully signed in with Google!');
        navigate('/onboarding');
      }
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (email: string, password: string, username?: string) => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Implement email/password authentication
      setSuccess('Successfully authenticated!');
      navigate('/onboarding');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Connect with Fellow Book Lovers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of readers, share your favorite books, and discover new literary adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="large"
              onClick={() => setAuthModal({ open: true, mode: 'signup' })}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => setAuthModal({ open: true, mode: 'login' })}
              className="w-full sm:w-auto"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Community?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Track Your Reading Journey</h3>
              <p className="text-gray-600">Keep track of books you've read, want to read, and are currently reading.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Connect with Readers</h3>
              <p className="text-gray-600">Find readers with similar interests and share your thoughts on books.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Discover New Books</h3>
              <p className="text-gray-600">Get personalized book recommendations based on your reading preferences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        open={authModal.open}
        onClose={() => setAuthModal({ open: false, mode: 'login' })}
        onSuccess={handleEmailAuth}
        mode={authModal.mode}
      />

      {/* Notifications */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!success}
        autoHideDuration={6000}
        onClose={() => setSuccess(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccess(null)} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
    </div>
  );
}; 