# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
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

