# How to contribute

First of all, thank you for taking the time to contribute to this project. We've tried to make a stable project and try to fix bugs and add new features continuously. You can help us do more.

## Setup

### Prerequisites

- Node.js >= 12.0.0
- npm >= 6.0.0

### Installation Steps

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/your-username/notice.js.git
   cd notice.js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```
   This will generate the `dist/notice.js` and `dist/noticejs.css` files.

4. **Test your changes:**
   - Open `examples/demo.html` in your browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     # Then visit http://localhost:8000/examples/demo.html
     ```

### Development Scripts

- `npm run build` - Build for production
- `npm run build:dev` - Build for development (with source maps)
- `npm run dev` - Build in watch mode for development

## Best Practices

Before you post any issue or pull request, search [the issues][issues] and [the pull requests][pulls] to see if it has already been addressed. 

[issues]: https://github.com/alihesaridev/notice.js/issues
[pulls]: https://github.com/alihesaridev/notice.js/pulls

Here are some best practices that will help us accept/address pull requests and issues:

* Outline one, **and only one**, specific problem/feature that you are trying to address.
* Write a **good title** that summarizes the specific problem.
* Introduce the problem before you write any code.
* **Help us reproduce the problem** if applicable with a [jsfiddle][jsfiddle]/[codepen][codepen] showcasing the need for a solution.
* Follow the existing code style and patterns.
* Make sure your changes build successfully (`npm run build`).
* Test your changes in the demo file.

[jsfiddle]: https://jsfiddle.net/
[codepen]: https://codepen.io/

## Pull Requests

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Follow the existing code style
   - Make sure to run `npm run build` before committing
   - Test your changes in `examples/demo.html`

3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```
   Use conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `chore:` for maintenance tasks

4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit a pull request:**
   - Go to [GitHub Pull Requests][pr]
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template
   - Link any related issues

[pr]: https://github.com/alihesaridev/notice.js/compare

At this point you're waiting on us. We may suggest some changes or improvements or alternatives.

## Project Structure

```
notice.js/
├── src/              # Source files
│   ├── js/          # JavaScript source
│   └── sass/        # Styles source
├── dist/            # Built files (generated)
├── examples/        # Demo and examples
├── .github/         # GitHub workflows and templates
└── docs/            # Documentation
```

## Code Style

- Use ES6+ features
- Follow existing naming conventions
- Comment complex logic
- Keep functions focused and small
- Maintain backward compatibility when possible
