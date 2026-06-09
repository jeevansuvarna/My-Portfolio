type ThemeTransitionEvent = React.MouseEvent<HTMLElement> | MouseEvent;

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
