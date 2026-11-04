/*
 * AdaptiveShade device profile helpers.
 *
 * Decides which layout a view should use. Each layout is detected separately,
 * so a change for one device does not alter the others.
 *
 *   largeTablet()  12.9"/13" class tablet in landscape or portrait (4:3 screen)
 *   desktopFit()   desktop browser with a mouse/trackpad, sized like a tablet
 *   fitToScreen()  either of the above -> use the fit-to-screen layout
 *
 * Configure with window.adaptiveShadeConfig = { fitPath: '/dashboard/home' }
 * before loading. Defaults are placeholders; set your own dashboard path.
 */
(function () {
  const cfg = Object.assign(
    { fitPath: '/dashboard-example/home', desktopMinWidth: 1024, desktopMinHeight: 600 },
    window.adaptiveShadeConfig || {}
  );

  const onFitPath = () => location.pathname === cfg.fitPath;

  function largeTablet() {
    try {
      const ua = navigator.userAgent;
      // iPadOS reports a Mac user agent; touch support tells them apart.
      const apple = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
      const long = Math.max(screen.width, screen.height);
      const short = Math.min(screen.width, screen.height);
      return apple && onFitPath() && long >= 1200 && long <= 1400 &&
        Math.abs(long / short - 4 / 3) <= 0.025;
    } catch (_) { return false; }
  }

  function desktopFit() {
    try {
      const ua = navigator.userAgent;
      return onFitPath() &&
        !/iPad|iPhone|Android|Mobile/i.test(ua) &&
        !(/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) &&
        matchMedia('(hover: hover) and (pointer: fine)').matches &&
        innerWidth >= cfg.desktopMinWidth && innerHeight >= cfg.desktopMinHeight;
    } catch (_) { return false; }
  }

  const fitToScreen = () => largeTablet() || desktopFit();

  function apply() {
    document.documentElement.toggleAttribute('data-fit-screen', fitToScreen());
  }

  window.adaptiveShadeDevice = window.adaptiveShadeDevice || { largeTablet, desktopFit, fitToScreen, apply };
  apply();
  addEventListener('resize', apply, { passive: true });
})();
