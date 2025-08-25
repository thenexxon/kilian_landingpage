# CLAUDE.md — Next.js (App Router + Tailwind CSS 4)

## 📦 Developer Environment

- **Node.js** 20.x LTS (recommended) or 18.x LTS minimum
- **pnpm** 9.x (preferred) or **npm** 10.x or **yarn** 4.x
- **Next.js** 15.5.x (latest stable as of August 2025)
- **React** 19.x (stable since December 2024)
- **Tailwind CSS** 4.0.x (stable release)
- **VS Code** with ESLint/Prettier/Tailwind CSS IntelliSense extensions
- **TypeScript** 5.7.x (strict mode enabled)
- **No experimental features** in production – use stable APIs only

## 🛠 Common Commands

| Task                        | Command                                     |
| --------------------------- | ------------------------------------------- |
| Install dependencies        | `pnpm install`                              |
| Dev server                  | `pnpm dev`                                  |
| Dev with Turbopack          | `pnpm dev --turbo`                          |
| Build production            | `pnpm build`                                |
| Build with Turbopack (beta) | `pnpm build --turbopack`                    |
| Start production            | `pnpm start`                                |
| Type check                  | `pnpm type-check`                           |
| Generate types              | `pnpm next typegen`                         |
| Lint & format               | `pnpm lint && pnpm format`                  |
| Clean cache                 | `rm -rf .next node_modules && pnpm install` |

## 🏗 Architecture Rules (App Router)

1. **App Router only** – no Pages Router mixing (use `/app` directory).
2. **Server Components by default** – add `'use client'` only when needed.
3. **Data fetching** in Server Components via `fetch()` with Next.js caching.
4. **Server Actions** for mutations – use `'use server'` directive.
5. **Route organization**: feature-based folders with `page.tsx`, `layout.tsx`, `loading.tsx`.
6. **API Routes** in `/app/api/` using Route Handlers (no `/pages/api`).
7. **Components ≤ 200 lines** – extract into `/components` or feature folders.

## 🎯 State Management & Data Fetching

```typescript
// Server Component (default) - Data fetching
async function ProductList() {
  // No-cache by default in Next.js 15+
  const products = await fetch("https://api.example.com/products", {
    next: { revalidate: 3600 }, // Opt-in caching (ISR)
  }).then((res) => res.json());

  return <ProductGrid products={products} />;
}

// Client Component - Interactive state
("use client");
import { useState, useActionState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  // React 19 hooks available
}

// Server Actions (form handling)
async function updateProfile(formData: FormData) {
  "use server";
  const name = formData.get("name");
  // Direct database updates here
  revalidatePath("/profile");
}

// Using React 19 Actions
("use client");
import { useActionState } from "react";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, {
    message: "",
  });

  return (
    <form action={formAction}>
      {/* Form fields */}
      <button disabled={isPending}>{isPending ? "Sending..." : "Send"}</button>
    </form>
  );
}
```

## 🎨 Tailwind CSS 4.0 Setup

```css
/* app/globals.css - One line setup! */
@import "tailwindcss";

/* Custom theme using CSS variables */
@theme {
  --font-sans: "Inter", sans-serif;
  --color-primary-500: oklch(0.7 0.28 145);
  --color-primary-600: oklch(0.63 0.3 145);
  /* Wide gamut colors with oklch */
}
```

```typescript
// tailwind.config.ts - Minimal config needed
import type { Config } from "tailwindcss";

export default {
  // Automatic content detection - no paths needed!
  theme: {
    extend: {
      // CSS-first configuration
    },
  },
} satisfies Config;
```

## 🔐 Authentication Setup (NextAuth.js v5 / Auth.js)

```typescript
// lib/auth.config.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard && !isLoggedIn) return false;
      return true;
    },
  },
});

// app/api/auth/[...nextauth]/route.ts
export { GET, POST } from "@/lib/auth.config";

// middleware.ts
export { auth as middleware } from "@/lib/auth.config";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
```

## 📁 Project Structure

```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── (dashboard)/
│   ├── layout.tsx        # Dashboard layout wrapper
│   └── dashboard/
│       ├── page.tsx
│       └── loading.tsx
├── api/
│   └── [route]/
│       └── route.ts      # Route Handlers
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Home page
├── forbidden.tsx         # 403 error page (Next.js 15.1+)
└── unauthorized.tsx      # 401 error page (Next.js 15.1+)

components/
├── ui/                   # Reusable UI components
│   ├── button.tsx
│   └── card.tsx
├── forms/                # Form components
└── layouts/              # Layout components

lib/
├── actions/              # Server Actions
├── api/                  # API utilities
├── auth.config.ts        # Auth configuration
├── db/                   # Database utilities
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
├── utils.ts              # Utility functions (cn, etc.)
└── validations/          # Zod schemas
```

## 🎨 Code Style & TypeScript

```typescript
// Strict TypeScript configuration
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true
  }
}

// Type-safe route handling (Next.js 15.5+)
export default async function Page({
  params,
  searchParams
}: PageProps) {
  const { id } = await params // Async params
  const { q } = await searchParams // Async searchParams
  // Fully typed automatically!
}
```

## 📦 Core Dependencies (2025 Latest)

```json
{
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-auth": "^5.0.0-beta",
    "@auth/prisma-adapter": "^2.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "zod": "^3.24.0",
    "@tanstack/react-query": "^5.62.0",
    "prisma": "^6.0.0",
    "@prisma/client": "^6.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.5.0",
    "prettier": "^3.4.0",
    "prettier-plugin-tailwindcss": "^0.6.0"
  }
}
```

## 🚀 Performance Features

- **Turbopack** (beta for builds): `next build --turbopack` for faster builds
- **Image optimization** via `next/image` with automatic WebP/AVIF
- **Font optimization** with `next/font` for web fonts
- **Streaming SSR** with `loading.tsx` and Suspense boundaries
- **Partial Prerendering** (experimental) for optimal performance
- **Server Components** reduce client bundle size significantly
- **Automatic code splitting** with App Router
- **React 19 optimizations**: Better hydration, pre-warming

## ⚡ Tailwind CSS 4.0 Features

- **5x faster builds** with new Oxide engine
- **Zero configuration** – automatic content detection
- **Native cascade layers** for better specificity control
- **Wide gamut colors** with oklch() by default
- **Container queries** built-in with `@min-*` and `@max-*`
- **One-line setup** – just `@import "tailwindcss"`
- **Lightning CSS** integrated for vendor prefixing
- **CSS-first configuration** via `@theme` directive

## 🔒 Environment Variables

```bash
# .env.local (development)
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl"

# .env.production
NEXT_PUBLIC_API_URL="https://api.production.com"
```

## 🔧 Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
    ],
  },
  experimental: {
    // Turbopack for dev (stable)
    turbo: {},
    // TypeScript route types
    typedRoutes: true,
    // Better auth error handling (15.1+)
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
} satisfies NextConfig;

export default config;
```

## 🔒 Allowed Tools (for Claude Code)

- Edit
- Bash(npm:, pnpm:, yarn:)
- Bash(npx:, pnpx:)
- File operations (create, read, write)
- Git operations

## 📝 Key Updates & Notes

- **Next.js 15.5**: Production Turbopack builds in beta, stable Node.js middleware
- **React 19**: Stable with Actions, useActionState, useFormStatus, better SSR
- **Tailwind CSS 4.0**: Complete rewrite with Oxide engine, 5x faster
- **Caching changes**: GET routes and fetch no longer cached by default (15.0+)
- **Async params/searchParams**: Must await these in Next.js 15+
- **Route type generation**: Auto-generated types with `next typegen`
- **Error pages**: New `forbidden.tsx` and `unauthorized.tsx` (15.1+)
- **View Transitions API**: Experimental support in React 19

## 🚀 Deployment Checklist

- [ ] Run `pnpm build` successfully
- [ ] Test with `--turbopack` build flag
- [ ] Environment variables configured
- [ ] Database migrations applied (`prisma migrate deploy`)
- [ ] Type check passes (`pnpm type-check`)
- [ ] Error tracking configured (Sentry/etc)
- [ ] Analytics setup (Vercel Analytics/etc)
- [ ] SEO metadata and OpenGraph configured
- [ ] Security headers configured

---

**Maintain this file**
Claude reads `CLAUDE.md` automatically; keep sections brief and update as the project evolves to preserve token budget and maximize instruction fidelity.
