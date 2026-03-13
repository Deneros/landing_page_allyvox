# Tech Stack

## Framework & Runtime

- Next.js 16.1.3 (App Router)
- React 19.2.3
- TypeScript 5
- Node.js 18.17+

## Styling & UI

- Tailwind CSS 4
- Lucide React (icons)
- Custom CSS animations and transitions
- Google Fonts: Geist Sans, Geist Mono

## Build System

- Next.js built-in bundler
- PostCSS for CSS processing
- ESLint for code quality

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Create optimized production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

## Configuration

- TypeScript: Strict mode enabled, path aliases via `@/*` → `./src/*`
- Next.js: Image optimization configured for Figma and Unsplash
- ESLint: Next.js recommended config

## Key Dependencies

- `lucide-react`: Icon library
- `@tailwindcss/postcss`: Tailwind v4 PostCSS integration

## Development Notes

- All components use `'use client'` directive (client-side rendering)
- No server components currently in use
- No external API calls or backend integration
- Static content managed via translation files
