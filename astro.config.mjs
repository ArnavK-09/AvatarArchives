// imports
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// libs
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://avatar-archives.vercel.app",
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    tailwind(),
    svelte(),
    sitemap({
      filter: (page) => !page.includes("keystatic"),
    }),
  ],
  output: "hybrid",
  adapter: vercel(),
});
