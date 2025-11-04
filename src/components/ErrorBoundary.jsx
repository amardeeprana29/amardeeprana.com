import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an external service here
    this.setState({ info });
     
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-primary-dark text-text-primary">
          <div className="max-w-2xl w-full glass-card p-6">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="text-sm text-text-secondary mb-4">
              The site ran into an error while rendering. Open the browser console for details.
            </p>
            <details className="whitespace-pre-wrap text-xs text-text-secondary">
              {this.state.error && this.state.error.toString()}
              {this.state.info && '\n' + this.state.info.componentStack}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
