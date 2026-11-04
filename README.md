# AdaptiveShade

### A dynamic light & dark dashboard for Home Assistant

AdaptiveShade brings camera views and everyday smart-home controls together in a responsive interface, with layouts tailored to phones, foldables, tablets, and larger screens.

## Project status

This repository is being prepared for its first public source release. It currently contains the project documentation and contribution setup. The dashboard implementation is being separated from a private Home Assistant installation and generalized into reusable components. **There is no installable release or HACS package yet.**

## Dashboard design

- Light and dark palettes with clear, state-aware controls.
- Adaptive layouts for phones, foldables, tablets, and desktop browsers.
- Camera popups with an eight-camera selector and local viewing controls.
- Lighting, climate, weather, and vehicle information in one interface.
- Immediate visual press feedback, including cancellation and stuck-indicator recovery.
- Device-specific presentation without changing controls on other devices.

Features are being prepared from the existing dashboard; availability in a public release will be documented when the source is published. Browser simulations and tests on physical hardware will be reported separately.

## Contribute

Ideas, bug reports, documentation, accessibility improvements, and device-layout feedback are welcome.

- Use [Issues](../../issues) for bugs and focused feature requests.
- Use [Discussions](../../discussions) for questions and design ideas.
- Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Public configuration

Examples will use placeholder entities. Keep credentials, authentication files, Home Assistant backups, private camera addresses, and unredacted household screenshots out of commits and reports.

## License

Original project code is licensed under the [MIT License](LICENSE). Third-party dependencies retain their own licenses and attribution requirements.
