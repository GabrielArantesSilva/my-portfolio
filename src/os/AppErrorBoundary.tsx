import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
  readonly fallbackMessage?: string;
  readonly onReset?: () => void;
}

interface State {
  readonly hasError: boolean;
  readonly error: Error | null;
}

export class AppErrorBoundary extends Component<Props, State> {
  override state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[gabriel.os:kernel_panic]', error, errorInfo);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  override render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div
        role="alert"
        className="rounded-xl border border-hairline/80 bg-ink-950/80 p-5 font-mono text-xs shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center gap-2 border-b border-hairline/50 pb-2.5 text-accent">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold tracking-wider uppercase text-[0.68rem]">
            [ system: process exception ]
          </span>
        </div>
        <p className="mt-3 text-muted leading-relaxed">
          {this.props.fallbackMessage ??
            'Ocorreu uma exceção isolada ao renderizar este módulo. O restante do sistema operacional continua operando normalmente.'}
        </p>
        {this.state.error && (
          <pre className="mt-2.5 overflow-x-auto rounded bg-ink-900/60 p-2.5 text-[0.62rem] text-ink-300">
            {this.state.error.message}
          </pre>
        )}
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded border border-hairline bg-ink-850 px-3 py-1 font-mono text-[0.65rem] text-heading transition-colors hover:border-accent hover:text-accent"
          >
            reiniciar módulo
          </button>
        </div>
      </div>
    );
  }
}
