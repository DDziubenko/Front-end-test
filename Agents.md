# AGENTS.md

## Setup commands
- Install deps: `npm install`
- Start dev server: `npm run dev`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible
- Control structures should use curly braces
- Expected { after 'if' condition

## Development approach
- **Mobile-first**: Always start with mobile version, then add desktop styles using Tailwind breakpoints
- Use Tailwind breakpoints only (md:, lg:, xl:, etc.) - no custom media queries
- Mobile styles are default, desktop styles are additions using Tailwind responsive prefixes

## Styling
- **Use Tailwind CSS only** - no custom CSS, no scoped styles, no style tags
- All styling must be done through Tailwind utility classes
- Use Tailwind's built-in breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)