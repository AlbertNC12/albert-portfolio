// TanStack Start configuration with Nitro SSR server bundling and Vercel preset support.
// Built-in plugins include: TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths,
// nitro, VITE_* env injection, and @ path alias.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = Boolean(process.env.VERCEL || process.env.NITRO_PRESET === "vercel");

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isVercel
    ? {
        nitro: {
          preset: "vercel",
        },
      }
    : {}),
});

