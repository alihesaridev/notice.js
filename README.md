# Notice.js

> A beautiful and modern, yet fully customizable notification library.

## Features

- 🎨 Beautiful and customizable design
- 📱 Responsive and mobile-friendly
- ⚡ Lightweight and fast
- 🎭 Support for CSS animations
- ⏱️ Auto-close with configurable timeout
- 📊 Progress bar indicator
- 🎯 Multiple positions (topLeft, topRight, bottomLeft, bottomRight, etc.)
- 🔔 Multiple notification types (success, error, warning, info)
- 🌐 RTL (Right-to-Left) language support

## Installation

### NPM

```bash
npm install notice.js --save
```

### Direct Download

Download from [GitHub releases](https://github.com/alihesaridev/notice.js/releases) or [latest snapshot](https://github.com/alihesaridev/notice.js/archive/master.zip)

## Quick Start

### 1. Include Stylesheet

```html
<link rel="stylesheet" href="node_modules/notice.js/dist/noticejs.css" />
<!-- or -->
<link rel="stylesheet" href="dist/noticejs.css" />
```

### 2. Include Script

```html
<script src="node_modules/notice.js/dist/notice.js"></script>
<!-- or -->
<script src="dist/notice.js"></script>
```

### 3. Basic Usage

```javascript
new NoticeJs({
    text: 'Hello, World!',
    position: 'topRight',
}).show();
```

## Examples

### Basic Notification

```javascript
new NoticeJs({
    text: 'Operation completed successfully!',
    position: 'topRight',
    type: 'success'
}).show();
```

### With Timeout

The `timeout` option controls how long (in milliseconds) the notification stays visible. Set to `false` to disable auto-close.

```javascript
// Auto-close after 5 seconds
new NoticeJs({
    text: 'This will disappear in 5 seconds',
    position: 'topRight',
    timeout: 5000  // 5 seconds
}).show();

// Disable auto-close
new NoticeJs({
    text: 'This stays until manually closed',
    position: 'topRight',
    timeout: false
}).show();
```

### With Title

```javascript
new NoticeJs({
    title: 'Success',
    text: 'Your changes have been saved!',
    position: 'topRight',
    type: 'success'
}).show();
```

### With Animation

Notice.js supports CSS animations. Works great with [Animate.css](https://animate.style/):

```javascript
new NoticeJs({
    text: 'Notification with animation',
    position: 'topLeft',
    animation: {
        open: 'animated bounceInRight',
        close: 'animated bounceOutLeft'
    }
}).show();
```

### With Progress Bar

```javascript
new NoticeJs({
    text: 'Loading...',
    position: 'topRight',
    progressBar: true,
    timeout: 3000  // Progress bar shows countdown
}).show();
```

### Different Types

```javascript
// Success
new NoticeJs({
    text: 'Operation successful!',
    type: 'success',
    position: 'topRight'
}).show();

// Error
new NoticeJs({
    text: 'Something went wrong!',
    type: 'error',
    position: 'topRight'
}).show();

// Warning
new NoticeJs({
    text: 'Please check your input',
    type: 'warning',
    position: 'topRight'
}).show();

// Info
new NoticeJs({
    text: 'New update available',
    type: 'info',
    position: 'topRight'
}).show();
```

### Callbacks

```javascript
new NoticeJs({
    text: 'Notification with callbacks',
    position: 'topRight',
    callbacks: {
        onShow: function() {
            console.log('Notification shown!');
        },
        onClose: function() {
            console.log('Notification closed!');
        }
    }
}).show();
```

## Configuration Options

| Option | Type | Default | Description |
|-------|------|---------|-------------|
| `text` | string | `''` | Notification message text |
| `title` | string | `''` | Notification title (optional) |
| `type` | string | `'success'` | Notification type: `success`, `error`, `warning`, `info` |
| `position` | string | `'topRight'` | Position: `topLeft`, `topRight`, `bottomLeft`, `bottomRight` |
| `timeout` | number/boolean | `30` | Auto-close timeout in milliseconds. Set to `false` to disable. |
| `progressBar` | boolean | `true` | Show progress bar countdown |
| `closeWith` | array | `['button']` | Ways to close: `['button']`, `['click']`, or both `['button', 'click']` |
| `animation` | object/null | `null` | Animation classes: `{ open: 'class', close: 'class' }` |
| `newestOnTop` | boolean | `false` | Show newest notifications on top |
| `rtl` | boolean | `false` | Right-to-Left language support |

## Positions

- `topLeft`
- `topRight`
- `bottomLeft`
- `bottomRight`

## Browser Support

Notice.js works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with polyfills)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) first.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Repository

- GitHub: [https://github.com/alihesaridev/notice.js](https://github.com/alihesaridev/notice.js)
- Issues: [https://github.com/alihesaridev/notice.js/issues](https://github.com/alihesaridev/notice.js/issues)





