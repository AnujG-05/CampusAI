# Campus Knowledge Search - Design System

## Overview

This document outlines the comprehensive design system for **CampusAI**, a modern, AI-powered knowledge discovery platform built for smart campuses. The design prioritizes clarity, accessibility, and a sophisticated academic aesthetic with subtle futuristic elements.

---

## Color Palette

### Light Theme
- **Background**: `#fafaf8` (Off-white)
- **Foreground**: `#29282a` (Deep charcoal)
- **Card**: `#ffffff` (Pure white)
- **Primary**: `#403ca6` (Deep purple - for primary actions)
- **Accent**: `#8b5cf6` (Vibrant purple - for highlights and AI elements)
- **Secondary**: `#e6f2ff` (Light blue - for secondary backgrounds)
- **Muted**: `#eae8e6` (Soft gray - for disabled/subtle elements)
- **Border**: `#ebe9e7` (Light gray borders)

### Dark Theme
- **Background**: `#1e1e2e` (Deep navy)
- **Foreground**: `#f3f3f3` (Near white)
- **Card**: `#2d2d3d` (Dark slate)
- **Primary**: `#f3f3f3` (White - inverted)
- **Accent**: `#a78bfa` (Bright purple - AI highlights)
- **Secondary**: `#404050` (Dark gray)
- **Muted**: `#474757` (Medium gray)
- **Border**: `#404050` (Dark border)

### Purpose
- **Primary Colors**: Deep purple & bright purple accent create a sophisticated, academic feel with AI energy
- **Neutrals**: Support clean, readable typography with proper contrast
- **Accent**: Highlights key interactive elements and AI-powered features

---

## Typography

### Font Stack
- **Sans-serif (Body/UI)**: Geist (Next.js default)
- **Monospace**: Geist Mono (for code/technical content)

### Type Hierarchy

#### Headings
- **H1** (Hero): `text-6xl font-bold` - Landing page main title
- **H2** (Section): `text-4xl font-bold` - Section headers
- **H3** (Subsection): `text-2xl font-bold` - Sub-sections
- **H4** (Card Title): `text-lg font-semibold` - Result cards

#### Body
- **Body**: `text-base leading-relaxed` - Standard paragraph text
- **Small**: `text-sm` - Secondary information, metadata
- **Muted**: `text-muted-foreground` - Reduced emphasis

### Line Heights
- Headings: `1.1` (tight)
- Body: `1.6` (relaxed - 1.5-1.8 range)
- Labels: `1.4` (normal)

---

## Component Library

### Spacing Scale
- `xs`: `0.25rem` (4px)
- `sm`: `0.5rem` (8px)
- `md`: `1rem` (16px)
- `lg`: `1.5rem` (24px)
- `xl`: `2rem` (32px)
- `2xl`: `3rem` (48px)

### Border Radius
- Default: `0.75rem` (12px)
- Small: `0.5rem` (8px)
- Large: `1rem` (16px)
- Full: `9999px` (for pills/badges)

### Shadows
- Subtle: `0 1px 2px rgba(0,0,0,0.05)`
- Normal: `0 4px 6px rgba(0,0,0,0.1)`
- Elevation: `0 10px 15px rgba(0,0,0,0.1)`

---

## Layout Principles

### Grid System
- **Desktop**: Max width 7xl (80rem), 1024px
- **Tablet**: Responsive columns (1-3)
- **Mobile**: Single column, full width with padding

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Spacing Guidelines
- Container padding: `px-4` (mobile) → `px-8` (desktop)
- Gap between cards: `gap-6`
- Vertical section spacing: `py-16` to `py-24`

---

## Key Components

### AI Search Bar
- Full-width search input with glassmorphism effect
- Animated focus state with ring indicator
- Quick suggestion pills below
- Icon: Search (primary) + Sparkles (accent)

### Search Result Cards
- Flex layout: Icon + content + actions
- Type-specific icon colors (PDF=red, Video=blue, etc.)
- Animated relevance score badge
- Highlight text preview
- Meta information (source, date, views)

### Filter Panel
- Sticky, collapsible sections
- Icon + label pairs
- Radio/checkbox inputs with custom styling
- Clear filters button

### Dashboard
- Role-based UI (Student/Faculty views)
- Stats grid with icon highlights
- Saved resources list
- Trending/recommended section
- Gradient header with CTA

### Resource Detail Page
- Hero section with type badge
- Meta information grid (source, author, date, score)
- Action buttons (Download, Save, Share)
- Content preview with syntax highlighting
- AI-extracted highlights
- Related resources

---

## Motion & Animations

### Framer Motion Patterns

#### Page Entrance (Hero)
```
Stagger: 0.2s between children
Duration: 0.8s per item
Easing: easeOut
```

#### Floating Elements
```
Duration: 4-5s
Y-axis: ±20px
Repeat: infinite
Easing: easeInOut
```

#### Hover States
```
Card lift: y: -4px
Icon rotate: 10deg
Duration: 0.3s
Ease: easeOut
```

#### Loading States
```
Pulse animation on skeleton
Stagger on list items
Delay per index: 0.1s
```

### Animation Triggers
- **On Mount**: Initial page load animations
- **On Scroll**: Viewport-triggered animations (`whileInView`)
- **On Hover**: Interactive feedback
- **On Click**: Micro-interactions

---

## Accessibility Features

### WCAG Compliance
- ✅ Color contrast: WCAG AA minimum (4.5:1 for text)
- ✅ Focus indicators: Visible ring on all interactive elements
- ✅ Alt text: All images have descriptive alt text
- ✅ Semantic HTML: Proper heading hierarchy, ARIA labels
- ✅ Keyboard navigation: Full keyboard support

### Screen Reader Support
- `sr-only` class for screen reader only text
- ARIA labels on icon buttons
- Semantic HTML elements (`main`, `article`, `nav`)
- Form labels properly associated with inputs

### Motion
- Respects `prefers-reduced-motion` media query
- No auto-playing animations with sound
- Clear focus states

---

## Page Structure

### Landing Page (`/`)
1. Header (sticky nav, theme toggle)
2. Hero section (animated)
3. AI Search bar
4. Trust indicators
5. Features grid (5 columns)
6. CTA section
7. Footer

### Search Results (`/search?q=query`)
1. Header
2. Search header with new search input
3. Two-column layout:
   - Filters sidebar (sticky)
   - Results grid with animated cards
4. Pagination controls

### Resource Detail (`/resource/[id]`)
1. Header
2. Resource hero (title, type, metadata)
3. Action buttons
4. Stats row
5. Tags/Topics
6. Content preview
7. AI highlights
8. Related resources

### Dashboard (`/dashboard`)
1. Header
2. Role selector (Student/Faculty toggle)
3. Welcome section with CTA
4. Stats grid
5. Saved resources + Recent activity
6. Recommendations (student only)

---

## Dark Mode Implementation

### Theme Provider
- Uses `next-themes` for theme management
- Server-side rendering support
- Automatic system preference detection
- Persisted user preference

### Color Adjustments
- Semantic color tokens adjust automatically
- No hardcoded color values in components
- Uses CSS custom properties (variables)

### Toggle Location
- Header right side, next to Sign In button
- Icon changes based on current theme
- Smooth transitions between themes

---

## Performance Optimizations

### Code Splitting
- Lazy load heavy components (SearchFilters)
- Route-based splitting via Next.js

### Image Optimization
- Use Next.js `Image` component
- Responsive image sizes
- WebP format with fallbacks

### Skeleton Loaders
- Placeholder components match content dimensions
- Smooth transition to real content
- Reduces layout shift (CLS)

### Animation Performance
- Use `transform` and `opacity` for animations
- GPU acceleration enabled
- Respect motion preferences

---

## Brand Voice

### Tone
- **Academic**: Professional, knowledgeable
- **Futuristic**: Modern, AI-forward
- **Helpful**: Clear, supportive, action-oriented
- **Clean**: Simple, no jargon unless necessary

### Key Messages
- "Discover Knowledge, Instantly"
- "AI-Powered Semantic Search"
- "Zero Clutter, Maximum Discovery"

---

## File Structure

```
components/
├── header.tsx
├── ai-search-bar.tsx
├── search-filters.tsx
├── search-result-card.tsx
├── dashboard.tsx
├── animated-hero.tsx
├── animated-feature-cards.tsx
├── animated-search-result.tsx
├── animated-relevance-badge.tsx
├── skeleton-loader.tsx
└── theme-provider.tsx

app/
├── layout.tsx
├── page.tsx (landing)
├── search/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
└── resource/
    └── [id]/page.tsx

app/
└── globals.css (design tokens & theme)
```

---

## Development Notes

### Adding New Components
1. Follow naming convention: `PascalCase` for components
2. Use design tokens for colors/spacing
3. Add animations only where they enhance UX
4. Test dark/light mode compatibility

### Updating Theme
- Edit CSS custom properties in `globals.css`
- Keep light and dark theme consistent
- Test contrast ratios

### Creating Animations
- Use Framer Motion variants for consistency
- Define animation configurations at component level
- Use `whileInView` for scroll-triggered animations
- Respect motion preferences

---

## Resources

- [Next.js Documentation](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [shadcn/ui Components](https://ui.shadcn.com)
