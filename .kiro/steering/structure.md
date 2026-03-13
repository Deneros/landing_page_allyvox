# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/            # Contact page route
│   ├── pricing/            # Pricing page route
│   ├── solutions/          # Solutions page route
│   ├── globals.css         # Global styles and Tailwind directives
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Home page
├── components/
│   ├── cards/              # Card components (Feature, Pricing, Industry, etc.)
│   ├── forms/              # Form components (ContactForm)
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── sections/           # Page sections (Hero, Testimonials, FAQ, etc.)
│   ├── ui/                 # UI primitives (Buttons, Headers, ScrollReveal)
│   └── types.ts            # Shared TypeScript types
├── hooks/                  # Custom React hooks
│   ├── useHover.ts
│   ├── useScrollAnimation.ts
│   └── index.ts
└── lib/                    # Utilities and configuration
    ├── constants.ts        # Brand colors and constants
    ├── context.tsx         # React Context (theme, language)
    ├── images.ts           # Image path constants
    └── translations.ts     # i18n content
```

## Component Architecture

### Component Categories

1. **Cards** (`components/cards/`): Self-contained content blocks
   - FeatureCard, PricingCard, IndustryCard, etc.
   - Reusable across different pages

2. **Sections** (`components/sections/`): Full-width page sections
   - HeroSection, TestimonialCarousel, FAQAccordion, etc.
   - Compose multiple cards/components

3. **UI Primitives** (`components/ui/`): Basic building blocks
   - CTAButton, SecondaryButton, SectionHeader, ScrollReveal
   - Highly reusable, minimal logic

4. **Layout** (`components/layout/`): Structural components
   - Navbar, Footer
   - Consistent across all pages

5. **Forms** (`components/forms/`): Form-related components
   - ContactForm
   - Handle user input and validation

### Component Patterns

- All components export named exports (not default)
- Index files (`index.ts`) re-export for cleaner imports
- Props defined via TypeScript interfaces in `types.ts` or inline
- Inline styles used for dynamic theming (via context)
- Tailwind classes for static styling

## State Management

- **Global State**: React Context (`lib/context.tsx`)
  - Theme (dark/light)
  - Language (en/es)
  - Computed colors based on theme
- **Local State**: Component-level `useState` hooks
- **Persistence**: localStorage for theme and language preferences

## Styling Conventions

- Tailwind utility classes for layout and spacing
- Inline styles for dynamic colors (theme-dependent)
- Custom CSS in `globals.css` for animations and global utilities
- Responsive design: mobile-first with `sm:`, `md:`, `lg:` breakpoints

## File Naming

- Components: PascalCase (e.g., `FeatureCard.tsx`)
- Utilities/hooks: camelCase (e.g., `useHover.ts`)
- Pages: lowercase (Next.js convention, e.g., `page.tsx`)
- Types: Defined in `types.ts` or inline with component

## Import Patterns

- Use path alias: `@/` maps to `src/`
- Example: `import { CTAButton } from '@/components/ui/CTAButton'`
- Prefer named imports over default imports
- Group imports: external → internal → relative

## Design Files

- `.pen` files in `src/` directory (Figma/design artifacts)
- Not part of build process, used for reference
