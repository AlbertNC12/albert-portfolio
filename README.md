# Albert Nicholas Chandra — Portfolio

Personal portfolio and projects website built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Development

To run the project locally, install dependencies and start the dev server:

```sh
npm install
npm run dev
# or with bun
bun install
bun run dev
```


## Deployment to Vercel

This project is configured to run on [Vercel](https://vercel.com) with TanStack Start SSR and server functions enabled out of the box.

### Option 1: Via Vercel Dashboard (Git Integration)

1. Push your project to your GitHub repository.
2. In the [Vercel Dashboard](https://vercel.com/dashboard), click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel will detect `tanstack-start` via `vercel.json` and set the build settings automatically (`bun install` / `npm install` and `vite build`).
5. Click **Deploy**.

### Option 2: Via Vercel CLI

```sh
npm i -g vercel
vercel
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

