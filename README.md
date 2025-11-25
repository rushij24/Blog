# PM Blog - Project Management Blog Site

A professional, modern blog site built with Next.js 14, featuring a Project Management theme and markdown-based blog posts.

## Features

- 📝 **Markdown Blog Posts**: Write posts in Markdown format
- 🎨 **PM Theme**: Professional Project Management tool-style design
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 💅 **Tailwind CSS**: Beautiful, responsive styling
- 🔍 **SEO Friendly**: Optimized for search engines
- 📱 **Mobile Responsive**: Works great on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual post pages
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Site header/navigation
│   └── Footer.tsx         # Site footer
├── content/               # Blog post markdown files
│   └── blog/              # Blog posts in .md format
├── lib/                   # Utility functions
│   └── posts.ts           # Blog post processing utilities
└── public/                # Static assets
```

## Writing Blog Posts

Create markdown files in the `content/blog/` directory with the following frontmatter:

```markdown
---
title: Your Blog Post Title
date: 2024-01-15
category: Category (Agile, Tools, Methodology, etc.)
excerpt: A brief description of your post
---

Your markdown content here...
```

### Supported Categories

- Agile
- Tools
- Methodology
- General

(You can add more categories as needed)

## Styling

The site uses a custom Project Management theme with:

- **Primary Color**: PM Blue (#0052cc)
- **Accent Colors**: PM Green, PM Orange, PM Purple
- **Fonts**: Inter (body) and Poppins (headings)

Customize colors in `tailwind.config.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: gray-matter, remark, remark-html
- **Date Formatting**: date-fns

## License

MIT License - feel free to use this for your own blog!
