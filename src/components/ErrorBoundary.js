import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-8">We're working on fixing this. Please try again.</p>
            <Link to="/" className="bg-gold hover:bg-orange text-navy px-6 py-3 rounded-lg font-medium">
              Return Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
