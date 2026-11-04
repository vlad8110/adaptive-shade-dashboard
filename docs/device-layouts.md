# Device layouts

AdaptiveShade picks a layout per device. Each one is detected on its own, so a change to one layout leaves the others alone.

| Layout | Detected by |
|---|---|
| Large tablet (fit to screen) | iPad user agent, or a Mac user agent with touch; long screen side 1200–1400 px; 4:3 aspect ratio (±0.025); configured dashboard path |
| Desktop browser (fit to screen) | Not a phone/tablet user agent and not a touch Mac; `(hover: hover) and (pointer: fine)`; window at least 1024×600; configured dashboard path |
| Foldable cover / inner | Foldable model in the user agent; cover when the viewport is 600 px wide or less |
| Phone / other | Viewport width |

## Fit-to-screen

On a large tablet or a desktop browser, the home view sizes the header, cameras and controls to fill one screen. `src/device-profile.js` sets `html[data-fit-screen]` and exposes `window.adaptiveShadeDevice.fitToScreen()` so cards can share the same decision. A desktop window smaller than the minimum size falls back to the regular layout, and the attribute updates on resize.

```html
<script>window.adaptiveShadeConfig = { fitPath: '/your-dashboard/home' };</script>
<script src="/local/adaptive-shade/device-profile.js"></script>
```

Testing so far: desktop Chrome at 1280×720, 1512×860 and 1920×1080 on a private installation (headless rendering). Large-tablet detection runs on a physical 12.9" iPad Pro. Other tablets and browsers are untested.
