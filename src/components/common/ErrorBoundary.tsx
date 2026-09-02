import { Component, type ErrorInfo, type ReactNode } from 'react';
import { WuAlert, WuButton } from '@npm-questionpro/wick-ui-lib';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-8">
          <WuAlert variant="danger">
            <p className="font-semibold">Something went wrong</p>
            <p className="text-sm opacity-80">{this.state.error?.message ?? 'Unknown error'}</p>
          </WuAlert>
          <div className="flex gap-3">
            <WuButton onClick={this.handleReset}>Try again</WuButton>
            <WuButton variant="outline" onClick={() => window.location.reload()}>
              Reload page
            </WuButton>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
