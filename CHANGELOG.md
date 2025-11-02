# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2025-11-02

### Added
- Modern build system upgrade from Webpack 3 to Webpack 5
- Babel 7 upgrade (from Babel 6)
- Comprehensive interactive demo page (`examples/demo.html`)
- Support for function-based callbacks (in addition to array format)
- Improved documentation with examples and timeout documentation
- Better error handling for callback registration
- Updated repository URLs to alihesaridev organization

### Changed
- Default timeout behavior: 30ms per step = 3 seconds total (was always 3s, now documented)
- Build configuration modernized
- Dependencies updated to latest stable versions
- Repository moved to alihesaridev organization

### Fixed
- Fixed callback handling errors when callbacks provided as functions
- Fixed demo timeout values for consistent 5-second auto-close
- Regenerated dist files with new build system
- Fixed "push is not a function" and "forEach is not a function" errors in callbacks

### Removed
- Removed old dependencies: `extract-text-webpack-plugin`, `node-sass`, `babel-cli`, `babel-core`

### Migration from 0.4.0

If you're upgrading from 0.4.0, no breaking changes to the API. The library maintains full backward compatibility.

**Build changes:**
- If you were using the source files directly, the build process is now more modern but produces the same output
- All API methods remain the same

**Callback improvements:**
You can now use callbacks in two ways (both work):

```javascript
// Old way (still works)
callbacks: {
    onShow: [function() { console.log('Shown!'); }]
}

// New way (also works)
callbacks: {
    onShow: function() { console.log('Shown!'); }
}
```

## [0.4.0] - Previous Release

### Added
- Initial stable release
- Basic notification functionality
- Support for multiple types, positions, and animations
- Progress bar indicator
- RTL language support

[0.5.0]: https://github.com/alihesaridev/notice.js/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/alihesaridev/notice.js/releases/tag/v0.4.0

