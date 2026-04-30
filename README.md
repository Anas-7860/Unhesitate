# Unhesitate

Unhesitate is a futuristic journaling platform where people can capture dreams and nightmares, explore community-style entries, and turn subconscious patterns into personal growth.

This project is currently in an early MVP stage and is being prepared for serious collaboration and scaling.

## Why This Project

Most journaling apps focus only on daily tasks and productivity. Unhesitate focuses on inner life:

- Capture dreams and nightmares in a structured way
- Build a personal archive of subconscious patterns
- Create a visually rich, immersive writing and reading experience
- Grow into a platform with AI insights, mood tracking, and community features

## Current Status (MVP)

-Implemented now:

- **Next.js 16** App Router with TypeScript (updated for modern `next/image` patterns)
- **Clerk authentication** with global middleware and authorization
- **MongoDB + Mongoose** persistence with data validation
- **Dream/Nightmare management**:
  - Create entries with title, description, location, and optional image
  - Full CRUD operations (Create, Read, Delete)
  - Separate feeds for dreams and nightmares
  - 3D flip card animation on hover/click
- **Motivation wall feature**:
  - Create and browse motivation quotes
  - Support for author and category metadata
  - Color-coded cards with multiple theme palettes (emerald, sky, amber, rose, etc.)
- **Rich UI/UX**:
  - Custom fonts (Orbitron for headers, Exo 2 for body)
  - Glassmorphism design with backdrop blur effects
  - Responsive mobile-first layout
  - Dark mode support with smooth transitions
  - User profile pictures on entries
  - Image URL support for dreams/nightmares
- **Comprehensive API** with error handling

Still basic / in progress:

- No advanced search/filter/sort functionality
- No edit/update flow in UI for dream/motivation entries
- No pagination on feeds
- No tests yet
- No analytics, moderation, or AI features yet
- Community/sharing features not yet implemented

## Tech Stack

### Frontend & Framework
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-161615?style=flat-square&logo=radix-ui&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-Latest-DB7093?style=flat-square&logo=styled-components&logoColor=white)

### Authentication & Backend
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C63FF?style=flat-square&logo=clerk)
![MongoDB](https://img.shields.io/badge/MongoDB-7.2-13AA52?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8.7-880000?style=flat-square&logo=mongoose&logoColor=white)

### Icons & Utilities
![Lucide React](https://img.shields.io/badge/Lucide%20React-Latest-F56565?style=flat-square)
![React Icons](https://img.shields.io/badge/React%20Icons-Latest-D09D3A?style=flat-square)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Orbitron%20%7C%20Exo%202-4285F4?style=flat-square&logo=google-fonts&logoColor=white)

### Package & Build Tools
![npm](https://img.shields.io/badge/npm-Latest-CB3837?style=flat-square&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white)

## Local Setup

### 1. Clone and install

```bash
npm install
```

### 2. Create environment variables

Create a `.env.local` file in the project root or use environment variables provided by your host.

For safety, do NOT commit secret keys to the repo. Add a `.env.example` to the repository with placeholders only:

```env
# .env.example (commit this)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_or_pk_test_PLACEHOLDER
CLERK_SECRET_KEY=sk_live_or_sk_test_PLACEHOLDER
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/<dbname>
```

When running locally, create `.env.local` (this file should be gitignored) and paste real keys there.

Important: the current code reads `MONGO_URI` (not `MONGODB_URI`). If you accidentally exposed keys (for example in a public repo), rotate them immediately.

### 3. Run development server

```bash
npm run dev
```

Open http://localhost:3000

## NPM Scripts

- npm run dev: Start local dev server (Turbopack)
- npm run build: Production build
- npm run start: Run production build locally
- npm run lint: Run lint checks

## App Routes

| Route | Purpose | Type | Auth Required |
|-------|---------|------|---------------| 
| `/` | Landing page with video hero and project intro | Public | No |
| `/create` | Create a new dream or nightmare entry | Page | Yes |
| `/dreams` | Feed of all dreams (3D flip cards) | Public | No |
| `/nightmares` | Feed of all nightmares (3D flip cards) | Public | No |
| `/motivation` | Motivation wall - browse all motivation quotes | Public | No |
| `/motivation/create` | Create a new motivation quote card | Page | Yes |
| `/about` | About page with project vision and features | Public | No |
| `/sign-in` | Clerk authentication flow | Public | No |

**Note**: Pages that require creation (*/create) are protected by Clerk middleware

## API Reference

### Dreams Endpoint
- `GET /api/dreams`: Fetch all dreams (sorted by creation date, newest first)
- `POST /api/dreams`: Create a new dream or nightmare entry

**POST Request body:**
```json
{
  "title": "Flying over neon city",
  "description": "I was floating between towers...",
  "type": "dream",
  "location": "Tokyo",
  "imageUrl": "https://example.com/image.jpg"
}
```

**Fields:**
- `title` (required): Dream title, max 100 characters
- `description` (required): Dream content, max 5000 characters
- `type` (required): Either "dream" or "nightmare"
- `location` (optional): Location in the dream
- `imageUrl` (optional): URL to an image representing the dream

**POST Response** (201 Created):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "clerkUserId": "user_123",
  "username": "John Doe",
  "userImage": "https://...",
  "title": "Flying over neon city",
  "description": "I was floating...",
  "type": "dream",
  "location": "Tokyo",
  "imageUrl": "https://...",
  "createdAt": "2024-04-29T10:30:00Z",
  "updatedAt": "2024-04-29T10:30:00Z"
}
```

**Error Responses:**
- `401 Unauthorized`: User not authenticated
- `500 Server Error`: Database or server error

### Server Actions (Next.js)
- `createDream(input)`: Create a dream entry (uses currentUser auth)
- `getMyDreams()`: Fetch all dreams
- `getNightmares()`: Fetch all nightmares
- `deleteDream(id)`: Delete a dream (requires ownership)
- `createMotivation(input)`: Create a motivation quote
- `getMotivations()`: Fetch all motivations

## Data Models

### Dream Model
```typescript
{
  clerkUserId: String (indexed, required),
  username: String (required),
  userImage: String (required),
  title: String (required, max 100),
  location: String (optional),
  type: "dream" | "nightmare" (required),
  description: String (required, max 5000),
  imageUrl: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### Motivation Model
```typescript
{
  clerkUserId: String (indexed, required),
  username: String (required),
  userImage: String (required),
  quote: String (required, max 300),
  author: String (optional, max 80),
  category: String (optional, max 40),
  createdAt: Date,
  updatedAt: Date
}
```

## Project Structure

```
├── app/
│   ├── (auth)/                     # Clerk authentication routes
│   │   └── sign-in/
│   ├── api/
│   │   └── dreams/
│   │       └── route.ts            # POST/GET dream endpoints
│   ├── create/                     # Create dream/nightmare page
│   ├── dreams/                     # Dreams feed page
│   ├── nightmares/                 # Nightmares feed page
│   ├── motivation/                 # Motivation wall page
│   │   └── create/                 # Create motivation page
│   ├── about/                      # About/project info page
│   ├── layout.tsx                  # Root layout with Clerk provider
│   ├── page.tsx                    # Home page with video hero
│   └── globals.css                 # Global styles
├── components/
│   ├── DreamCard.tsx               # 3D flip card for dreams
│   ├── DreamForm.tsx               # Form to create dreams
│   ├── FormCard.tsx                # Decorative form side panel
│   ├── MotivationCard.tsx          # Color-themed motivation cards
│   ├── MotivationForm.tsx          # Form to create motivations
│   ├── Navbar.tsx                  # Main navigation
│   ├── Navlist.tsx                 # Navigation list items
│   ├── ThemeToggle.tsx             # Dark/light mode toggle
│   ├── VidHero.tsx                 # Hero section with video
│   └── ui/                         # Base UI components
│       ├── button.tsx
│       └── Loginbtn.tsx
├── lib/
│   ├── actions/
│   │   ├── dream.action.ts         # Server actions for dreams
│   │   └── motivation.action.ts    # Server actions for motivation
│   ├── models/
│   │   ├── dream.model.ts          # Mongoose dream schema
│   │   └── motivation.model.ts     # Mongoose motivation schema
│   ├── mongodb.ts                  # MongoDB connection logic
│   └── utils.ts                    # Utility functions
├── public/
│   ├── images/                     # Image assets
│   └── videos/                     # Video assets
├── middleware.ts                   # Clerk authentication middleware
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── next.config.ts                  # Next.js configuration
└── README.md                       # This file
```

## UI/UX Features

### 3D Flip Card Animation
- Dreams and nightmares are displayed in flip cards that rotate on hover (desktop) or click (mobile)
- Front side shows: Dream image (or default icon), title, location, and user info
- Back side shows: Full dream description and creation date
- Smooth 700ms transition using CSS 3D transforms

### Color-Coded Motivation Cards
Motivation cards feature multiple color themes:
- **Emerald**: Growth and healing
- **Sky**: Peace and clarity  
- **Amber**: Warmth and inspiration
- **Rose**: Love and compassion
- Each theme includes coordinated border, shadow, and badge colors for light and dark modes

### Responsive Design
- Mobile-first approach with adaptive layouts
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and form inputs on mobile
- Optimized video hero for all screen sizes

### Dark Mode
- Built-in dark mode support with system preference detection
- Smooth transitions between themes
- Glassmorphism effects in both light and dark modes
- Contrast-optimized text colors

## Key Features Breakdown

### Authentication & Authorization
- **Clerk Integration**: Global middleware protects all routes
- **User Data Association**: Each entry tagged with clerkUserId
- **Authorization Checks**: Users can only delete their own entries
- **User Profile Info**: Username, profile image automatically captured

### Dream/Nightmare Entries
- **Rich Content Support**: Title (100 chars) + Description (5000 chars)
- **Image Uploads**: Store image URLs for visual representation
- **Location Tagging**: Optional location field for dream geography
- **Type Classification**: Explicit dream vs nightmare differentiation
- **Delete Capability**: Users can remove their entries (backend only - no UI yet)

### Motivation Cards
- **Quote Management**: 300-character quote limit for conciseness
- **Metadata**: Optional author and category fields for organization
- **Discovery**: Browse all community motivation cards
- **Color Theming**: 4+ color palettes for visual variety

### Form Validation & Feedback
- **Input Validation**: Required field checks, max length enforcement
- **Error Messages**: User-friendly error messages on submission
- **Success Feedback**: Toast-style success messages after creation
- **Form Reset**: Cleared inputs after successful submission
- **Loading States**: Visual feedback during submission

- ### Performance Optimizations
- **Turbopack**: Faster dev builds and HMR (opt-in/experimental in some Next versions)
- **Image Optimization**: Next.js `Image` component — updated to modern patterns (use `priority` for LCP/hero images, or `fill` with a fixed wrapper and `sizes`). Avoid legacy props like `objectFit` which were removed in newer Next versions.
- **Lean Queries**: MongoDB `.lean()` for faster read operations
- **CSS-in-JS**: Styled-components for scoped, dynamic styles

## Collaboration Roadmap

We are looking for collaborators to help move from MVP to v1.

### Phase 1: Product Foundation

- Improve form validation and error UX
- Add loading/empty/error states across pages
- Add pagination and filtering for feeds
- Add unit/integration tests

### Phase 2: Core Product Value

- Add entry editing and deletion from UI
- Add tags, moods, and sleep metadata
- Build profile page and personal dashboard
- Add search and timeline view

### Phase 3: Smart Features

- AI-powered dream summarization
- AI mood/pattern detection over time
- Weekly insight reports
- Suggested prompts for reflection

### Phase 4: Community and Scale

- Public/private entry controls
- Follow system and reactions
- Moderation and abuse reporting
- Performance tuning and caching strategy

## Areas Where Contributors Are Needed

- Frontend: UI polish, accessibility, responsive improvements
- Backend: richer API design, validation, authorization hardening
- Database: schema evolution and query optimization
- DevOps: deployment workflow, CI/CD, environments
- AI/ML: NLP-based dream insights and recommendation experiments
- Product/UX: feature planning and user journey improvements

## Contribution Guide

1. Fork the repo
2. Create a branch: feature/your-feature-name
3. Make focused commits with clear messages
4. Open a pull request with:
	 - Problem statement
	 - What changed
	 - Screenshots (if UI)
	 - Testing notes

Suggested branch names:

- feature/add-edit-dream-flow
- fix/mobile-navbar-overlap
- chore/add-test-setup

## Quality Standards

- Keep components small and reusable
- Prefer strict typing over any
- Add tests for new behavior
- Avoid silent failures; surface useful errors
- Keep UI fast on mobile-first devices

## Known Gaps

- Some auth/data paths are still being hardened
- Feed endpoints are currently basic and can be expanded
- Observability (logs/metrics) is not set up yet

## Vision

Unhesitate is intended to become more than a CRUD app. The long-term goal is a reflective platform where personal stories, emotional patterns, and intelligent insights help users understand themselves better.

If that mission resonates with you, contributions are welcome.
