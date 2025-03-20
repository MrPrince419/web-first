import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
            <FaExclamationTriangle className="text-gold text-5xl mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-navy mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but there was an error loading this page. 
              Please try refreshing the page or contact support if the problem persists.
            </p>
            <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-orange">
              <FaHome className="mr-2" /> Go to Home
            </Link>
            
            {this.state.error && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
                <p className="font-bold text-red-600 mb-2">Error details:</p>
                <p className="text-xs text-gray-700 overflow-auto">{this.state.error.toString()}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
