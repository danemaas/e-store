import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full grid place-items-center">
          <h1>Oops!! Something went wrong.</h1>
          <Link to="/" className="underline text-blue-700">
            Return to Home Page
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
