# VoxAlly - AI Voice Agents Landing Page

A modern, responsive Next.js website for VoxAlly, an AI voice agent platform that helps businesses close deals through intelligent voice conversations.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Internationalization**: English and Spanish language support
- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Accessibility**: Semantic HTML and ARIA-friendly markup

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.3 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Runtime | React 19.2.3 |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing page
│   ├── solutions/          # Solutions page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── cards/              # Card components (Feature, Pricing, Industry, etc.)
│   ├── forms/              # Form components (ContactForm)
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── sections/           # Page sections (Hero, Testimonials, FAQ, etc.)
│   └── ui/                 # UI primitives (Buttons, Headers)
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities, constants, and context
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/voxally-landing.git

# Navigate to the project
cd voxally-landing

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Linting

```bash
npm run lint
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Main landing page with hero, features, testimonials |
| Pricing | `/pricing` | Pricing plans and comparison table |
| Solutions | `/solutions` | Industry-specific solutions |
| Contact | `/contact` | Contact form and company information |

## Design System

### Colors

- **Background**: `#24201c` (Dark brown)
- **Surface**: `#0c0803` (Darker brown)
- **Primary**: `#2b7a78` (Teal)
- **Text**: White with opacity variations

### Typography

- **Headings**: Raleway (Medium, 500)
- **Body**: Inter (Regular/Medium, 400/500)

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Environment Variables

No environment variables are required for local development.

For production, create a `.env.local` file if you need to configure:

```env
# Example (not required for basic setup)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting provider

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## License

This project is proprietary. All rights reserved.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
