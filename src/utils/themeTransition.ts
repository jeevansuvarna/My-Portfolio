type ThemeTransitionEvent = React.MouseEvent<HTMLElement> | MouseEvent;

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => ViewTransition;
  }
}

export function applyThemeWithTransition(
  _event: ThemeTransitionEvent,
  applyTheme: () => void
) {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!document.startViewTransition || prefersReducedMotion) {
    applyTheme();
    return;
  }

  document.startViewTransition(applyTheme);
}
