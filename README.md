# andymendez.dev

Personal portfolio site — built with React 19, Tailwind CSS 4, and Vite 6.

**Live:** [andymendez.dev](https://andymendez.dev)

## Stack

- **React 19** + TypeScript
- **Tailwind CSS 4** with a navy and amber theme, set in Schibsted Grotesk
- **Vite 6** for builds
- **AWS S3** + **Cloudflare** for hosting

## Sections

- **Hero** — positioning statement and contact links
- **Selected work** — production systems, labeled by industry rather than employer
- **Experience** — roles and dates, matching the resume
- **Open source** — public GitHub projects
- **Skills** — grouped skill lists
- **Contact** — contact form (serverless)

Site content lives in `src/data/`. Keep client, company, and product names out of `src/data/projects.ts`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
