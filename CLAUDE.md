# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation site for Teramot that serves multiple content areas:
- **API Documentation** (`/api`) - Technical API reference and guides
- **Compliance Hub** (`/compliance`) - Security policies, governance, legal documentation  
- **Developer Blog** (`/blog`) - Technical articles and development updates
- **System Status** (`/status`) - Real-time service status and incident reports

## Development Commands

**Working Directory:** All commands should be run from `teramot-documentation/` subdirectory.

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start
# Alternative:
npx docusaurus start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Type checking
npm run typecheck
# Alternative:
tsc

# Clear Docusaurus cache
npm run clear

# Development utilities
npm run swizzle          # Customize Docusaurus components
npm run write-translations
npm run write-heading-ids
```

## Architecture

### Multi-Plugin Structure
The site uses Docusaurus 3.8 with multiple documentation instances:
- **Main docs** (`docs/`) → `/api` route (sidebars-api.ts)
- **Compliance** (`compliance/`) → `/compliance` route (sidebars-compliance.ts)  
- **Status** (`status/`) → `/status` route (sidebars-status.ts)
- **Blog** (`blog/`) → `/blog` route

### Key Configuration Files
- `docusaurus.config.ts` - Main site configuration with multiple doc plugins
- `sidebars-*.ts` - Sidebar configurations for each documentation section
- `src/pages/index.tsx` - Custom homepage with feature sections
- `src/css/custom.css` - Global styles and theme customization

### Content Organization
```
teramot-documentation/
├── docs/           # API documentation (main docs instance)
├── compliance/     # Security, governance, legal docs
├── status/         # System status and incident reports  
├── blog/           # Developer blog posts with authors.yml
├── static/img/     # Static assets (logos, icons, feature images)
└── src/
    ├── pages/      # Custom React pages
    └── css/        # Styling and themes
```

### Theme and Styling
- Uses custom CSS with light/dark theme support
- Logo variants: `logo.png`, `logo-dark.png`, `logo-light.png`
- Feature section SVGs for homepage
- Custom hero banner and feature sections on homepage

### TypeScript Configuration
- Uses Docusaurus TypeScript preset
- All config files use `.ts` extension
- Type checking via `tsc` command

## Site Deployment
- Production URL: `https://docs.teramot.com`  
- Configured for GitHub Pages deployment
- Organization: `teramot`
- Repository: `teramot-documentation`