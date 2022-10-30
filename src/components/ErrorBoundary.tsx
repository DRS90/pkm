import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  Fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return this.props.Fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
