// imports 
import { defineConfig } from 'astro/config';

// libs 
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind(), svelte()],
  output: 'hybrid'
});