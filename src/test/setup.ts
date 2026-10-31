import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

// jsdom não tem matchMedia; framer-motion e o useScrollReveal consultam.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Canvas sem contexto: Wallpaper e Brain já saem cedo quando getContext é null.
HTMLCanvasElement.prototype.getContext = (() => null) as never;

beforeEach(() => {
  window.localStorage.setItem('ga.lang', 'pt');
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  window.sessionStorage.clear();
});
