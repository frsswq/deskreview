import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://frsswq.github.io',
  base: 'deskreview',
  integrations: [tailwind()],
  trailingSlash: 'never',
});
